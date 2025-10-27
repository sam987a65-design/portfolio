'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })

  return (
    <footer className="bg-midnight-light border-t border-soft/10 no-print">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-soft/70 text-sm leading-relaxed">
              Data Scientist & Full-Stack Engineer building ML-first products
              with Python, Rust, and Django.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-soft font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-soft/70 hover:text-azure text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-soft/70 hover:text-azure text-sm transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-soft/70 hover:text-azure text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/resume.pdf" className="text-soft/70 hover:text-azure text-sm transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-soft font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center bg-midnight-lighter rounded-lg text-soft/70 hover:text-azure hover:bg-midnight transition-all duration-200 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center bg-midnight-lighter rounded-lg text-soft/70 hover:text-azure hover:bg-midnight transition-all duration-200 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SITE_CONFIG.links.email}
                aria-label="Email"
                className="w-10 h-10 flex items-center justify-center bg-midnight-lighter rounded-lg text-soft/70 hover:text-azure hover:bg-midnight transition-all duration-200 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-soft/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-soft/60">
          <p className="flex items-center gap-2">
            © {currentYear} {SITE_CONFIG.name}. Made with{' '}
            <Heart size={14} className="text-warm inline" fill="currentColor" /> and
            code.
          </p>
          <p>Last updated: {lastUpdated}</p>
        </div>
      </div>
    </footer>
  )
}
