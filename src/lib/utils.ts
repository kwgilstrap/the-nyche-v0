// src/lib/utils.ts
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names and resolves Tailwind CSS conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string into a human-readable format
 * @param dateString - ISO date string to format
 * @returns Formatted date string
 */
export function formatDate(dateString: string) {
  const date = new Date(dateString)
  
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  }).format(date)
}

/**
 * Truncates text to a specified length and adds an ellipsis
 * @param text - Text to truncate
 * @param length - Maximum length before truncation
 * @returns Truncated text
 */
export function truncateText(text: string, length: number = 100) {
  if (text.length <= length) return text
  
  return text.slice(0, length).trim() + '…'
}

/**
 * Generates a slug from a string
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

/**
 * Determines if a URL is external
 * @param url - URL to check
 * @returns Boolean indicating if URL is external
 */
export function isExternalUrl(url: string) {
  return url.startsWith('http://') || url.startsWith('https://')
}
