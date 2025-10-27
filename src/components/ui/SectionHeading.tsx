import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <h2 className="heading-2 gradient-text mb-4 animate-fade-in">{title}</h2>
      {subtitle && (
        <p className="body-large text-soft/70 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          {subtitle}
        </p>
      )}
    </div>
  )
}
