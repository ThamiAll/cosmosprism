'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Character } from '@/data/characters'

interface RosterTabsProps {
  characters: Character[]
  activeCharacter: Character
  onSelect: (character: Character) => void
}

export function RosterTabs({
  characters,
  activeCharacter,
  onSelect,
}: RosterTabsProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-2 rounded-2xl bg-void-dark/60 backdrop-blur-md border border-white/10 max-w-full">
        {characters.map((item) => {
          const isActive = activeCharacter.id === item.id
          const theme = item.theme || {
            primary: '#62e8ff',
            border: 'border-cosmic-cyan',
            glow: 'rgba(98, 232, 255, 0.4)',
          }

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              type="button"
              className={`relative px-4 py-2.5 rounded-xl font-display text-xs md:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group ${
                isActive
                  ? 'text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
              }`}
              style={{
                boxShadow: isActive ? `0 0 20px ${theme.glow}` : undefined,
              }}
            >
              <div
                className={`w-6 h-6 rounded-full overflow-hidden border transition-all duration-300 ${
                  isActive
                    ? 'border-white scale-110'
                    : 'border-white/20 opacity-70 group-hover:opacity-100'
                }`}
              >
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="font-semibold">{item.name}</span>

              {isActive && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 rounded-xl border -z-10 bg-white/[0.08]"
                  style={{
                    borderColor: theme.primary,
                  }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}