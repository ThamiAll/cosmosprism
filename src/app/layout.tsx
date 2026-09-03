import type { Metadata } from 'next'
import { Cinzel_Decorative, Inter } from 'next/font/google'
import './globals.css'

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'COSMO: Shattered Prism — Site Oficial',
  description: 'Restaure a luz dos fragmentos estelares em uma jornada cósmica de fantasia sombria.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cinzelDecorative.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-void-base text-[#E8EEF7] font-body selection:bg-cosmic-cyan selection:text-void-base overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}