'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  className?: string
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  className = '',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      // Store the element that had focus before opening
      previousFocusRef.current = document.activeElement as HTMLElement

      // Prevent body scroll
      document.body.style.overflow = 'hidden'

      // Focus the modal
      modalRef.current?.focus()
    } else {
      // Restore body scroll
      document.body.style.overflow = ''

      // Restore focus to the previous element
      previousFocusRef.current?.focus()
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-midnight/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className={cn(
          'relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-midnight-light border border-soft/10 rounded-2xl shadow-2xl animate-slide-up',
          className
        )}
      >
        {/* Header */}
        {title && (
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-midnight-light/95 backdrop-blur-sm border-b border-soft/10">
            <h2 id="modal-title" className="text-2xl font-bold text-soft">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-soft/70 hover:text-soft hover:bg-midnight-lighter rounded-lg transition-all duration-200"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
