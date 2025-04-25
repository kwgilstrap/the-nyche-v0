import { Metadata } from 'next'
import { ErrorBoundary, generatePageMetadata } from '@/lib/error-handling'
import { getAllDocuments } from '@/lib/content-loader'

export const metadata: Metadata = generatePageMetadata({
  title: 'Home',
})

export default async function HomePage() {
  let featuredContent = []
  
  try {
    featuredContent = await getAllDocuments('editorial')
  } catch (error) {
    console.error('Failed to load featured content:', error)
  }

  return (
    <ErrorBoundary>
      <main className="container mx-auto px-4">
        <section className="hero">
          <h1 className="text-4xl font-bold">
            The NYChe: Intentional Style
          </h1>
          <p className="mt-4 text-xl">
            Curating the art of dressing with purpose
          </p>
        </section>

        {featuredContent.length > 0 && (
          <section className="featured-content mt-12">
            <h2 className="text-2xl font-semibold mb-6">
              Latest Editorial
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredContent.slice(0, 3).map((doc) => (
                <article 
                  key={doc.slug} 
                  className="border p-4 rounded-lg hover:shadow-md transition"
                >
                  <h3 className="text-xl font-medium">
                    {doc.title || 'Untitled'}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {doc.excerpt || 'No preview available'}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </ErrorBoundary>
  )
}