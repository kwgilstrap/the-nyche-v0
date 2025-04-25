// lib/getAllEditorialSlugs.ts

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type EditorialMeta = {
  slug: string
  title: string
  description: string
  date: string
}

/**
 * Gets all editorial slugs and metadata
 * Handles frontmatter with either 'description' or 'excerpt' fields
 * @returns Array of EditorialMeta objects sorted by date (newest first)
 */
export function getAllEditorialSlugs(): EditorialMeta[] {
  try {
    // Get the path to markdown editorial content
    const editorialDirectory = path.join(process.cwd(), 'src/content/editorial')
    
    // Check if directory exists
    if (!fs.existsSync(editorialDirectory)) {
      console.warn(`Editorial directory not found: ${editorialDirectory}`)
      return []
    }
    
    // Read all files in the directory
    const filenames = fs.readdirSync(editorialDirectory)
    
    // Filter to only include markdown files
    const markdownFiles = filenames.filter(filename => filename.endsWith('.md'))
    
    // If no markdown files found, return empty array
    if (markdownFiles.length === 0) {
      console.warn('No markdown files found in editorial directory')
      return []
    }
    
    // Parse each file to extract metadata
    const allEditorialPosts = markdownFiles.map(filename => {
      try {
        // Remove the .md extension to get the slug
        const slug = filename.replace(/\.md$/, '')
        
        // Read the file contents
        const fullPath = path.join(editorialDirectory, filename)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        // Parse the frontmatter
        const { data } = matter(fileContents)
        
        // Return the post metadata - handle different field names gracefully
        return {
          slug,
          title: data?.title || 'Untitled Article',
          // Support both 'description' and 'excerpt' fields
          description: data?.description || data?.excerpt || 'No description available',
          date: data?.date || new Date().toISOString()
        }
      } catch (fileError) {
        console.error(`Error processing file ${filename}:`, fileError)
        // Return a fallback for this file
        return {
          slug: filename.replace(/\.md$/, ''),
          title: 'Error Loading Article',
          description: 'This article could not be loaded properly',
          date: new Date().toISOString()
        }
      }
    })
    
    // Sort posts by date in descending order (newest first)
    return allEditorialPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  } catch (error) {
    console.error("Error getting editorial slugs:", error)
    return []
  }
}