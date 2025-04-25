import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getAllEditorialSlugs, type EditorialMeta } from '@/lib/getAllEditorialSlugs'

export default function EditorialPage() {
  // Get all articles with error handling
  const articles = getAllEditorialSlugs()

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl font-medium tracking-tight mb-2">Editorial Archive</h1>
          <p className="text-lg text-gray-600 mb-12">Curated insights on style, culture, and the NYC scene</p>
        </div>

        {articles.length > 0 ? (
          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="border-b border-gray-200 pb-6">
                <Link href={`/editorial/${article.slug}`} className="group">
                  <h2 className="text-2xl font-serif font-medium mb-2 group-hover:underline">{article.title}</h2>
                </Link>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-gray-700">{article.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">No articles found</p>
            <p className="text-gray-500">Check back soon for new content.</p>
          </div>
        )}
      </div>
    </main>
  )
}
