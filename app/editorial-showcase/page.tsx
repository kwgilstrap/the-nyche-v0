import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ContentCard } from "@/components/content-card"

export default function EditorialShowcasePage() {
  // Featured editorial content from the provided markdown files
  const featuredContent = [
    {
      id: "manhattan-hierarchy",
      title: "The Manhattan Hierarchy: A Curated Guide to NYC's Essential Tailors",
      description:
        "Navigating the strata of New York's most capable hands—from master craftsmen to neighborhood essentials.",
      category: "Style Guide",
      date: "April 15, 2023",
      readingTime: "12–15 minutes",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/manhattan-hierarchy",
    },
    {
      id: "seasonal-turnover",
      title: "The Spring/Summer Wardrobe Turnover: A Methodical Approach",
      description:
        "A strategic framework for seasonal transition that aligns wardrobe with climate through deliberate curation.",
      category: "Wardrobe",
      date: "March 22, 2023",
      readingTime: "10–12 minutes",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/seasonal-turnover",
    },
    {
      id: "nyc-style-archetype",
      title: "Discover Your NYC Style Archetype",
      description:
        "A 7-question diagnostic to identify your authentic Manhattan wardrobe persona beyond superficial categorizations.",
      category: "Style Quiz",
      date: "February 8, 2023",
      readingTime: "5–7 minutes",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/nyc-style-archetype",
    },
  ]

  const standardArticles = [
    {
      id: "discerning-thrifter",
      title: "The Discerning Thrifter: Acquiring Bespoke & Tailored Vintage",
      description: "An essential guide to building a superior wardrobe through strategic secondhand acquisition.",
      category: "Vintage",
      date: "January 30, 2023",
      readingTime: "8–10 minutes",
      image: "/placeholder.svg?height=500&width=400",
      href: "/editorial/discerning-thrifter",
    },
    {
      id: "essential-12",
      title: "The Essential 12: The NYChe's Definitive Manhattan Capsule",
      description: "A framework for intentional dressing that works from Canal to Columbus Circle.",
      category: "Essentials",
      date: "January 12, 2023",
      readingTime: "6–8 minutes",
      image: "/placeholder.svg?height=500&width=400",
      href: "/editorial/essential-12",
    },
  ]

  const secondaryContent = [
    {
      id: "sample-sales",
      title: "The Tactician's Guide to NYC Sample Sales: Spring/Summer 2025",
      description: "A strategic blueprint for navigating New York's most rewarding shopping experiences.",
      category: "Shopping",
      date: "May 2, 2023",
      readingTime: "7–9 minutes",
      image: "/placeholder.svg?height=400&width=300",
      href: "/editorial/sample-sales",
    },
    {
      id: "vanishing-classics",
      title: "Vanishing Classics: 8 Menswear Elements Making Their Return in 2025",
      description: "A guide to the renaissance of traditional men's style elements that deserve your attention.",
      category: "Trends",
      date: "April 28, 2023",
      readingTime: "6–8 minutes",
      image: "/placeholder.svg?height=400&width=300",
      href: "/editorial/vanishing-classics",
    },
    {
      id: "tailoring-philosophy",
      title: "The Philosophy of Fit: Beyond Measurements",
      description: "Understanding the subtle interplay between garment and body that transcends numbers.",
      category: "Philosophy",
      date: "March 15, 2023",
      readingTime: "5–7 minutes",
      image: "/placeholder.svg?height=400&width=300",
      href: "/editorial/tailoring-philosophy",
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
          <h1 className="font-serif text-4xl font-medium tracking-tight mb-2">Editorial Showcase</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Curated insights on style, culture, and the NYC scene—presented with typographic refinement and visual
            hierarchy.
          </p>
        </div>

        {/* Primary Feature Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-medium mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Primary Feature Card */}
            <div className="md:col-span-8 md:row-span-2">
              <ContentCard
                key={featuredContent[0].id}
                title={featuredContent[0].title}
                description={featuredContent[0].description}
                image={featuredContent[0].image}
                category={featuredContent[0].category}
                date={featuredContent[0].date}
                readingTime={featuredContent[0].readingTime}
                href={featuredContent[0].href}
                aspectRatio="landscape"
                priority={true}
                variant="primary"
              />
            </div>

            {/* Secondary Feature Cards */}
            <div className="md:col-span-4">
              <ContentCard
                key={featuredContent[1].id}
                title={featuredContent[1].title}
                description={featuredContent[1].description}
                image={featuredContent[1].image}
                category={featuredContent[1].category}
                date={featuredContent[1].date}
                readingTime={featuredContent[1].readingTime}
                href={featuredContent[1].href}
                aspectRatio="portrait"
                variant="standard"
              />
            </div>

            <div className="md:col-span-4">
              <ContentCard
                key={featuredContent[2].id}
                title={featuredContent[2].title}
                description={featuredContent[2].description}
                image={featuredContent[2].image}
                category={featuredContent[2].category}
                date={featuredContent[2].date}
                readingTime={featuredContent[2].readingTime}
                href={featuredContent[2].href}
                aspectRatio="portrait"
                variant="standard"
              />
            </div>
          </div>
        </section>

        {/* Standard Articles Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-medium mb-6">Style Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardArticles.map((article) => (
              <ContentCard
                key={article.id}
                title={article.title}
                description={article.description}
                image={article.image}
                category={article.category}
                date={article.date}
                readingTime={article.readingTime}
                href={article.href}
                aspectRatio="landscape"
                variant="standard"
              />
            ))}
          </div>
        </section>

        {/* Secondary Content Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-medium mb-6">Quick Reads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryContent.map((article) => (
              <ContentCard
                key={article.id}
                title={article.title}
                description={article.description}
                image={article.image}
                category={article.category}
                date={article.date}
                readingTime={article.readingTime}
                href={article.href}
                aspectRatio="square"
                variant="secondary"
              />
            ))}
          </div>
        </section>

        {/* Design System Explanation */}
        <section className="mt-24 pt-12 border-t border-gray-200">
          <h2 className="font-serif text-2xl font-medium mb-6">Card Design System</h2>
          <div className="prose prose-lg max-w-3xl">
            <p>
              The NYChe's editorial card system maintains visual cohesion while providing clear hierarchy through three
              distinct variants:
            </p>

            <h3>Primary Feature Cards</h3>
            <p>
              Large image area (60% of card height), prominent typography, and deeper shadow depth for emphasis. These
              cards are designed to showcase our most significant content with visual impact.
            </p>

            <h3>Standard Article Cards</h3>
            <p>
              Balanced image-to-text ratio (50/50) with clear typographic hierarchy. These versatile cards form the
              backbone of our editorial presentation.
            </p>

            <h3>Secondary Content Cards</h3>
            <p>
              More compact format with smaller image area (40%) but maintaining typographic refinement. Perfect for
              supplementary content and quick reads.
            </p>

            <h3>Shared Design Elements</h3>
            <ul>
              <li>Subtle border treatment (0.25px warm gray)</li>
              <li>Consistent typography with proper ligatures and optical kerning</li>
              <li>Measured hover animations mimicking the weight of premium printed material</li>
              <li>Image treatment with subtle vignette and paper texture overlay</li>
              <li>Category labels in small caps with refined letter spacing</li>
              <li>Reading time indicators with proper en dashes (5–7 minutes)</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
