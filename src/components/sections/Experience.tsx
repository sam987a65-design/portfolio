'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { EXPERIENCE } from '@/lib/constants'
import { Briefcase, Calendar, Download, Github, Linkedin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Experience & Achievements"
          subtitle="Professional journey and key accomplishments"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {EXPERIENCE.map((exp, index) => (
              <div
                key={index}
                className="card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-azure/10 rounded-lg">
                    <Briefcase className="text-azure" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-soft mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-azure font-medium mb-2">
                      {exp.organization}
                    </p>
                    <div className="flex items-center gap-2 text-soft/70 text-sm mb-4">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-soft/80 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-soft/70 text-sm flex items-start gap-2"
                        >
                          <span className="text-azure mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional achievements */}
            <div className="card animate-fade-in animation-delay-200">
              <h3 className="text-xl font-bold text-soft mb-4">
                Additional Achievements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-soft/70">
                  <span className="text-azure mt-1">🏆</span>
                  <span>
                    Built scalable ML pipelines processing 10M+ records daily
                  </span>
                </li>
                <li className="flex items-start gap-2 text-soft/70">
                  <span className="text-azure mt-1">🏆</span>
                  <span>
                    Achieved 95% model accuracy in production environments
                  </span>
                </li>
                <li className="flex items-start gap-2 text-soft/70">
                  <span className="text-azure mt-1">🏆</span>
                  <span>
                    Reduced infrastructure costs by 40% through optimization
                  </span>
                </li>
                <li className="flex items-start gap-2 text-soft/70">
                  <span className="text-azure mt-1">🏆</span>
                  <span>
                    Mentored junior developers in best practices and code review
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar - Resume & Links */}
          <div className="space-y-6">
            {/* Resume Download */}
            <div className="card animate-fade-in animation-delay-400">
              <h3 className="text-lg font-bold text-soft mb-4">
                Download Resume
              </h3>
              <p className="text-soft/70 text-sm mb-4">
                Get a detailed overview of my experience, skills, and education.
              </p>
              <a
                href="/resume.pdf"
                download
                className="btn-primary w-full"
                aria-label="Download resume PDF"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>

            {/* Social Links */}
            <div className="card animate-fade-in animation-delay-600">
              <h3 className="text-lg font-bold text-soft mb-4">
                Connect With Me
              </h3>
              <div className="space-y-3">
                <a
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-midnight-lighter rounded-lg hover:bg-midnight transition-colors group"
                >
                  <Github className="text-soft/70 group-hover:text-azure transition-colors" size={20} />
                  <div className="flex-1">
                    <p className="text-soft font-medium">GitHub</p>
                    <p className="text-soft/60 text-xs">View my code</p>
                  </div>
                </a>
                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-midnight-lighter rounded-lg hover:bg-midnight transition-colors group"
                >
                  <Linkedin className="text-soft/70 group-hover:text-azure transition-colors" size={20} />
                  <div className="flex-1">
                    <p className="text-soft font-medium">LinkedIn</p>
                    <p className="text-soft/60 text-xs">Professional profile</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card animate-fade-in animation-delay-800">
              <h3 className="text-lg font-bold text-soft mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-soft/70 text-sm">Python</span>
                    <span className="text-azure text-sm font-medium">Advanced</span>
                  </div>
                  <div className="h-2 bg-midnight-lighter rounded-full overflow-hidden">
                    <div className="h-full bg-azure rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-soft/70 text-sm">Machine Learning</span>
                    <span className="text-azure text-sm font-medium">Advanced</span>
                  </div>
                  <div className="h-2 bg-midnight-lighter rounded-full overflow-hidden">
                    <div className="h-full bg-azure rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-soft/70 text-sm">Full-Stack Dev</span>
                    <span className="text-azure text-sm font-medium">Advanced</span>
                  </div>
                  <div className="h-2 bg-midnight-lighter rounded-full overflow-hidden">
                    <div className="h-full bg-azure rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-soft/70 text-sm">DevOps</span>
                    <span className="text-warm text-sm font-medium">Intermediate</span>
                  </div>
                  <div className="h-2 bg-midnight-lighter rounded-full overflow-hidden">
                    <div className="h-full bg-warm rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
