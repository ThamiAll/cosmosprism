'use client'

import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Swords, Users, Sparkles } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accentColor: string
  index: string
}

function FeatureCard({ icon, title, description, accentColor, index }: FeatureCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [8, -8])
  const rotateY = useTransform(x, [-100, 100], [-8, 8])

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className="glass-panel p-8 md:p-10 relative flex flex-col justify-between border border-white/10 hover:border-cosmic-cyan/50 hover:shadow-[0_0_35px_rgba(98,232,255,0.2)] transition-colors duration-300"
    >
      <div style={{ transform: 'translateZ(30px)' }}>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${accentColor}`}>
          {icon}
        </div>
        <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-3">
          {title}
        </h3>
        <p className="text-sm text-white/70 font-light leading-relaxed">
          {description}
        </p>
      </div>

      <div
        style={{ transform: 'translateZ(15px)' }}
        className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-display uppercase tracking-[0.2em] text-white/40"
      >
        <span>Mecânica Central</span>
        <span className="text-cosmic-cyan">{index}</span>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Swords className="w-6 h-6 text-cosmic-cyan" />,
      title: 'Combate Fluido & Místico',
      description:
        'Encadeie feitiços e ataques físicos em tempo real, alternando habilidades cósmicas em duelos dinâmicos.',
      accentColor: 'bg-cosmic-cyan/10 border border-cosmic-cyan/30 text-cosmic-cyan shadow-[0_0_15px_rgba(98,232,255,0.2)]',
      index: '01',
    },
    {
      icon: <Users className="w-6 h-6 text-cosmic-magenta" />,
      title: 'Sinergia de Guardiões',
      description:
        'Combine afinidades elementais para disparar ressonâncias prismáticas capazes de dissolver barreiras sombrias.',
      accentColor: 'bg-cosmic-magenta/10 border border-cosmic-magenta/30 text-cosmic-magenta shadow-[0_0_15px_rgba(224,86,253,0.2)]',
      index: '02',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-cosmic-gold" />,
      title: 'Florestas Encantadas',
      description:
        'Explore clareiras bioluminescentes, ruínas arcanas e descubra os segredos ancestrais do Grande Prisma.',
      accentColor: 'bg-cosmic-gold/10 border border-cosmic-gold/30 text-cosmic-gold shadow-[0_0_15px_rgba(255,209,102,0.2)]',
      index: '03',
    },
  ]

  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Glow de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cosmic-cyan/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xs uppercase tracking-[0.25em] text-cosmic-cyan block mb-3"
          >
            Pilares do Jogo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white"
          >
            Experiência <span className="text-fantasy-crystal">Imersiva</span>
          </motion.h2>
        </div>

        {/* Grade de Cards 3D */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 [perspective:1000px]">
          {features.map((feat) => (
            <FeatureCard
              key={feat.title}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              accentColor={feat.accentColor}
              index={feat.index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}