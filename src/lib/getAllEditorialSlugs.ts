import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface EditorialMeta {
  slug: string
  title: string
  date: string
  description: string
}

export async function getAllEditorialSlugs(): Promise<EditorialMeta[]> {
  const editorialDir = path.join(process.cwd(), "src", "content", "editorial")
  const files = fs
    .readdirSync(editorialDir)
    .filter((file) => file.endsWith('.md'))

  const articles = files.map((file) => {
    const slug = file.replace(".md", "")
    const fullPath = path.join(editorialDir, file)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || "Unknown",
      description: data.description || "",
    }
  })

  return articles
}