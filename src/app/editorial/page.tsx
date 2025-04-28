import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getAllEditorialSlugs, type EditorialMeta } from '@/lib/getAllEditorialSlugs'

export default async function EditorialPage() {
  // Get all articles with error handling
  const articles = await getAllEditorialSlugs()

  return (
    <main>
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-16 text-center">
            <Link href="/" className="inline-flex items-center text-sm hover:underline mb-4 text-gray-600 group">
              <ArrowLeft className="h-4 w-4 mr-1 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">Editorial Archive</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Curated insights on style, culture, and the NYC scene</p>
          </div>

          {articles.length > 0 ? (
            <div className="space-y-12 md:space-y-16">
              {articles.map((article) => (
                <article key={article.slug} className="border-b border-gray-100 pb-12 md:pb-16">
                  <Link href={`/editorial/${article.slug}`} className="group block">
                    <h2 className="text-2xl md:text-3xl font-serif font-medium mb-3 title-hover-underline group-hover:text-black transition-colors">{article.title}</h2>
                  </Link>
                  <p className="text-sm text-gray-500 mb-3 tabular-nums">
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-lg md:text-xl font-serif text-gray-700 leading-relaxed">{article.description}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-gray-100 rounded-lg">
              <p className="text-xl font-serif text-gray-600 mb-4">No articles found</p>
              <p className="text-gray-500">Check back soon for new content.</p>
            </div>
          )}
          
          {/* NEWSLETTER */}
          <section className="bg-gray-50 py-12 px-6 max-w-2xl mx-auto text-center rounded-sm mt-16">
            <h3 className="text-2xl font-serif mb-2">Join Our Correspondence</h3>
            <p className="text-gray-600 mb-4">
              Receive curated insights on style, culture, and exclusive invitations.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border rounded-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white uppercase rounded-sm hover:bg-gray-900 transition"
              >
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}
