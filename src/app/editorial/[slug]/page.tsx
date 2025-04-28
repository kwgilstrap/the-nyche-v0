import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import MarkdownRenderer from "../../../components/markdown-renderer.tsx"

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
      <article>
        <Link href="/editorial">
          <ArrowLeft /> Back to Articles
        </Link>
        <h1>{data.title}</h1>
        <p>{new Date(data.date).toLocaleDateString()}</p>
        <MarkdownRenderer content={content} />
      </article>
    )
  } catch (error) {
    console.error('Error rendering article:', error)
    return notFound()
  }
}