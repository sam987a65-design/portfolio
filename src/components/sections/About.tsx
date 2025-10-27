'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { ABOUT_TEXT, EDUCATION } from '@/lib/constants'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-midnight-light/50">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="My journey in data science and software engineering"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-6 animate-fade-in">
            <div className="prose prose-invert max-w-none">
              {ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-soft/80 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="card">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-soft mb-1">Data-Driven</h3>
                <p className="text-soft/70 text-sm">
                  Making decisions based on metrics and evidence
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold text-soft mb-1">Production-Ready</h3>
                <p className="text-soft/70 text-sm">
                  Building systems that scale and perform
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2">🧪</div>
                <h3 className="font-semibold text-soft mb-1">Reproducible</h3>
                <p className="text-soft/70 text-sm">
                  Clean code and documented experiments
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-semibold text-soft mb-1">Impact-Focused</h3>
                <p className="text-soft/70 text-sm">
                  Delivering measurable value to users
                </p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 animate-fade-in animation-delay-200">
            <h3 className="text-2xl font-bold text-soft mb-6">Education</h3>
            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-azure/30" />

              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 bg-azure rounded-full border-4 border-midnight-light" />

                  <div className="card">
                    <div className="flex items-start gap-3 mb-3">
                      <GraduationCap className="text-azure mt-1" size={24} />
                      <div className="flex-1">
                        <h4 className="font-bold text-soft text-lg">
                          {edu.institution}
                        </h4>
                        <p className="text-azure font-medium">
                          {edu.degree} - {edu.field}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-soft/70 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-soft/70 text-sm flex items-start gap-2"
                        >
                          <span className="text-azure mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
