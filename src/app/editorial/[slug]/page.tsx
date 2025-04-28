import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import MarkdownRenderer from "@/components/markdown-renderer"

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
      <div className="py-12 md:py-16 bg-white">
        <article className="container max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10 md:mb-12">
            <Link href="/editorial" className="inline-flex items-center text-sm hover:underline mb-6 text-gray-600 group">
              <ArrowLeft className="h-4 w-4 mr-1 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </Link>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4">{data.title}</h1>
            <p className="text-gray-500 tabular-nums text-sm">
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