"use client"
import React, { useRef, useState } from "react"
import Link from "next/link"
import { EditorialMeta } from "../lib/getAllEditorialSlugs"

export default function FeaturedArticles({ articles }: { articles: EditorialMeta[] }) {

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  const startScrolling = () => {
    if (!scrollInterval.current) {
      scrollInterval.current = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 4;
        }
      }, 16); // 60fps smooth
    }
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  return (
    <section id="featured-articles" className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-serif font-bold mb-2">Featured Articles</h2>
      <p className="text-gray-600 mb-8">
        Smart, stylish, and always intentional. Explore our latest editorial picks.
      </p>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 py-6 snap-x snap-mandatory scrollbar-hide relative"
        onMouseMove={(e) => {
          const container = scrollRef.current;
          if (!container) return;
          const { left, width } = container.getBoundingClientRect();
          const x = e.clientX - left;
          if (x > width * 0.75) {
            startScrolling();
          } else {
            stopScrolling();
          }
        }}
        onMouseLeave={stopScrolling}
      >
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent"></div>
        {articles.slice(0, 9).map(({ slug, title, date, description }) => (
          <article
            key={slug}
            className="flex-shrink-0 w-80 p-6 border rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-white"
          >
            <Link href={`/editorial/${slug}`} className="block hover:underline">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 leading-snug hover:underline">{title}</h3>
            </Link>
            <time className="text-xs text-gray-400 uppercase tracking-wider mb-4 block">
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <p className="text-base text-gray-600 leading-relaxed">{description}</p>
          </article>
        ))}
        <Link href="/editorial" className="flex-shrink-0 w-80 p-6 border rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-black text-white flex flex-col justify-center items-center text-center">
          <span className="text-xl font-serif font-bold mb-2">View All Articles</span>
          <span className="text-sm uppercase tracking-widest">Explore More</span>
        </Link>
      </div>
    </section>
  )
}