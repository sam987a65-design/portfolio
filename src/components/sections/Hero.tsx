'use client'

import { Download, ArrowDown } from 'lucide-react'
import Scene3D from '@/components/3d/Scene3D'
import GlassCardStack from '@/components/3d/GlassCardStack'

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-light to-midnight pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-azure/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm/10 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="heading-1 text-soft">
                Hi — I'm <span className="gradient-text">Aryan</span>
              </h1>
              <p className="body-large text-soft/80">
                AI & Data Science Engineer transforming data into insights with Machine Learning, Deep Learning, and advanced analytics.
              </p>
              <p className="body-normal text-soft/70">
                I build predictive models, perform data analysis, and create intelligent solutions using Python and cutting-edge ML algorithms.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animation-delay-200">
              <button
                onClick={scrollToProjects}
                className="btn-primary"
                aria-label="View my projects"
              >
                View Projects
                <ArrowDown size={20} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
                aria-label="Download my resume"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-soft/10 animation-delay-400">
              <div>
                <p className="text-3xl font-bold text-azure">3+</p>
                <p className="text-soft/60 text-sm">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-azure">10+</p>
                <p className="text-soft/60 text-sm">Technologies</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-azure">2+</p>
                <p className="text-soft/60 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right: 3D Scene */}
          <div className="relative h-[500px] lg:h-[600px] animate-fade-in animation-delay-200">
            <Scene3D
              className="w-full h-full"
              enableControls={true}
              cameraPosition={[0, 0, 8]}
              fallback={
                <div className="w-full h-full flex items-center justify-center bg-midnight-light/50 backdrop-blur-sm rounded-xl border border-soft/10">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4 animate-float">🚀</div>
                    <p className="text-soft/70">
                      Interactive 3D experience
                    </p>
                  </div>
                </div>
              }
            >
              <GlassCardStack isInteractive={true} />
            </Scene3D>

            {/* Interaction hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-soft/50 text-sm">
                Drag to rotate • Scroll to explore
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-azure/50" />
      </div>
    </section>
  )
}
