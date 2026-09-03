'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Character } from '@/data/characters'
import { Zap, Sparkles } from 'lucide-react'

interface RosterAttributesPanelProps {
  activeHero: Character
}

export function RosterAttributesPanel({ activeHero }: RosterAttributesPanelProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeHero.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
        className="glass-panel p-8 md:p-10 flex flex-col justify-between h-full border border-white/10"
      >
        <div>
          {/* Tag de Elemento */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cosmic-cyan/30 bg-cosmic-cyan/10 text-cosmic-cyan text-xs font-display uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {activeHero.element.replace('-', ' ')}
          </div>

          {/* Nome e Título */}
          <h3 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wide mb-1">
            {activeHero.name}
          </h3>
          <span className="text-xs md:text-sm font-display text-cosmic-cyan/90 uppercase tracking-[0.25em] block mb-6">
            {activeHero.title}
          </span>

          {/* História curta */}
          <p className="text-sm text-white/75 font-light leading-relaxed mb-8">
            {activeHero.lore}
          </p>

          {/* Lista de Habilidades */}
          <div className="space-y-4">
            <span className="font-display text-xs uppercase tracking-[0.2em] text-white/50 block">
              Habilidades Primordiais
            </span>
            {activeHero.abilities.map((ability, idx) => (
              <motion.div
                key={ability.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 + 0.15 }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cosmic-cyan/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-1 text-cosmic-cyan">
                  <Zap className="w-4 h-4" />
                  <span className="font-display text-sm font-bold tracking-wider uppercase text-white">
                    {ability.name}
                  </span>
                </div>
                <p className="text-xs text-white/65 leading-relaxed font-light">
                  {ability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}