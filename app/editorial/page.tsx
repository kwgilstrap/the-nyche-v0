import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ContentSection } from "@/components/content-section"

export default function EditorialPage() {
  // This would typically fetch from your content directory
  const editorialPosts = [
    {
      id: "1",
      title: "The Art of Layering for NYC Winters",
      description: "How to stay stylish while battling the elements in the concrete jungle.",
      category: "Style",
      date: "January 15, 2023",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/the-art-of-layering",
    },
    {
      id: "2",
      title: "Downtown Gallery Openings: Spring 2023",
      description: "The must-see exhibitions and events in Manhattan's art scene this season.",
      category: "Scene",
      date: "March 3, 2023",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/downtown-gallery-openings",
    },
    {
      id: "3",
      title: "Interview: Designer Sarah Chen on Sustainable Fashion",
      description: "The rising star discusses her approach to ethical design and the future of the industry.",
      category: "Desk",
      date: "April 22, 2023",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/sarah-chen-interview",
    },
    {
      id: "4",
      title: "The Return of 90s Minimalism in Modern Wardrobes",
      description: "How the stripped-back aesthetic is influencing today's fashion landscape.",
      category: "Style",
      date: "May 10, 2023",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/90s-minimalism",
    },
    {
      id: "5",
      title: "Hidden Gems: NYC's Most Underrated Vintage Shops",
      description: "Discover the city's best-kept secrets for finding unique second-hand treasures.",
      category: "Scene",
      date: "June 5, 2023",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/vintage-shops",
    },
    {
      id: "6",
      title: "The Psychology of Dress: How Clothing Affects Perception",
      description: "Exploring the subtle ways your wardrobe choices influence how others see you.",
      category: "Desk",
      date: "July 18, 2023",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/psychology-of-dress",
    },
  ]

  return (
    <main>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl font-medium tracking-tight mb-2">Editorial</h1>
          <p className="text-lg text-gray-600">Curated insights on style, culture, and the NYC scene</p>
        </div>
      </div>

      <ContentSection
        title="Latest Articles"
        description="Explore our most recent perspectives on style, culture, and the NYC scene."
        items={editorialPosts}
        columns={3}
        aspectRatio="portrait"
      />
    </main>
  )
}
