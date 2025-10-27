'use client'

import { useState, useEffect } from 'react'
import { Brain, RotateCcw, Trophy } from 'lucide-react'

type Choice = 'rock' | 'paper' | 'scissors'

const choices: Choice[] = ['rock', 'paper', 'scissors']
const emojis = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️',
}

export default function AIGame() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null)
  const [aiChoice, setAiChoice] = useState<Choice | null>(null)
  const [result, setResult] = useState<string>('')
  const [score, setScore] = useState({ player: 0, ai: 0, draws: 0 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [showGame, setShowGame] = useState(false)

  const getAIChoice = (): Choice => {
    // Simple AI with slight randomness
    return choices[Math.floor(Math.random() * choices.length)]
  }

  const determineWinner = (player: Choice, ai: Choice): string => {
    if (player === ai) return 'draw'
    if (
      (player === 'rock' && ai === 'scissors') ||
      (player === 'paper' && ai === 'rock') ||
      (player === 'scissors' && ai === 'paper')
    ) {
      return 'player'
    }
    return 'ai'
  }

  const playGame = (choice: Choice) => {
    if (isPlaying) return

    setIsPlaying(true)
    setPlayerChoice(choice)

    // Simulate AI thinking
    setTimeout(() => {
      const aiSelection = getAIChoice()
      setAiChoice(aiSelection)

      const winner = determineWinner(choice, aiSelection)

      if (winner === 'player') {
        setResult('🎉 You Win!')
        setScore((prev) => ({ ...prev, player: prev.player + 1 }))
      } else if (winner === 'ai') {
        setResult('🤖 AI Wins!')
        setScore((prev) => ({ ...prev, ai: prev.ai + 1 }))
      } else {
        setResult('🤝 Draw!')
        setScore((prev) => ({ ...prev, draws: prev.draws + 1 }))
      }

      setTimeout(() => {
        setIsPlaying(false)
      }, 2000)
    }, 1000)
  }

  const resetGame = () => {
    setPlayerChoice(null)
    setAiChoice(null)
    setResult('')
    setScore({ player: 0, ai: 0, draws: 0 })
    setIsPlaying(false)
  }

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {!showGame ? (
        <button
          onClick={() => setShowGame(true)}
          className="group relative bg-gradient-to-r from-azure to-warm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Play AI Game"
        >
          <Brain className="w-6 h-6 text-white" />
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-midnight-light border border-azure/20 rounded-lg text-xs text-soft whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Play AI Game 🎮
          </span>
        </button>
      ) : (
        <div className="bg-midnight-light/95 backdrop-blur-md border border-azure/20 rounded-2xl shadow-2xl p-6 w-80 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-azure" />
              <h3 className="text-lg font-bold text-soft">AI Rock Paper Scissors</h3>
            </div>
            <button
              onClick={() => setShowGame(false)}
              className="text-soft/60 hover:text-soft transition-colors"
              aria-label="Close game"
            >
              ✕
            </button>
          </div>

          {/* Score */}
          <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-midnight/50 rounded-lg">
            <div className="text-center">
              <p className="text-xs text-soft/60">You</p>
              <p className="text-xl font-bold text-azure">{score.player}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-soft/60">Draws</p>
              <p className="text-xl font-bold text-warm">{score.draws}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-soft/60">AI</p>
              <p className="text-xl font-bold text-red-400">{score.ai}</p>
            </div>
          </div>

          {/* Game Area */}
          <div className="space-y-4">
            {/* Choices Display */}
            {(playerChoice || aiChoice) && (
              <div className="flex justify-around items-center py-4 bg-midnight/30 rounded-lg">
                <div className="text-center">
                  <p className="text-xs text-soft/60 mb-2">You</p>
                  <div className="text-5xl">{playerChoice ? emojis[playerChoice] : '❓'}</div>
                </div>
                <div className="text-2xl">⚡</div>
                <div className="text-center">
                  <p className="text-xs text-soft/60 mb-2">AI</p>
                  <div className="text-5xl">
                    {aiChoice ? emojis[aiChoice] : isPlaying ? '🤔' : '❓'}
                  </div>
                </div>
              </div>
            )}

            {/* Result */}
            {result && (
              <div className="text-center py-2">
                <p className="text-lg font-bold text-soft animate-fade-in">{result}</p>
              </div>
            )}

            {/* Choice Buttons */}
            <div className="grid grid-cols-3 gap-2">
              {choices.map((choice) => (
                <button
                  key={choice}
                  onClick={() => playGame(choice)}
                  disabled={isPlaying}
                  className={`p-4 bg-midnight-lighter/50 hover:bg-midnight-lighter border border-azure/20 rounded-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    playerChoice === choice ? 'ring-2 ring-azure' : ''
                  }`}
                  aria-label={`Choose ${choice}`}
                >
                  <div className="text-3xl">{emojis[choice]}</div>
                  <p className="text-xs text-soft/60 mt-1 capitalize">{choice}</p>
                </button>
              ))}
            </div>

            {/* Reset Button */}
            <button
              onClick={resetGame}
              className="w-full flex items-center justify-center gap-2 py-2 bg-warm/20 hover:bg-warm/30 border border-warm/30 rounded-lg transition-colors text-warm text-sm"
              aria-label="Reset game"
            >
              <RotateCcw size={16} />
              Reset Score
            </button>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-soft/10 text-center">
            <p className="text-xs text-soft/50">
              🤖 Powered by AI • Challenge yourself!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
