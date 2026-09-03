'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Gamepad2, Sparkles } from 'lucide-react'
import { NeonButton } from '@/components/ui/NeonButton'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Universo', href: '#lore' },
    { label: 'Heróis', href: '#roster' },
    { label: 'A Ameaça', href: '#void-threat' },
    { label: 'Destaques', href: '#features' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-void-base/80 backdrop-blur-md py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <img 
  src="/images/logo-icon.png" 
  alt="Cosmo Icon" 
  className="w-6 h-6 object-contain drop-shadow-[0_0_10px_rgba(98,232,255,0.7)]" 
/>
          <span className="font-display text-xl md:text-2xl font-black tracking-widest text-cosmic-gradient">
            COSMO
          </span>
          <span className="text-xs tracking-widest text-white/50 font-display hidden sm:inline-block">
            | SHATTERED PRISM
          </span>
        </a>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-display text-xs uppercase tracking-widest text-white/70 hover:text-cosmic-cyan transition-colors py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cosmic-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <NeonButton variant="cyan" className="py-2.5 px-6">
            <Gamepad2 className="w-4 h-4" />
            Jogar Agora
          </NeonButton>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white p-2"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-panel mx-4 mt-2 p-6 flex flex-col gap-4 border border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-sm tracking-wider text-white/80 hover:text-cosmic-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
            <NeonButton variant="cyan" className="w-full mt-2">
              <Gamepad2 className="w-4 h-4" />
              Jogar Agora
            </NeonButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}