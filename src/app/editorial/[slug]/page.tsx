import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import MarkdownRenderer from "../../../components/markdown-renderer.tsx"
import Navigation from '@/components/navigation'

// Generate all possible editorial routes at build time
export async function generateStaticParams() {
  try {
    const dir = path.join(process.cwd(), 'content/editorial')
    console.log('DEBUG: Reading markdown dir →', dir)
    const files = fs.readdirSync(dir)
    console.log('DEBUG: Found files →', files)

    const markdownFiles = files.filter((file) => file.endsWith('.md'))
    return markdownFiles.map((file) => ({
      slug: file.replace('.md', ''),
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// Server Component for the article page
export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  try {
    const filePath = path.join(
      process.cwd(),
      'content/editorial',
      `${params.slug}.md`
    )
    console.log('DEBUG: Loading file →', filePath)

    if (!fs.existsSync(filePath)) {
      return notFound()
    }

    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const { content, data } = matter(fileContents)

    return (
      <div className="min-h-screen bg-white">
        <div className="border-b border-gray-100 py-6 mb-12">
          <div className="container mx-auto px-4">
            <Navigation />
          </div>
        </div>
        
        <article className="container max-w-4xl mx-auto px-4 py-8">
          <div className="mb-12">
            <Link href="/editorial" className="inline-flex items-center text-sm hover:underline mb-6 text-gray-600">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Articles
            </Link>
            <h1 className="font-serif text-5xl font-medium tracking-tight mb-4">{data.title}</h1>
            <p className="text-gray-500 tabular-nums">
              {new Date(data.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="prose prose-lg prose-serif max-w-none">
            <MarkdownRenderer content={content} />
          </div>
        </article>
      </div>
    )
  } catch (error) {
    console.error('Error rendering article:', error)
    return notFound()
  }
}