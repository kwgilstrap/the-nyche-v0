import { ContentCard } from "@/components/content-card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DesignSystemPage() {
  // Sample content for the cards
  const cardItems = [
    {
      id: "1",
      title: "The Subtle Art of Monochromatic Dressing",
      description: "Exploring the nuanced approach to single-color ensembles and their psychological impact.",
      category: "Style",
      date: "January 15, 2023",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/monochromatic-dressing",
    },
    {
      id: "2",
      title: "Architectural Influences in Contemporary Menswear",
      description: "How structural principles from Bauhaus to Brutalism shape the silhouettes of modern clothing.",
      category: "Analysis",
      date: "February 22, 2023",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/architectural-influences",
    },
    {
      id: "3",
      title: "The Resurgence of Artisanal Techniques in Luxury Goods",
      description: "Traditional craftsmanship finding new expression in an era of mass production and digital design.",
      category: "Craft",
      date: "March 10, 2023",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/artisanal-techniques",
    },
    {
      id: "4",
      title: "Seasonal Transitions: The Philosophy of Adaptable Wardrobes",
      description:
        "Developing a coherent style identity that evolves gracefully through changing weather and occasions.",
      category: "Philosophy",
      date: "April 5, 2023",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/seasonal-transitions",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-sm hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl font-medium tracking-tight mb-2">Card Design System</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A refined editorial approach to content presentation, emphasizing typography, subtle texture, and thoughtful
            interaction.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-2xl font-medium mb-6">Portrait Format</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardItems.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
                date={item.date}
                href={item.href}
                aspectRatio="portrait"
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl font-medium mb-6">Landscape Format</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardItems.slice(0, 2).map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
                date={item.date}
                href={item.href}
                aspectRatio="landscape"
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl font-medium mb-6">Square Format</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardItems.slice(0, 3).map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
                date={item.date}
                href={item.href}
                aspectRatio="square"
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl font-medium mb-6">Featured Layout</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <ContentCard
                title={cardItems[0].title}
                description={cardItems[0].description}
                image={cardItems[0].image}
                category={cardItems[0].category}
                date={cardItems[0].date}
                href={cardItems[0].href}
                aspectRatio="landscape"
              />
            </div>
            <div className="md:col-span-4">
              <ContentCard
                title={cardItems[1].title}
                description={cardItems[1].description}
                image={cardItems[1].image}
                category={cardItems[1].category}
                date={cardItems[1].date}
                href={cardItems[1].href}
                aspectRatio="portrait"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl font-medium mb-6">Design Specifications</h2>
          <div className="prose prose-lg max-w-3xl">
            <ul className="space-y-2">
              <li>
                <strong>Border:</strong> 0.25px warm gray (#e8e8e4) for a refined, barely-there presence
              </li>
              <li>
                <strong>Image Treatment:</strong> 30% desaturation, 5% increased contrast, paper texture overlay
              </li>
              <li>
                <strong>Typography:</strong> Categories in small caps with 2px letter spacing, descriptions in literary
                serif with proper ligatures
              </li>
              <li>
                <strong>Hover Animation:</strong> 1.02x scale with custom easing function mimicking the weight of
                picking up a quality magazine
              </li>
              <li>
                <strong>Transition:</strong> 500ms duration with cubic-bezier(0.19, 1, 0.22, 1) easing for a weighted,
                tactile feel
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
