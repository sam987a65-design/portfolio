'use client'

import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import SkillCard from '@/components/ui/SkillCard'
import Scene3D from '@/components/3d/Scene3D'
import FloatingSkillIcon from '@/components/3d/FloatingSkillIcon'
import { SKILLS } from '@/lib/constants'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const categories = Object.keys(SKILLS)

  // Get all skills for 3D visualization
  const allSkills = Object.values(SKILLS).flat()

  return (
    <section id="skills" className="section-padding bg-midnight-light/50">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with to build scalable solutions"
        />

        {/* 3D Floating Icons Scene */}
        <div className="relative h-[400px] mb-12 rounded-2xl overflow-hidden">
          <Scene3D
            className="w-full h-full"
            enableControls={false}
            cameraPosition={[0, 0, 12]}
            fallback={
              <div className="w-full h-full flex items-center justify-center bg-midnight-light/50 backdrop-blur-sm rounded-xl border border-soft/10">
                <p className="text-soft/70">Skill visualization</p>
              </div>
            }
          >
            {allSkills.slice(0, 15).map((skill, index) => {
              const angle = (index / 15) * Math.PI * 2
              const radius = 5 + (index % 3)
              const x = Math.cos(angle) * radius
              const z = Math.sin(angle) * radius
              const y = (Math.random() - 0.5) * 3

              return (
                <FloatingSkillIcon
                  key={skill.name}
                  icon={skill.icon}
                  position={[x, y, z]}
                  delay={index * 0.5}
                />
              )
            })}
          </Scene3D>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === null
                ? 'bg-azure text-midnight'
                : 'bg-midnight-lighter text-soft/70 hover:bg-midnight-light hover:text-soft'
            }`}
          >
            All Skills
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-azure text-midnight'
                  : 'bg-midnight-lighter text-soft/70 hover:bg-midnight-light hover:text-soft'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {categories
            .filter((category) => !activeCategory || activeCategory === category)
            .map((category) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-soft mb-6">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {SKILLS[category].map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} delay={index * 50} />
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Accessible list fallback */}
        <details className="mt-8 p-4 bg-midnight-lighter rounded-lg border border-soft/10">
          <summary className="cursor-pointer text-soft/70 hover:text-soft font-medium">
            View complete skills list (keyboard accessible)
          </summary>
          <div className="mt-4 space-y-4">
            {categories.map((category) => (
              <div key={category}>
                <h4 className="font-semibold text-soft mb-2">{category}</h4>
                <ul className="list-disc list-inside text-soft/70 space-y-1">
                  {SKILLS[category].map((skill) => (
                    <li key={skill.name}>
                      {skill.name} - {skill.level}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}
