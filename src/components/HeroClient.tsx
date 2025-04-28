"use client"

import React, { useState, useEffect } from "react"

export default function HeroClient() {
  const [textIndex, setTextIndex] = useState(0)
  const fullText = "Image isn’t everything—it’s the first thing."

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => setTextIndex(textIndex + 1), 100)
      return () => clearTimeout(timer)
    }
  }, [textIndex])

  return (
    <header className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 bg-white text-black overflow-hidden">
      <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">
        THE NYCHE
      </h1>
      <p className="font-serif text-2xl italic mb-2 flex items-center">
        {fullText.substring(0, textIndex)}
        <span className="inline-block w-[0.05em] h-[1.1em] bg-black animate-pulse ml-1" />
      </p>
      <p className="uppercase text-sm tracking-wider mb-8">
        Permanent Style for the Modern Individual
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border rounded-sm text-center">
          <h3 className="text-lg font-serif mb-2">Editorial</h3>
          <p className="text-sm text-gray-600">
            Curated insights on style, culture, and the NYC scene
          </p>
        </div>
        <div className="p-6 border rounded-sm text-center">
          <h3 className="text-lg font-serif mb-2">Services</h3>
          <p className="text-sm text-gray-600">
            Personalized styling and wardrobe consultation
          </p>
        </div>
        <div className="p-6 border rounded-sm text-center">
          <h3 className="text-lg font-serif mb-2">Moodboard</h3>
          <p className="text-sm text-gray-600">
            Visual inspirations that define our aesthetic
          </p>
        </div>
      </div>
      <a
        href="#featured-articles"
        className="bg-black text-white px-6 py-2 uppercase rounded-sm hover:bg-gray-900 transition mb-12"
      >
        Explore Articles
      </a>
    </header>
  )
}