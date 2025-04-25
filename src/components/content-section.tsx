import { ContentCard } from "./content-card"

interface ContentItem {
  id: string
  title: string
  description: string
  image: string
  category?: string
  date?: string
  href: string
}

interface ContentSectionProps {
  title: string
  description?: string
  items: ContentItem[]
  columns?: 2 | 3 | 4
  aspectRatio?: "square" | "portrait" | "landscape"
}

export function ContentSection({
  title,
  description,
  items,
  columns = 3,
  aspectRatio = "portrait",
}: ContentSectionProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
          {description && <p className="mt-4 max-w-3xl text-lg text-gray-600">{description}</p>}
        </div>
        <div className={`grid grid-cols-1 gap-6 md:gap-8 ${gridCols}`}>
          {items.map((item, index) => (
            <ContentCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
              date={item.date}
              href={item.href}
              aspectRatio={aspectRatio}
              priority={index < 4}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
