// components/Hero.tsx
import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-2xl">
      <Image
        src="/hero-mobile-v1.jpg"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover w-full h-full md:hidden"
      />
      <Image
        src="/hero-desktop-v1.jpg"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover w-full h-full hidden md:block"
      />
      {/* overlays */}
      <Image
        src="/hero-mobile-overlay-v1.png"
        alt=""
        fill
        aria-hidden="true"
        className="md:hidden"
      />
      <Image
        src="/hero-desktop-overlay-v1.png"
        alt=""
        fill
        aria-hidden="true"
        className="hidden md:block"
      />

      {/* copy + CTA */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
        <h1 className="text-white text-5xl md:text-7xl font-light leading-tight">
          The Nyche
        </h1>
        <p className="mt-3 text-black text-lg md:text-xl font-medium">
          Permanent Style For the Modern Individual
        </p>
        <Link
  href="/services"
  className="mt-6 inline-block bg-blue-600 text-white uppercase text-sm tracking-wide py-2 px-5 rounded"
>
  Services
</Link>      </div>
    </div>
)