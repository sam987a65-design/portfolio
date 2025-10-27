'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Skill } from '@/lib/types'

interface SkillCardProps {
  skill: Skill
  delay?: number
}

export default function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'text-azure'
      case 'Intermediate':
        return 'text-warm'
      case 'Beginner':
        return 'text-soft/70'
      default:
        return 'text-soft/70'
    }
  }

  return (
    <div
      className={cn(
        'card-interactive group animate-fade-in',
        isHovered && 'scale-105'
      )}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`${skill.name} - ${skill.level}`}
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-soft mb-1">{skill.name}</h3>
          <p className={cn('text-sm font-medium', getLevelColor(skill.level))}>
            {skill.level}
          </p>
        </div>
      </div>
    </div>
  )
}
