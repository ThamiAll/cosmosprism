'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Character } from '@/data/characters'
import { GlowBorder } from '@/components/ui/GlowBorder'

interface RosterVideoPanelProps {
  activeHero: Character
}

export function RosterVideoPanel({ activeHero }: RosterVideoPanelProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeHero.id}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full flex items-center justify-center"
      >
        <GlowBorder className="glass-panel p-3 w-full h-[580px] md:h-[640px] flex items-center justify-center overflow-hidden relative group">
          {/* Luz de fundo que herda o tom cósmico */}
          <div className="absolute inset-0 bg-radial-[circle_at_center,_rgba(98,232,255,0.15)_0%,_transparent_70%] pointer-events-none -z-10" />

          {/* Container de Vídeo / Imagem Vertical */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-void-base/80 flex items-center justify-center">
            <video
              key={activeHero.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={activeHero.videoSrc} type="video/mp4" />
              <source src={activeHero.videoFallbackSrc} type="video/mp4" />
              {/* Fallback caso o navegador não carregue o vídeo */}
              <img
                src={activeHero.imageSrc}
                alt={activeHero.name}
                className="w-full h-full object-cover"
              />
            </video>

            {/* Vinheta suave nas bordas para integrar com o vidro */}
            <div className="absolute inset-0 bg-gradient-to-t from-void-base/80 via-transparent to-void-base/30 pointer-events-none" />

            {/* Badge flutuante de elemento */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="font-display text-[11px] uppercase tracking-[0.25em] text-white/80 px-3 py-1 rounded-lg bg-void-base/60 backdrop-blur-md border border-white/10">
                {activeHero.name}
              </span>
              <span className="font-display text-[10px] uppercase tracking-widest text-cosmic-cyan px-2.5 py-1 rounded-lg bg-cosmic-cyan/10 backdrop-blur-md border border-cosmic-cyan/30">
                Visualização Cósmica
              </span>
            </div>
          </div>
        </GlowBorder>
      </motion.div>
    </AnimatePresence>
  )
}