export interface Skill {
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  icon: string
}

export interface SkillCategory {
  [category: string]: Skill[]
}

export interface Project {
  id: string
  title: string
  description: string
  thumbnail: string
  tags: string[]
  highlights: string[]
  kpis: KPI[]
  links: ProjectLinks
  date: string
  organization: string
  challenge: string
  approach: string
  result: string
}

export interface KPI {
  label: string
  value: string
}

export interface ProjectLinks {
  live?: string
  repo?: string
  caseStudy?: string
}

export interface Education {
  institution: string
  degree: string
  field: string
  period: string
  location: string
  highlights: string[]
}

export interface Experience {
  title: string
  organization: string
  period: string
  description: string
  achievements: string[]
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  requestResume: boolean
  honeypot?: string
}

export interface ApiResponse<T = any> {
  success: boolean
  message?: string
  data?: T
  error?: string
}
