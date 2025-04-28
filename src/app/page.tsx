import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import Link from 'next/link'
import React from 'react'
import Header from '@/components/header'
import { formatDate } from '@/lib/utils'

const EDITORIAL_PATH = path.join(process.cwd(), 'content/editorial')

interface Article {
  slug: string
  title: string
  description: string
  date: string
}

// Fallback content in case nothing loads
const fallbackArticles: Article[] = [
  {
    slug: 'coming-soon',
    title: 'Coming Soon',
    description: 'Our editorial team is preparing new content.',
    date: new Date().toISOString(),
  },
]

export default function HomePage() {
  let articles: Article[] = []

  try {
    const files = fs.readdirSync(EDITORIAL_PATH).filter((f: string) => f.endsWith('.md'))

    articles = files.map((filename: string) => {
      const fullPath = path.join(EDITORIAL_PATH, filename)
      const raw = fs.readFileSync(fullPath, 'utf-8')
      const { data } = matter(raw)

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data?.title || 'Untitled',
        description: data?.description || data?.excerpt || 'No description',
        date: data?.date || new Date().toISOString(),
      }
    })

    // Sort articles by date (newest first)
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (err) {
    console.error('⚠️ Failed to load editorial articles:', err)
  }

  const articlesToRender = articles.length ? articles.slice(0, 5) : fallbackArticles

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-16">
        <section className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-16 text-center tracking-tight">
            Featured Articles
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {articlesToRender.map((article, index) => (
              <article 
                key={article.slug} 
                className={`
                  ${index === 0 ? 'pb-16 border-b border-gray-200' : 'pb-16 border-b border-gray-200'}
                  ${index === articlesToRender.length - 1 ? 'pb-0 border-b-0' : ''}
                `}
              >
                <Link 
                  href={`/editorial/${article.slug}`} 
                  className="group block transition duration-300 ease-in-out"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className={`md:w-${index === 0 ? '3/4' : '2/3'}`}>
                      <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-4 group-hover:text-gray-700 transition duration-300 tracking-tight">
                        {article.title}
                      </h3>
                      <p className="font-serif text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center">
                        <time className="text-sm text-gray-500 tabular-nums">
                          {formatDate(article.date)}
                        </time>
                        <span className="ml-4 text-sm text-gray-900 font-medium opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
                          Read article
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 md:px-12 bg-gray-50 rounded-lg max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-center">
            Join Our Correspondence
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Receive curated insights on style, culture, and exclusive invitations to our events.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition font-medium"
            >
              Subscribe
            </button>
          </form>
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-xl font-medium mb-4">Style</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-700 hover:text-black transition">Wardrobe Theory</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-black transition">Seasonal Transitions</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-xl font-medium mb-4">Scene</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-700 hover:text-black transition">Hidden Corners</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-black transition">Neighborhood Profiles</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-xl font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-700 hover:text-black transition">Personal Styling</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-black transition">Wardrobe Curation</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-black transition">Sample Sale Excursion</Link></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <p className="font-serif text-xl font-medium">THE NYCHE</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-black transition">Contributors</Link>
              <Link href="#" className="text-gray-600 hover:text-black transition">Privacy</Link>
              <Link href="#" className="text-gray-600 hover:text-black transition">Terms</Link>
            </div>
          </div>
          <div className="text-center md:text-left text-sm text-gray-500">
            <p>© 2025 The NYChe. All rights reserved.</p>
            <p>contact@thenyche.com</p>
            <p>New York, NY</p>
          </div>
        </div>
      </footer>
    </>
  )
}
