import React from 'react'
import { cn } from '@/lib/utils'

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'cyan' | 'magenta' | 'outline'
  className?: string
}

export function NeonButton({
  children,
  variant = 'cyan',
  className,
  ...props
}: NeonButtonProps) {
  const variantStyles = {
    cyan: 'bg-cosmic-cyan text-void-base shadow-glow-cyan hover:bg-cosmic-cyan/90',
    magenta: 'bg-cosmic-magenta text-white shadow-glow-magenta hover:bg-cosmic-magenta/90',
    outline: 'border border-white/20 text-white bg-white/5 backdrop-blur-sm hover:border-cosmic-cyan hover:text-cosmic-cyan hover:shadow-glow-cyan',
  }

  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5',
        'font-display text-xs md:text-sm font-bold uppercase tracking-widest',
        'transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}