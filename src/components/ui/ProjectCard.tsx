'use client'

import { ExternalLink, Github, FileText } from 'lucide-react'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  onViewDetails: () => void
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <article className="card-interactive group animate-fade-in">
      {/* Thumbnail */}
      <div className="relative h-48 bg-midnight-lighter rounded-lg mb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-azure/20 to-warm/20 flex items-center justify-center">
          <span className="text-6xl opacity-50">{project.title.charAt(0)}</span>
        </div>
        <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button
            onClick={onViewDetails}
            className="btn-primary"
            aria-label={`View details for ${project.title}`}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold text-soft mb-2 group-hover:text-azure transition-colors">
            {project.title}
          </h3>
          <p className="text-soft/70 text-sm">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-midnight-lighter text-azure text-xs font-medium rounded-full border border-azure/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2">
          {project.highlights.slice(0, 2).map((highlight, index) => (
            <li key={index} className="text-soft/70 text-sm flex items-start gap-2">
              <span className="text-azure mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-soft/10">
          {project.kpis.map((kpi, index) => (
            <div key={index} className="text-center">
              <p className="text-azure font-bold text-sm">{kpi.value}</p>
              <p className="text-soft/60 text-xs">{kpi.label}</p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-4 border-t border-soft/10">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary text-sm py-2"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary text-sm py-2"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.links.caseStudy && (
            <button
              onClick={onViewDetails}
              className="flex-1 btn-secondary text-sm py-2"
              aria-label={`View case study for ${project.title}`}
            >
              <FileText size={16} />
              Case Study
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
