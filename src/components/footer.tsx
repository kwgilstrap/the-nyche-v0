"use client"

// @assistant:fix-footer-layout
import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function FooterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would connect to a newsletter service
    if (email) {
      setSubscribed(true)
      setEmail("")
      // Reset the subscribed state after 5 seconds
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white pt-32 pb-20">
      {/* Paper grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: "url('/images/paper-grain.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="border-t border-gray-200 mb-12"></div>

        {/* Navigation Section */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Style</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/editorial/category/wardrobe"
                  className="font-serif text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Wardrobe Theory
                </Link>
              </li>
              <li>
                <Link
                  href="/editorial/category/seasonal"
                  className="font-serif text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Seasonal Transitions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Scene</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/editorial/category/hidden"
                  className="font-serif text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Hidden Corners
                </Link>
              </li>
              <li>
                <Link
                  href="/editorial/category/neighborhoods"
                  className="font-serif text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Neighborhood Profiles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#personal-styling"
                  className="font-serif text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Personal Styling
                </Link>
              </li>
              <li>
                <Link
                  href="/services#wardrobe-curation"
                  className="font-serif text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Wardrobe Curation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-serif text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Sample Sale Excursion
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-serif text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Personal Shopping
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Credits Section */}
        <div className="pt-10 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="font-serif text-xl font-medium tracking-tight ligatures-all">
                THE NYCHE
              </Link>
              <p className="mt-2 text-sm text-gray-500">© {currentYear} The NYChe. All rights reserved.</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-4">
                <Link
                  href="/about/contributors"
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Contributors
                </Link>
                <Link
                  href="/about/privacy"
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Privacy
                </Link>
                <Link
                  href="/about/terms"
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Terms
                </Link>
              </div>
              <div className="text-sm text-gray-500">
                <address className="not-italic">
                  <span className="inline-block mr-4">contact@thenyche.com</span>
                  <span className="inline-block">New York, NY</span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
