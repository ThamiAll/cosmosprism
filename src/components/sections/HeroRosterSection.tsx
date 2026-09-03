'use client'

import React, { useState } from 'react'
import { heroes, Character } from '@/data/characters'
import { RosterVideoPanel } from '@/components/roster/RosterVideoPanel'
import { RosterAttributesPanel } from '@/components/roster/RosterAttributesPanel'
import { RosterTabs } from '@/components/roster/RosterTabs'

export function HeroRosterSection() {
  const [activeHero, setActiveHero] = useState<Character>(heroes[0])

  return (
    <section id="roster" className="relative min-h-screen py-24 px-4 md:px-8 overflow-hidden bg-void-base">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10 max-w-2xl">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-cosmic-cyan px-3 py-1 rounded-full border border-cosmic-cyan/30 bg-void-base/80 backdrop-blur-sm">
            Guardiões do Cosmos
          </span>

          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-wider text-white mt-4 mb-3">
            Escolha Seu Herói
          </h2>
        </div>

        <div className="w-full mb-10 flex flex-col items-center gap-6">
          <RosterTabs
            characters={heroes}
            activeCharacter={activeHero}
            onSelect={setActiveHero}
          />
        </div>
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 flex justify-center items-center">
            <RosterVideoPanel activeHero={activeHero} />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center">
            <RosterAttributesPanel activeHero={activeHero} />
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

// No bloco principal ou no container:
<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.98 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  className="relative z-10 max-w-7xl mx-auto flex flex-col items-center"
>
  {/* Conteúdo da seção */}
</motion.div>