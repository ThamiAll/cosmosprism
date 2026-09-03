import React from 'react'
import { cn } from '@/lib/utils'

interface GlowBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function GlowBorder({ children, className, ...props }: GlowBorderProps) {
  return (
    <div className={cn('glow-border', className)} {...props}>
      {children}
    </div>
  )
}