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
    <section id="featured-articles" className="py-16 px-6">
      <h2 className="text-4xl font-serif font-bold mb-2">Featured Articles</h2>
      <p className="text-gray-600 mb-8">
        Smart, stylish, and always intentional. Explore our latest editorial picks.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(({ slug, title, date, description }) => (
          <article
            key={slug}
            className="p-6 border rounded-sm shadow-sm hover:shadow-md transition"
          >
            <Link href={`/editorial/${slug}`} className="block hover:underline">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            </Link>
            <time className="text-sm text-gray-500 mb-2 block">
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <p className="text-lg text-gray-700">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}