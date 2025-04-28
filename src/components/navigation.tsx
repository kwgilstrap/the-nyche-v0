"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

// Navigation links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Editorial", href: "/editorial" },
  { name: "Services", href: "/services" },
  { name: "Moodboard", href: "/moodboard" },
  { name: "Fitting Room", href: "/fitting-room" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])
  
  // Close mobile menu when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  // Determine if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(href)
  }

  return (
    <nav className="w-full flex justify-between items-center">
      {/* Logo for mobile navigation */}
      <div className="md:hidden">
        <Link href="/" className="font-serif font-medium text-lg">
          THE NYCHE
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center space-x-8 mx-auto">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`
              text-sm tracking-widest uppercase font-medium py-2 relative group
              all-small-caps transition-colors duration-300
              ${isActive(link.href) ? "text-black" : "text-gray-500 hover:text-black"}
            `}
            aria-current={isActive(link.href) ? "page" : undefined}
          >
            {link.name}
            <span
              className={`
                absolute bottom-0 left-0 h-px bg-black transform origin-left
                transition-all duration-300 ease-out
                ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}
              `}
            ></span>
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-white z-50 border-t border-gray-100 animate-fade-in">
          <div className="flex flex-col items-center py-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  w-full text-center py-4 text-base tracking-widest uppercase font-medium
                  all-small-caps transition-colors duration-300
                  ${isActive(link.href) ? "text-black font-medium" : "text-gray-600 hover:text-black"}
                `}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="block h-px w-12 bg-black mx-auto mt-1"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
