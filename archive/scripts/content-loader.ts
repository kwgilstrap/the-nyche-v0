import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export interface DocumentMetadata {
  slug: string
  title?: string
  date?: string
  [key: string]: any
}

export async function getAllDocuments(directory: string): Promise<DocumentMetadata[]> {
  const contentDir = path.join(process.cwd(), 'content', directory)
  
  try {
    const files = await fs.readdir(contentDir)
    
    const documentPromises = files
      .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
      .map(async (filename): Promise<DocumentMetadata> => {
        const filePath = path.join(contentDir, filename)
        const fileContents = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        
        return {
          slug: filename.replace(/\.mdx?$/, ''),
          content: content,
          ...data
        }
      })
    
    return Promise.all(documentPromises)
  } catch (error) {
    console.error(`Error loading documents from ${directory}:`, error)
    return []
  }
}

export async function getDocumentBySlug(directory: string, slug: string): Promise<DocumentMetadata | null> {
  const documents = await getAllDocuments(directory)
  return documents.find(doc => doc.slug === slug) || null
}

// Memoized caching layer for performance
const documentCache = new Map<string, DocumentMetadata[]>()

export async function getCachedDocuments(directory: string): Promise<DocumentMetadata[]> {
  if (!documentCache.has(directory)) {
    const documents = await getAllDocuments(directory)
    documentCache.set(directory, documents)
  }
  return documentCache.get(directory) || []
}