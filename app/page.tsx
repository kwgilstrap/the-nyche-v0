import Header from "@/components/header"
import { ContentCard } from "@/components/content-card"

export default function Home() {
  const sections = [
    {
      id: "editorial",
      title: "Editorial",
      description: "Curated insights on style, culture, and the NYC scene",
      image: "/placeholder.svg?height=600&width=800",
      href: "/editorial",
    },
    {
      id: "services",
      title: "Services",
      description: "Elevate your personal style with our bespoke services",
      image: "/placeholder.svg?height=600&width=800",
      href: "/services",
    },
    {
      id: "moodboard",
      title: "Moodboard",
      description: "Visual inspirations that define our aesthetic",
      image: "/placeholder.svg?height=600&width=800",
      href: "/moodboard",
    },
    // Removed "Fitting Room" card as it's now prominently in the navigation
  ]

  const featuredArticles = [
    {
      id: "featured-1",
      title: "The Enduring Appeal of Monochrome Wardrobes",
      description: "Why limiting your palette might be the key to unlocking your personal style.",
      category: "Style",
      date: "August 12, 2023",
      readingTime: "5–7 minutes",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/monochrome-wardrobes",
    },
    {
      id: "featured-2",
      title: "Seasonal Transitions: Building a Year-Round Capsule",
      description: "Creating a wardrobe that adapts seamlessly through New York's distinct seasons.",
      category: "Style",
      date: "September 5, 2023",
      readingTime: "3–5 minutes",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/seasonal-transitions",
    },
    {
      id: "featured-3",
      title: "The New Downtown: Shifting Cultural Centers in NYC",
      description: "How creative communities are redefining neighborhood identities across the city.",
      category: "Scene",
      date: "October 18, 2023",
      readingTime: "8–10 minutes",
      image: "/placeholder.svg?height=600&width=400",
      href: "/editorial/new-downtown",
    },
    {
      id: "featured-4",
      title: "Textile Innovation: The Future of Sustainable Fabrics",
      description: "Exploring cutting-edge materials that are reshaping the fashion industry's environmental impact.",
      category: "Innovation",
      date: "November 2, 2023",
      readingTime: "6–8 minutes",
      image: "/placeholder.svg?height=500&width=500",
      href: "/editorial/textile-innovation",
    },
    {
      id: "featured-5",
      title: "The Art of the Capsule Collection",
      description: "How designers are distilling their vision into focused, limited-edition releases.",
      category: "Design",
      date: "November 15, 2023",
      readingTime: "4–6 minutes",
      image: "/placeholder.svg?height=400&width=600",
      href: "/editorial/capsule-collections",
    },
  ]

  return (
    <main>
      <Header />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl font-medium tracking-tight mb-8 md:text-4xl">Explore The NYChe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <ContentCard
                key={section.id}
                title={section.title}
                description={section.description}
                image={section.image}
                href={section.href}
                aspectRatio="landscape"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Featured Articles</h2>
            <p className="mt-4 text-lg text-gray-600">The latest from our editorial team</p>
          </div>

          {/* Asymmetrical grid layout for featured articles */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Lead article - spans ~55% of width */}
            <div className="md:col-span-7 md:row-span-2">
              <ContentCard
                key={featuredArticles[0].id}
                title={featuredArticles[0].title}
                description={featuredArticles[0].description}
                image={featuredArticles[0].image}
                category={featuredArticles[0].category}
                date={featuredArticles[0].date}
                readingTime={featuredArticles[0].readingTime}
                href={featuredArticles[0].href}
                aspectRatio="landscape"
                priority={true}
                variant="featured"
              />
            </div>

            {/* Secondary articles in varying layouts */}
            <div className="md:col-span-5">
              <ContentCard
                key={featuredArticles[1].id}
                title={featuredArticles[1].title}
                description={featuredArticles[1].description}
                image={featuredArticles[1].image}
                category={featuredArticles[1].category}
                date={featuredArticles[1].date}
                readingTime={featuredArticles[1].readingTime}
                href={featuredArticles[1].href}
                aspectRatio="portrait"
                variant="featured"
              />
            </div>

            <div className="md:col-span-5">
              <ContentCard
                key={featuredArticles[2].id}
                title={featuredArticles[2].title}
                description={featuredArticles[2].description}
                image={featuredArticles[2].image}
                category={featuredArticles[2].category}
                date={featuredArticles[2].date}
                readingTime={featuredArticles[2].readingTime}
                href={featuredArticles[2].href}
                aspectRatio="square"
                variant="featured"
              />
            </div>

            {/* Bottom row with two articles */}
            <div className="md:col-span-6">
              <ContentCard
                key={featuredArticles[3].id}
                title={featuredArticles[3].title}
                description={featuredArticles[3].description}
                image={featuredArticles[3].image}
                category={featuredArticles[3].category}
                date={featuredArticles[3].date}
                readingTime={featuredArticles[3].readingTime}
                href={featuredArticles[3].href}
                aspectRatio="landscape"
                variant="featured"
              />
            </div>

            <div className="md:col-span-6">
              <ContentCard
                key={featuredArticles[4].id}
                title={featuredArticles[4].title}
                description={featuredArticles[4].description}
                image={featuredArticles[4].image}
                category={featuredArticles[4].category}
                date={featuredArticles[4].date}
                readingTime={featuredArticles[4].readingTime}
                href={featuredArticles[4].href}
                aspectRatio="landscape"
                variant="featured"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
