"use client"

import React from "react"
import Navigation from "../components/navigation.tsx"
//@assistant: fix the import paths
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <Navigation />
      </div>
    </header>
  )
}