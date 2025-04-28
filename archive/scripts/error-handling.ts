'use client'

import React, { ErrorInfo } from 'react'
import * as Sentry from "@sentry/nextjs"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error tracking service
    Sentry.captureException(error, { 
      extra: errorInfo 
    })
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-fallback">
          <h1>Something went wrong</h1>
          <p>{this.state.error?.message}</p>
        </div>
      )
    }

    return this.props.children
  }
}

// Metadata Generator
export function generatePageMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const baseMetadata: Metadata = {
    title: {
      default: 'The NYChe - Intentional Style Guide',
      template: '%s | The NYChe'
    },
    description: 'NYC-driven style platform for intentional dressing and lifestyle',
    openGraph: {
      title: 'The NYChe',
      description: 'NYC-driven style platform for intentional dressing and lifestyle',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'The NYChe - Intentional Style',
      description: 'NYC-driven style platform for intentional dressing and lifestyle',
    },
    robots: {
      index: true,
      follow: true,
    }
  }

  return {
    ...baseMetadata,
    ...overrides
  }
}