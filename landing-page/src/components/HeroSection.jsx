import logo from "../assets/logo.svg"
import { Rocket } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="flex border border-red-500 bg-[#F8D57E] justify-beetwen">
        {/* Header*/}
        <div className="flex h-[448px] border border-blue-500">
            <h1>Create Engaging Landing Pages</h1>
            <p>Build beautiful landing pages in record time with Anima’s Landing Page UI kit for Figma. No code required!</p>
        </div>
        {/* Mockup*/}
        <div className="flex border border-green-500"></div>
    </div>
  )
}

export default HeroSection
