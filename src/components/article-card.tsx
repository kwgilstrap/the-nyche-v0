"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ArticleCardProps {
  slug: string
  title: string
  description: string
  date: string
  isFeature?: boolean
}

export default function ArticleCard({
  slug,
  title,
  description,
  date,
  isFeature = false
}: ArticleCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md hover:-translate-y-1 focus-within:ring-2 focus-within:ring-accent">
      <Link
        href={`/editorial/${slug}`}
        className="group block p-6 outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-accent transition-shadow"
        tabIndex={0}
        aria-label={`Read article: ${title}`}
      >
        <h2 className="font-serif text-xl md:text-2xl font-semibold mb-2 tracking-tight group-hover:text-gray-700 transition-colors">{title}</h2>
        <p className="font-sans text-base text-gray-700 mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-500 tabular-nums">{formatDate(date)}</time>
          <span className="inline-flex items-center text-sm font-medium text-black opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            Read article
            <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </Link>
    </article>
  )
}
