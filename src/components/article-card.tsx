"use client"

import React from 'react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
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
    <article 
      className={`
        border-b border-gray-200 pb-12 mb-12 last:border-0 last:mb-0 last:pb-0
        ${isFeature ? 'md:grid md:grid-cols-2 md:gap-12 items-start' : ''}
      `}
    >
      <div className={isFeature ? 'col-span-1' : ''}>
        <Link href={`/editorial/${slug}`} className="group block">
          <h3 className={`
            font-serif ${isFeature ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} 
            font-medium mb-4 tracking-tight title-hover-underline
          `}>
            {title}
          </h3>
          
          <p className="font-serif text-gray-700 mb-4 leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <time className="text-sm text-gray-500 tabular-nums">
              {formatDate(date)}
            </time>
            
            <span className="inline-flex items-center text-sm font-medium text-black opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
              Read article
              <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>
        </Link>
      </div>
    </article>
  )
}
