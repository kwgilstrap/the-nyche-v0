import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MoodboardPage() {
  // This would typically be fetched from your content directory
  const moodboardItems = Array.from({ length: 12 }, (_, i) => ({
    id: `item-${i + 1}`,
    image: `/placeholder.svg?height=${300 + (i % 3) * 100}&width=${400 + (i % 4) * 100}`,
    alt: `Inspiration image ${i + 1}`,
  }))

  return (
    <main>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl font-medium tracking-tight mb-2">Moodboard</h1>
          <p className="text-lg text-gray-600">Visual inspirations that define our aesthetic</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {moodboardItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square overflow-hidden rounded-sm border border-gray-200 bg-white transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <div className="relative h-full w-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover filter grayscale"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
