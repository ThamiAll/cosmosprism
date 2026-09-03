'use client'

import React from 'react'
import { Sparkles, MessageSquare, Share2, Play, Code } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-void-surface/90 border-t border-white/10 pt-16 pb-12 px-6 overflow-hidden">
      {/* Luz ambiente de rodapé */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-cosmic-cyan/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1: Marca */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cosmic-cyan" />
              <span className="font-display text-xl font-black tracking-widest text-cosmic-gradient">
                COSMO
              </span>
              <span className="text-xs tracking-widest text-white/50 font-display">
                | SHATTERED PRISM
              </span>
            </div>
            <p className="text-sm text-white/60 font-light max-w-sm leading-relaxed">
              Uma experiência visual e interativa de RPG cósmico. Restaure a luz, domine os fragmentos e liberte a floresta primordial.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60 font-light">
              <li>
                <a href="#lore" className="hover:text-cosmic-cyan transition-colors">
                  Universo & História
                </a>
              </li>
              <li>
                <a href="#roster" className="hover:text-cosmic-cyan transition-colors">
                  Heróis Guardiões
                </a>
              </li>
              <li>
                <a href="#void-threat" className="hover:text-void-crimson transition-colors">
                  A Ameaça do Vazio
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cosmic-cyan transition-colors">
                  Pilares do Jogo
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Comunidade / Redes */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-4">
              Comunidade
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-cosmic-cyan hover:border-cosmic-cyan/50 transition-all duration-300"
                aria-label="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-cosmic-cyan hover:border-cosmic-cyan/50 transition-all duration-300"
                aria-label="Twitter / X"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-cosmic-cyan hover:border-cosmic-cyan/50 transition-all duration-300"
                aria-label="YouTube"
              >
                <Play className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-cosmic-cyan hover:border-cosmic-cyan/50 transition-all duration-300"
                aria-label="Código Fonte"
              >
                <Code className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha inferior de copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
          <p>© 2026 COSMO: Shattered Prism. Todos os direitos reservados.</p>
          <p className="font-display text-[11px] tracking-wider text-white/50">
            CRAFTED WITH NEXT.JS & TAILWIND CSS
          </p>
        </div>
      </div>
    </footer>
  )
}