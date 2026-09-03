'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { villains } from '@/data/characters'
import { Skull, Zap, AlertTriangle } from 'lucide-react'

export function VoidThreatSection() {
  return (
    <section id="void-threat" className="relative py-28 px-6 bg-void-surface/90 overflow-hidden border-t border-void-crimson/20">
      {/* Luz ambiente de corrupção carmesim */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-void-crimson/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-void-crimson/40 bg-void-crimson/10 text-void-crimson text-xs font-display uppercase tracking-[0.2em] mb-3"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            Alerta Dimensional
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white"
          >
            A Ameaça do <span className="bg-gradient-to-r from-void-crimson via-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">Vazio</span>
          </motion.h2>
        </div>

        {/* Cards dos Vilões */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {villains.map((villain, index) => (
            <motion.div
              key={villain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel border-void-crimson/30 p-8 md:p-10 relative overflow-hidden group hover:border-void-crimson/60 hover:shadow-[0_0_35px_rgba(255,42,77,0.25)] transition-all duration-300"
            >
              {/* Moldura de Vídeo com tremor suave */}
              <motion.div
                animate={{ x: [0, -1, 1, -1, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-void-base border border-white/10 flex items-center justify-center"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover video-mask opacity-75"
                >
                  <source src={villain.videoSrc} type="video/webm" />
                  <source src={villain.videoFallbackSrc} type="video/mp4" />
                </video>

                {/* Fallback de exibição */}
                <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-void-crimson/60">
                  <Skull className="w-12 h-12 mb-2 animate-pulse" />
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-white/50">
                    Entidade Corrompida
                  </span>
                </div>
              </motion.div>

              {/* Informações do Vilão */}
              <span className="text-xs font-display uppercase tracking-[0.25em] text-void-crimson block mb-1">
                {villain.title}
              </span>
              <h3 className="font-display text-2xl md:text-4xl font-black text-white uppercase tracking-wider mb-3">
                {villain.name}
              </h3>
              <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                {villain.lore}
              </p>

              {/* Habilidades */}
              <div className="space-y-3">
                {villain.abilities.map((ability) => (
                  <div
                    key={ability.name}
                    className="p-3.5 rounded-xl bg-void-base/70 border border-void-crimson/20"
                  >
                    <div className="flex items-center gap-2 text-void-crimson mb-1">
                      <Zap className="w-3.5 h-3.5" />
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
                        {ability.name}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 font-light leading-relaxed">
                      {ability.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}