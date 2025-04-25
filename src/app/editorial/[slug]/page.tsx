import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import MarkdownRenderer from '@/components/markdown-renderer'

// Generate all possible editorial routes at build time
export async function generateStaticParams() {
  try {
    const dir = path.join(process.cwd(), 'src/content/editorial')
    const files = fs.readdirSync(dir)
    
    // Filter to only include .md files
    const markdownFiles = files.filter(file => file.endsWith('.md'))
    
    return markdownFiles.map((file) => ({
      slug: file.replace('.md', ''),
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// Server Component for the article page
export default async function EditorialPage({ params }: { params: { slug: string } }) {
  try {
    const filePath = path.join(process.cwd(), 'src/content/editorial', `${params.slug}.md`)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      return notFound()
    }
    
    // Read and parse the markdown file
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { content, data } = matter(fileContent)
    
    // Defensive fallbacks for frontmatter fields
    const title = data?.title || 'Untitled Article'
    const date = data?.date ? new Date(data.date) : new Date()
    const formattedDate = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
    
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/editorial" className="inline-flex items-center text-sm hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Editorial
          </Link>
        </div>
        
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-medium mb-2">{title}</h1>
          <p className="text-sm text-gray-500 mb-8">
            {formattedDate}
          </p>
          <div className="markdown-content">
            <MarkdownRenderer content={content || 'Content not available'} />
          </div>
        </article>
      </main>
    )
  } catch (error) {
    console.error('Error rendering article:', error)
    return notFound()
  }
}
