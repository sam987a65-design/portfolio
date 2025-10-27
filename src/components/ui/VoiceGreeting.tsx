'use client'

import { useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function VoiceGreeting() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  const greetingText = "Hey, I'm Aryan — welcome to my portfolio! I'm passionate about AI, Machine Learning, and Web Development."

  useEffect(() => {
    // Check if user has already heard the greeting in this session
    const hasHeardGreeting = sessionStorage.getItem('hasHeardGreeting')
    
    if (hasHeardGreeting) {
      setHasPlayed(true)
      return
    }

    // Wait a bit for page to load, then play greeting
    const timer = setTimeout(() => {
      playGreeting()
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const playGreeting = () => {
    if ('speechSynthesis' in window && !isMuted) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel()

      // Load voices if not already loaded
      let voices = window.speechSynthesis.getVoices()
      
      // If voices aren't loaded yet, wait for them
      if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          voices = window.speechSynthesis.getVoices()
          speakGreeting(voices)
        }
      } else {
        speakGreeting(voices)
      }
    }
  }

  const speakGreeting = (voices: SpeechSynthesisVoice[]) => {
    const utterance = new SpeechSynthesisUtterance(greetingText)
    
    // Configure voice settings for natural Indian English male voice
    utterance.rate = 0.9 // Natural speaking pace
    utterance.pitch = 0.8 // Deeper male voice
    utterance.volume = 0.9 // Clear volume

    // Priority order for Indian English voices (Male preferred)
    const voicePreferences = [
      // Microsoft Indian MALE voices (best quality)
      'Microsoft Ravi - English (India)',
      'Ravi',
      // Other Indian male voices
      'Rishi',
      // Google male voices
      'Google UK English Male',
      'Google US English Male',
      // Microsoft Indian female voices (fallback)
      'Microsoft Heera - English (India)',
      'Microsoft Swara - English (India)',
      'Veena',
      // Fallback to any English (India) voice
      'en-IN',
      // General male English voices
      'Microsoft David',
      'Alex',
      // Other English voices
      'Google English',
      'Microsoft Zira',
      'Samantha',
    ]

    // Find the best available voice
    let selectedVoice: SpeechSynthesisVoice | null = null

    // Try to find voice by exact name match
    for (const preference of voicePreferences) {
      selectedVoice = voices.find(voice => 
        voice.name.includes(preference) || 
        voice.lang.includes(preference)
      ) || null
      if (selectedVoice) break
    }

    // If no match, try to find any Indian English voice
    if (!selectedVoice) {
      selectedVoice = voices.find(voice => 
        voice.lang === 'en-IN' || 
        voice.lang.startsWith('en-IN')
      ) || null
    }

    // If still no match, use any English voice
    if (!selectedVoice) {
      selectedVoice = voices.find(voice => 
        voice.lang.startsWith('en-')
      ) || null
    }

    // Apply the selected voice
    if (selectedVoice) {
      utterance.voice = selectedVoice
      console.log('Using voice:', selectedVoice.name, selectedVoice.lang)
    }

    utterance.onstart = () => {
      setIsPlaying(true)
    }

    utterance.onend = () => {
      setIsPlaying(false)
      setHasPlayed(true)
      sessionStorage.setItem('hasHeardGreeting', 'true')
    }

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event)
      setIsPlaying(false)
    }

    window.speechSynthesis.speak(utterance)
  }

  const toggleMute = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
    }
    setIsMuted(!isMuted)
  }

  const replayGreeting = () => {
    if (!isPlaying) {
      playGreeting()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Replay Button */}
      {hasPlayed && !isPlaying && (
        <button
          onClick={replayGreeting}
          className="group relative bg-midnight-light/90 backdrop-blur-sm border border-azure/20 rounded-full p-3 hover:bg-midnight-lighter transition-all duration-300 hover:scale-110"
          aria-label="Replay greeting"
        >
          <Volume2 className="w-5 h-5 text-azure" />
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-midnight-light border border-azure/20 rounded-lg text-xs text-soft whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Replay greeting
          </span>
        </button>
      )}

      {/* Mute Toggle */}
      <button
        onClick={toggleMute}
        className={`group relative backdrop-blur-sm border rounded-full p-3 transition-all duration-300 hover:scale-110 ${
          isMuted
            ? 'bg-red-500/20 border-red-500/30 hover:bg-red-500/30'
            : 'bg-midnight-light/90 border-azure/20 hover:bg-midnight-lighter'
        }`}
        aria-label={isMuted ? 'Unmute voice' : 'Mute voice'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-red-400" />
        ) : (
          <Volume2 className={`w-5 h-5 ${isPlaying ? 'text-azure animate-pulse' : 'text-azure/60'}`} />
        )}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-midnight-light border border-azure/20 rounded-lg text-xs text-soft whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {isMuted ? 'Unmute' : 'Mute'}
        </span>
      </button>

      {/* Playing Indicator */}
      {isPlaying && (
        <div className="flex items-center gap-2 bg-midnight-light/90 backdrop-blur-sm border border-azure/20 rounded-full px-4 py-2 animate-fade-in">
          <div className="flex gap-1">
            <span className="w-1 h-4 bg-azure rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-4 bg-azure rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-1 h-4 bg-azure rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
          </div>
          <span className="text-xs text-soft">Speaking...</span>
        </div>
      )}
    </div>
  )
}
