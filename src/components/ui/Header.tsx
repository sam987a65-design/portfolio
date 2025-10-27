'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-midnight/95 backdrop-blur-md shadow-lg border-b border-soft/10'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform focus:scale-105"
          >
            AK
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-soft/80 hover:text-azure transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-soft/70 hover:text-azure transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-soft/70 hover:text-azure transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={SITE_CONFIG.links.email}
              aria-label="Email"
              className="text-soft/70 hover:text-azure transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-soft hover:text-azure transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-soft/10 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className="block text-soft/80 hover:text-azure transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-soft/10">
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-soft/70 hover:text-azure transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-soft/70 hover:text-azure transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SITE_CONFIG.links.email}
                aria-label="Email"
                className="text-soft/70 hover:text-azure transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
