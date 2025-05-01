"use client"

import React, { useState, useEffect } from "react"

export default function HeroClient() {
  const [textIndex, setTextIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Image isn’t everything—it’s the first thing."

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => setTextIndex(textIndex + 1), 100)
      return () => clearTimeout(timer)
    }
  }, [textIndex])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <header className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 bg-white text-black overflow-hidden">
      <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">
        THE NYCHE
      </h1>
      <p className="font-serif text-2xl italic mb-2 flex items-center">
        {fullText.substring(0, textIndex)}
        <span
          className="inline-block w-[0.05em] h-[1.1em] bg-black ml-1"
          style={{ visibility: showCursor ? 'visible' : 'hidden' }}
        />
      </p>
      <p className="uppercase text-sm tracking-wider mb-8">
        Permanent Style for the Modern Individual
      </p>
      <a
        href="/editorial"
        className="bg-black text-white px-6 py-2 uppercase rounded-sm hover:bg-gray-900 transition mb-12"
      >
        Explore Articles
      </a>
    </header>
  )
}