import React from "react"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

interface ArticleMeta {
  slug: string
  title: string
  date: string
  description: string
}

function getAllEditorialSlugs(): ArticleMeta[] {
  const dir = path.join(process.cwd(), "content/editorial")
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8")
    const { data } = matter(raw)
    return {
      slug: file.replace(".md", ""),
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
    }
  })
}

export default function FeaturedArticles() {
  const articles = getAllEditorialSlugs()

  return (
    <section id="featured-articles" className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-serif font-bold mb-2">Featured Articles</h2>
      <p className="text-gray-600 mb-8">
        Smart, stylish, and always intentional. Explore our latest editorial picks.
      </p>
      <div className="flex overflow-x-auto gap-6 py-6 snap-x snap-mandatory scrollbar-hide relative">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent"></div>
        {articles.slice(0, 9).map(({ slug, title, date, description }) => (
          <article
            key={slug}
            className="flex-shrink-0 w-80 p-6 border rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-white"
          >
            <Link href={`/editorial/${slug}`} className="block hover:underline">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 leading-snug hover:underline">{title}</h3>
            </Link>
            <time className="text-xs text-gray-400 uppercase tracking-wider mb-4 block">
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <p className="text-base text-gray-600 leading-relaxed">{description}</p>
          </article>
        ))}
        <Link href="/editorial" className="flex-shrink-0 w-80 p-6 border rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-black text-white flex flex-col justify-center items-center text-center">
          <span className="text-xl font-serif font-bold mb-2">View All Articles</span>
          <span className="text-sm uppercase tracking-widest">Explore More</span>
        </Link>
      </div>
    </section>
  )
}