import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { LoreSection } from '@/components/sections/LoreSection'
import { HeroRosterSection } from '@/components/sections/HeroRosterSection'
import { VoidThreatSection } from '@/components/sections/VoidThreatSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-void-base text-white relative selection:bg-cosmic-cyan selection:text-void-base">
      <Navbar />
      <HeroSection />
      <LoreSection />
      <HeroRosterSection />
      <VoidThreatSection />
      <FeaturesSection />
      <Footer />
    </main>
  )
}