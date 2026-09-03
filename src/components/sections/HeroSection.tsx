'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { PlayCircle, Sparkles, ChevronDown } from 'lucide-react'
import { NeonButton } from '@/components/ui/NeonButton'

const FADE_DURATION = 3 // segundos de sobreposição
const MAX_OPACITY = 0.9

export function HeroSection() {
  const videoRefA = useRef<HTMLVideoElement>(null)
  const videoRefB = useRef<HTMLVideoElement>(null)
  const activeIndexRef = useRef<0 | 1>(0) // 0 = A na frente, 1 = B na frente

  useEffect(() => {
    let animId: number
    const refs = [videoRefA, videoRefB]

    // Estado inicial: A tocando e visível, B pronto e invisível no frame 0
    const a = videoRefA.current
    const b = videoRefB.current
    if (a) {
      a.style.opacity = String(MAX_OPACITY)
      a.play().catch(() => {})
    }
    if (b) {
      b.pause()
      b.currentTime = 0
      b.style.opacity = '0'
    }

    const tick = () => {
      const activeIdx = activeIndexRef.current
      const nextIdx = activeIdx === 0 ? 1 : 0
      const activeVid = refs[activeIdx].current
      const nextVid = refs[nextIdx].current

      if (activeVid && nextVid && activeVid.duration) {
        const dur = activeVid.duration
        const timeLeft = dur - activeVid.currentTime

        if (timeLeft <= FADE_DURATION) {
          // Dispara o próximo vídeo assim que entramos na janela de transição
          if (nextVid.paused) {
            nextVid.currentTime = 0
            nextVid.play().catch(() => {})
          }

          const progress = Math.min(1, 1 - timeLeft / FADE_DURATION)
          const eased = progress * progress * (3 - 2 * progress) // smoothstep

          activeVid.style.opacity = String((1 - eased) * MAX_OPACITY)
          nextVid.style.opacity = String(eased * MAX_OPACITY)

          // Fim da transição: troca os papéis e "reseta" o vídeo que saiu
          if (progress >= 1) {
            activeVid.pause()
            activeVid.currentTime = 0
            activeVid.style.opacity = '0'
            nextVid.style.opacity = String(MAX_OPACITY)
            activeIndexRef.current = nextIdx
          }
        } else {
          activeVid.style.opacity = String(MAX_OPACITY)
        }
      }

      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background: Seamless Precision Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-void-base">
        <video
          ref={videoRefA}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.9] contrast-[1.08] saturate-[1.1] will-change-[opacity]"
        >
          <source src="/videos/bg-forest-loop.mp4" type="video/mp4" />
          <source src="/videos/bg-forest-loop.webm" type="video/webm" />
        </video>

        <video
          ref={videoRefB}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.9] contrast-[1.08] saturate-[1.1] opacity-0 will-change-[opacity]"
        >
          <source src="/videos/bg-forest-loop.mp4" type="video/mp4" />
          <source src="/videos/bg-forest-loop.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_45%,_#040810_92%] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-void-base via-transparent to-void-base/40" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cosmic-cyan/40 bg-void-base/70 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(98,232,255,0.25)]"
        >
          <Sparkles className="w-4 h-4 text-cosmic-cyan animate-pulse" />
          <span className="font-display text-xs uppercase tracking-widest text-cosmic-cyan">
            O Prisma Foi Estilhaçado
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-widest mb-4 leading-tight"
        >
          <span className="text-fantasy-crystal">
            COSMO
          </span>
          <br />
          <span className="text-white text-2xl md:text-4xl lg:text-5xl font-normal tracking-[0.25em] block mt-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            SHATTERED PRISM
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-base md:text-lg text-white/90 font-light leading-relaxed mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
        >
          Restaure a luz dos fragmentos estelares através de uma floresta bioluminescente 
          corrompida pelo vazio. Uma jornada de fantasia cósmica e combate cinemático.
        </motion.p>

        {/* Botões CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a href="#roster" className="w-full sm:w-auto">
            <NeonButton variant="cyan" className="w-full sm:w-auto font-display shadow-[0_0_25px_rgba(98,232,255,0.4)]">
              Explorar Universo
            </NeonButton>
          </a>
          <NeonButton variant="outline" className="w-full sm:w-auto font-display backdrop-blur-md bg-void-base/50">
            <PlayCircle className="w-5 h-5 text-cosmic-cyan" />
            Ver Trailer
          </NeonButton>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="font-display text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cosmic-cyan" />
      </motion.div>
    </section>
  )
}