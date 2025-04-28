import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getAllEditorialSlugs, type EditorialMeta } from '@/lib/getAllEditorialSlugs'
import Navigation from '@/components/navigation'

export default function EditorialPage() {
  // Get all articles with error handling
  const articles = getAllEditorialSlugs()

  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-gray-100 py-6 mb-12">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-16 text-center">
          <Link href="/" className="inline-flex items-center text-sm hover:underline mb-4 text-gray-600">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="font-serif text-5xl font-medium tracking-tight mb-4">Editorial Archive</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Curated insights on style, culture, and the NYC scene</p>
        </div>

        {articles.length > 0 ? (
          <div className="space-y-16">
            {articles.map((article) => (
              <article key={article.slug} className="border-b border-gray-100 pb-16">
                <Link href={`/editorial/${article.slug}`} className="group block">
                  <h2 className="text-3xl font-serif font-medium mb-3 title-hover-underline">{article.title}</h2>
                </Link>
                <p className="text-sm text-gray-500 mb-4 tabular-nums">
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-xl font-serif text-gray-700 leading-relaxed">{article.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-gray-100 rounded-lg">
            <p className="text-xl font-serif text-gray-600 mb-4">No articles found</p>
            <p className="text-gray-500">Check back soon for new content.</p>
          </div>
        )}
      </div>
    </main>
  )
}
