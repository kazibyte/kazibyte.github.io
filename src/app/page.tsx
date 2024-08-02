import React from 'react'
import HeroSection from "@/components/ui/hero/HeroSection"
import HeroSectionWithVideo from '@/components/ui/hero/HeroSectionWithVideo'
import ScrollToTop from '@/components/common/ScrollToTop'


const Home = () => {
  return (
    <div>
      
      <HeroSection />
      <HeroSectionWithVideo />
      <ScrollToTop />
    </div>
  )
}

export default Home