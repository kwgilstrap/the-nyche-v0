import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import Link from 'next/link'
import React from 'react'

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
  } catch (err) {
    console.error('⚠️ Failed to load editorial articles:', err)
  }

  const articlesToRender = articles.length ? articles.slice(0, 5) : fallbackArticles

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Featured Articles</h1>
      <ul className="space-y-6">
        {articlesToRender.map((article) => (
          <li key={article.slug}>
            <Link href={`/editorial/${article.slug}`} className="block">
              <div className="border border-gray-300 rounded p-4 hover:bg-gray-50">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-sm text-gray-600">{article.description}</p>
                <time className="text-xs text-gray-400">
                  {new Date(article.date).toLocaleDateString()}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}