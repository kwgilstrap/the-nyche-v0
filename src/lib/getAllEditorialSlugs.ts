import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface EditorialMeta {
  slug: string
  title: string
  date: string
  description: string
}

/**
 * Get all editorial articles with metadata from the content directory
 */
export function getAllEditorialSlugs(): EditorialMeta[] {
  try {
    const dir = path.join(process.cwd(), 'content/editorial')
    const files = fs.readdirSync(dir)
    
    // Filter for markdown files and extract slugs with metadata
    const articles = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace(/\.md$/, '')
        const filePath = path.join(dir, file)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data } = matter(fileContent)
        
        return {
          slug,
          title: data.title || slug,
          date: data.date || new Date().toISOString(),
          description: data.description || ''
        } as EditorialMeta
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    return articles
  } catch (error) {
    console.error('Error getting editorial articles:', error)
    return []
  }
}