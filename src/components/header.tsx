"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import Navigation from "./navigation"

export default function Header() {
  const [loaded, setLoaded] = useState(false)
  const primaryTaglineRef = useRef<HTMLParagraphElement>(null)
  const typewriterText = "Image isn't everything—it's the first thing."
  const [typewriterIndex, setTypewriterIndex] = useState(0)

  // Fade-in animation on load
  useEffect(() => {
    setLoaded(true)
  }, [])

  // Typewriter effect for primary tagline with improved timing
  useEffect(() => {
    if (!primaryTaglineRef.current || typewriterIndex >= typewriterText.length) return

    const timer = setTimeout(() => {
      setTypewriterIndex((prev) => prev + 1)
    }, 70) // Slightly faster typing for better user experience

    return () => clearTimeout(timer)
  }, [typewriterIndex])

  return (
    <header className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white text-black overflow-hidden">
      {/* Refined paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: "url('/images/paper-grain.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none z-0"></div>

      <div className="absolute top-0 left-0 right-0 py-6 px-4 sm:px-6 lg:px-8 z-10 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <Navigation />
      </div>

      <div
        className={`flex flex-col items-center text-center max-w-3xl mx-auto transition-opacity duration-1000 ease-in-out z-10 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Brand Name - Enhanced with better spacing and animation */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 transform translate-y-4 opacity-0 animate-reveal ligatures-all">
          THE NYCHE
        </h1>

        {/* Primary Tagline with improved Typewriter Effect */}
        <p
          ref={primaryTaglineRef}
          className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic mb-6 transform translate-y-4 opacity-0 animate-reveal animation-delay-300 ligatures-common"
        >
          {typewriterText.substring(0, typewriterIndex)}
          <span className="animate-cursor inline-block w-[0.05em] h-[1.1em] bg-black ml-[0.05em] align-middle">
            &nbsp;
          </span>
        </p>

        {/* Secondary Tagline - Refined spacing */}
        <p className="text-sm sm:text-base md:text-lg uppercase tracking-widest font-medium mb-16 transform translate-y-4 opacity-0 animate-reveal animation-delay-600 small-caps-text">
          PERMANENT STYLE FOR THE MODERN INDIVIDUAL
        </p>

        {/* Improved Content Preview Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transform translate-y-4 opacity-0 animate-reveal animation-delay-900">
          <div className="bg-gray-50 border border-gray-100 p-8 flex flex-col items-center justify-center rounded-sm shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-serif font-medium mb-3 ligatures-common">Editorial</h3>
            <p className="text-sm text-gray-600 text-center max-readable">
              Curated insights on style, culture, and the NYC scene
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 p-8 flex flex-col items-center justify-center rounded-sm shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-serif font-medium mb-3 ligatures-common">Services</h3>
            <p className="text-sm text-gray-600 text-center max-readable">
              Personalized styling and wardrobe consultation
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 p-8 flex flex-col items-center justify-center rounded-sm shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-serif font-medium mb-3 ligatures-common">Moodboard</h3>
            <p className="text-sm text-gray-600 text-center max-readable">
              Visual inspirations that define our aesthetic
            </p>
          </div>
        </div>
        
        {/* New: CTA Button */}
        <div className="animate-reveal animation-delay-1200 opacity-0 transform translate-y-4">
          <a 
            href="/editorial" 
            className="inline-block bg-black text-white px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-gray-900 transition duration-300 rounded-sm"
          >
            Explore Articles
          </a>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400 uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </header>
  )
}
