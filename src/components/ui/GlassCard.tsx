import React from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  glowColor?: 'cyan' | 'magenta' | 'purple' | 'gold' | 'crimson'
  className?: string
}

export function GlassCard({
  children,
  glowColor,
  className,
  ...props
}: GlassCardProps) {
  const glowMap = {
    cyan: 'hover:shadow-glow-cyan hover:border-cosmic-cyan/50',
    magenta: 'hover:shadow-glow-magenta hover:border-cosmic-magenta/50',
    purple: 'hover:shadow-glow-purple hover:border-cosmic-purple/50',
    gold: 'hover:shadow-glow-gold hover:border-cosmic-gold/50',
    crimson: 'hover:shadow-glow-crimson hover:border-void-crimson/50',
  }

  return (
    <div
      className={cn(
        'glass-panel p-6 transition-all duration-300',
        glowColor && glowMap[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}