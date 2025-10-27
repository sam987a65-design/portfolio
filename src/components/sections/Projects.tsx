'use client'

import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import Modal from '@/components/ui/Modal'
import Scene3D from '@/components/3d/Scene3D'
import ProjectPreview3D from '@/components/3d/ProjectPreview3D'
import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/lib/types'
import { ExternalLink, Github, Calendar, Building2 } from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects showcasing my skills in full-stack development and machine learning"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="space-y-6">
              {/* 3D Preview */}
              <div className="relative h-[300px] rounded-xl overflow-hidden bg-midnight-lighter">
                <Scene3D
                  className="w-full h-full"
                  enableControls={true}
                  cameraPosition={[0, 0, 6]}
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl">{selectedProject.title.charAt(0)}</div>
                    </div>
                  }
                >
                  <ProjectPreview3D
                    title={selectedProject.title}
                    color="#2dd4bf"
                  />
                </Scene3D>
              </div>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-soft/70">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{selectedProject.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 size={16} />
                  <span>{selectedProject.organization}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-midnight-lighter text-azure text-sm font-medium rounded-full border border-azure/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div>
                <p className="text-soft/80 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Case Study */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-azure mb-2">
                    Challenge
                  </h3>
                  <p className="text-soft/70">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-azure mb-2">
                    Approach
                  </h3>
                  <p className="text-soft/70">{selectedProject.approach}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-azure mb-2">
                    Result
                  </h3>
                  <p className="text-soft/70">{selectedProject.result}</p>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-semibold text-azure mb-3">
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-soft/70 flex items-start gap-2"
                    >
                      <span className="text-azure mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-midnight-lighter rounded-lg">
                {selectedProject.kpis.map((kpi, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-azure mb-1">
                      {kpi.value}
                    </p>
                    <p className="text-soft/60 text-sm">{kpi.label}</p>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-soft/10">
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary"
                  >
                    <ExternalLink size={20} />
                    View Live
                  </a>
                )}
                {selectedProject.links.repo && (
                  <a
                    href={selectedProject.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  )
}
