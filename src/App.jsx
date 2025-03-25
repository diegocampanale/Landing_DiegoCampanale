import React from 'react'
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import Features from './components/Features';

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
    </>
  )
}

export default App