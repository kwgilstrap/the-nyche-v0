'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import type { Components } from 'react-markdown'

interface MarkdownRendererProps {
  content: string
}

// Define proper types for component props
type ComponentProps = React.HTMLAttributes<HTMLElement> & {
  node?: any; // Still need this for react-markdown compatibility
  children?: React.ReactNode;
}

interface CodeProps extends ComponentProps {
  inline?: boolean;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Custom components for the markdown renderer
  const components: Components = {
    // Style headers
    h1: ({ children, ...props }: ComponentProps) => (
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-6 mt-10" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: ComponentProps) => (
      <h2 className="text-2xl md:text-3xl font-serif font-medium mb-5 mt-8" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: ComponentProps) => (
      <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 mt-6" {...props}>
        {children}
      </h3>
    ),
    
    // Style paragraphs
    p: ({ children, ...props }: ComponentProps) => (
      <p className="font-serif text-lg mb-6 leading-relaxed text-pretty hyphenate" {...props}>
        {children}
      </p>
    ),
    
    // Style links
    a: ({ children, ...props }: ComponentProps) => (
      <a 
        className="text-black font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-colors" 
        {...props}
      >
        {children}
      </a>
    ),
    
    // Style lists
    ul: ({ children, ...props }: ComponentProps) => (
      <ul className="font-serif list-disc pl-6 mb-6" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: ComponentProps) => (
      <ol className="font-serif list-decimal pl-6 mb-6" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: ComponentProps) => (
      <li className="mb-2 font-serif" {...props}>
        {children}
      </li>
    ),
    
    // Style blockquotes
    blockquote: ({ children, ...props }: ComponentProps) => (
      <blockquote className="font-serif text-xl italic border-l-4 border-gray-300 pl-6 py-2 my-8" {...props}>
        {children}
      </blockquote>
    ),
    
    // Style code blocks
    code: ({ inline, children, ...props }: CodeProps) => (
      inline 
        ? <code className="font-mono text-sm bg-gray-100 px-1 py-0.5 rounded" {...props}>{children}</code>
        : <code className="block font-mono text-sm bg-gray-100 p-4 my-6 rounded overflow-auto" {...props}>{children}</code>
    ),
    
    // Style horizontal rules
    hr: (props: ComponentProps) => (
      <hr className="my-8 border-t border-gray-200" {...props} />
    ),
    
    // Handle images with Next.js Image component for optimization
    img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
      if (!src) {
        return <span>Missing image source</span>;
      }
      
      // For external images, use standard img tag
      if (src.startsWith('http')) {
        return <img src={src} alt={alt || ''} className="rounded-sm my-6 max-w-full h-auto" {...props} />;
      }
      
      // For local images, use placeholder for now
      // In a real app, you'd need more complex logic to handle local paths
      return <img src={src} alt={alt || ''} className="rounded-sm my-6 max-w-full h-auto" {...props} />;
    }
  }

  return (
    <ReactMarkdown components={components}>
      {content}
    </ReactMarkdown>
  )
}
