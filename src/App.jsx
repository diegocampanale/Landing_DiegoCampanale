import React from 'react'
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import LogoBar from './components/LogoBar';
import HighlightedCTA from './components/HighlightedCTA';

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <Team />
      <LogoBar />
      <HighlightedCTA />
    </>
  )
}

export default App