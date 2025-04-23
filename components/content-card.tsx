"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface ContentCardProps {
  title: string
  description: string
  image: string
  category?: string
  date?: string
  readingTime?: string
  href: string
  aspectRatio?: "square" | "portrait" | "landscape"
  priority?: boolean
  variant?: "primary" | "standard" | "secondary" | "featured"
}

export function ContentCard({
  title,
  description,
  image,
  category,
  date,
  readingTime,
  href,
  aspectRatio = "portrait",
  priority = false,
  variant = "standard",
}: ContentCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Define aspect ratio class
  const aspectRatioClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  }[aspectRatio]

  // Define image height based on variant
  const imageHeightClass = {
    primary: "h-[60%]",
    standard: "h-[50%]",
    secondary: "h-[40%]",
    featured: "",
  }[variant]

  // Define typography size based on variant
  const titleClass = {
    primary: "text-2xl md:text-3xl",
    standard: "text-xl md:text-2xl",
    secondary: "text-lg md:text-xl",
    featured: "text-xl md:text-2xl",
  }[variant]

  // Define shadow depth based on variant
  const shadowClass = {
    primary: "hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]",
    standard: "hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)]",
    secondary: "hover:shadow-[0_6px_20px_rgb(0,0,0,0.04)]",
    featured: "hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)]",
  }[variant]

  return (
    <Link href={href} className="group block h-full">
      <article
        className={`relative overflow-hidden bg-white transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-[1.02] ${shadowClass} h-full flex flex-col`}
        style={{ borderWidth: "0.25px", borderColor: "#e8e8e4", borderStyle: "solid" }}
      >
        <div
          className={`relative overflow-hidden ${aspectRatioClass} ${variant === "featured" ? "" : imageHeightClass}`}
        >
          <div className="absolute inset-0 bg-gray-100">
            {/* Paper texture overlay */}
            <div
              className="absolute inset-0 mix-blend-overlay opacity-[0.05] pointer-events-none z-10"
              style={{
                backgroundImage: "url('/images/paper-grain.png')",
                backgroundRepeat: "repeat",
              }}
            ></div>
            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-60 z-5"></div>
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              priority={priority}
              className={`object-cover transition-all duration-700 filter grayscale-[30%] contrast-[105%] ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
        <div className="p-5 md:p-6 flex flex-col flex-grow">
          {(category || date || readingTime) && (
            <div className="mb-2 flex items-center text-xs text-gray-500 flex-wrap gap-2">
              {category && <span className="category font-medium text-black">{category}</span>}
              {category && (date || readingTime) && <span className="text-gray-300">•</span>}
              {date && (
                <time dateTime={date} className="text-gray-500 text-xs tracking-wide">
                  {date}
                </time>
              )}
              {date && readingTime && <span className="text-gray-300">•</span>}
              {readingTime && <span className="text-gray-500 text-xs tracking-wide">{readingTime}</span>}
            </div>
          )}
          <h3
            className={`mb-2 font-serif ${titleClass} font-medium leading-tight tracking-tight group-hover:underline group-hover:decoration-[0.5px] group-hover:underline-offset-4 group-hover:decoration-gray-400 transition-all ligatures-common`}
          >
            {title}
          </h3>
          <p className="font-serif text-sm leading-relaxed text-gray-600 font-light max-readable text-pretty hyphenate line-clamp-3">
            {description}
          </p>
        </div>
      </article>
    </Link>
  )
}
