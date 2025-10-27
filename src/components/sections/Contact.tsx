'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SectionHeading from '@/components/ui/SectionHeading'
import Scene3D from '@/components/3d/Scene3D'
import AmbientNodes from '@/components/3d/AmbientNodes'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { CONTACT_SUCCESS_MESSAGE } from '@/lib/constants'
import type { ContactFormData } from '@/lib/types'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  requestResume: z.boolean().default(false),
  honeypot: z.string().max(0, 'Bot detected'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      honeypot: '',
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Scene3D
          className="w-full h-full"
          enableControls={false}
          cameraPosition={[0, 0, 15]}
        >
          <AmbientNodes />
        </Scene3D>
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk!"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-azure/10 rounded-lg">
                  <Mail className="text-azure" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-soft mb-2">Email Me</h3>
                  <a
                    href="mailto:aryan@example.com"
                    className="text-azure hover:text-azure-light transition-colors"
                  >
                    aryan@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-semibold text-soft mb-4">What to expect:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-soft/70 text-sm">
                  <span className="text-azure mt-1">✓</span>
                  <span>Response within 3 business days</span>
                </li>
                <li className="flex items-start gap-2 text-soft/70 text-sm">
                  <span className="text-azure mt-1">✓</span>
                  <span>Professional and detailed replies</span>
                </li>
                <li className="flex items-start gap-2 text-soft/70 text-sm">
                  <span className="text-azure mt-1">✓</span>
                  <span>Open to freelance and full-time opportunities</span>
                </li>
                <li className="flex items-start gap-2 text-soft/70 text-sm">
                  <span className="text-azure mt-1">✓</span>
                  <span>Available for consulting and technical discussions</span>
                </li>
              </ul>
            </div>

            <div className="card bg-gradient-to-br from-azure/10 to-warm/10 border-azure/30">
              <p className="text-soft/80 text-sm leading-relaxed">
                <strong className="text-azure">Open to opportunities:</strong> I'm
                currently exploring new roles in data science, machine learning
                engineering, and full-stack development. If you think I'd be a good
                fit for your team, let's connect!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in animation-delay-200">
            <form onSubmit={handleSubmit(onSubmit)} className="card space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="label">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="input-field"
                  placeholder="Your name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-warm text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="label">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="input-field"
                  placeholder="your@email.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-warm text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="label">
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-warm text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Request Resume */}
              <div className="flex items-center gap-2">
                <input
                  id="requestResume"
                  type="checkbox"
                  {...register('requestResume')}
                  className="w-4 h-4 bg-midnight-lighter border-soft/30 rounded text-azure focus:ring-azure focus:ring-offset-midnight"
                />
                <label htmlFor="requestResume" className="text-soft/80 text-sm">
                  Send me a copy of your resume
                </label>
              </div>

              {/* Honeypot (hidden) */}
              <input
                type="text"
                {...register('honeypot')}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-midnight border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div
                  className="flex items-start gap-3 p-4 bg-azure/10 border border-azure/30 rounded-lg animate-fade-in"
                  role="alert"
                >
                  <CheckCircle className="text-azure flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-soft/80 text-sm">{CONTACT_SUCCESS_MESSAGE}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  className="flex items-start gap-3 p-4 bg-warm/10 border border-warm/30 rounded-lg animate-fade-in"
                  role="alert"
                >
                  <AlertCircle className="text-warm flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-soft/80 text-sm">{errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
