import React from 'react'
import Link from 'next/link'
import { getAllEditorialSlugs } from '@/lib/getAllEditorialSlugs'

export default async function EditorialIndexPage() {
  const articles = await getAllEditorialSlugs()
  
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-8">Editorial Archive</h1>
        
        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.slug} className="border-b border-gray-100 pb-8">
              <Link 
                href={`/editorial/${article.slug}`}
                className="block group"
              >
                <h2 className="font-serif text-2xl md:text-3xl font-medium mb-3 group-hover:text-gray-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                {article.description && (
                  <p className="text-gray-600 leading-relaxed">{article.description}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
