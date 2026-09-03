'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ShieldAlert, Compass } from 'lucide-react'
import { GlowBorder } from '@/components/ui/GlowBorder'

export function LoreSection() {
  return (
    <section id="lore" className="relative py-32 px-6 overflow-hidden">
      {/* Luz ambiente etérea de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cosmic-cyan/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-xs uppercase tracking-[0.25em] text-cosmic-cyan block mb-3"
          >
            A Origem do Conflito
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white"
          >
            O Prisma <span className="text-fantasy-crystal">Estilhaçado</span>
          </motion.h2>
        </div>

        {/* Card Principal de Lore com Vidro Místico */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlowBorder className="glass-panel p-8 md:p-12 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Coluna 1 */}
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-2xl bg-cosmic-cyan/10 border border-cosmic-cyan/30 flex items-center justify-center text-cosmic-cyan mb-2 shadow-[0_0_15px_rgba(98,232,255,0.2)]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                  A Era de Luz
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  Antes do colapso, o Grande Prisma mantinha o equilíbrio dimensional,
                  irradiando frequências de pura energia através das florestas ancestrais.
                </p>
              </div>

              {/* Coluna 2 */}
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-2xl bg-void-crimson/10 border border-void-crimson/30 flex items-center justify-center text-void-crimson mb-2 shadow-[0_0_15px_rgba(255,42,77,0.2)]">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                  A Ruptura
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  A invasão do Devorador Null partiu o cristal em incontáveis fragmentos estelares,
                  espalhando corrupção e sombras por toda a fauna bioluminescente.
                </p>
              </div>

              {/* Coluna 3 */}
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-2xl bg-cosmic-purple/15 border border-cosmic-purple/40 flex items-center justify-center text-cosmic-cyan mb-2 shadow-[0_0_15px_rgba(140,67,255,0.2)]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                  O Chamado
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  Os guardiões remanescentes devem despertar os estilhaços perdidos para reconstruir
                  o núcleo sagrado antes que o manto do vazio consuma toda a vida.
                </p>
              </div>
            </div>
          </GlowBorder>
        </motion.div>
      </div>
    </section>
  )
}