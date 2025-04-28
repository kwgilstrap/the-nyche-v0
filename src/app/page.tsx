import React from "react"
import HeroClient from "../components/HeroClient"
import FeaturedArticles from "../components/FeaturedArticles"
import NewsletterSignup from "../components/NewsletterSignup"
import { getAllEditorialSlugs } from "../lib/getAllEditorialSlugs"

export default async function HomePage() {
  const articles = await getAllEditorialSlugs();
  return (
    <main>
      <HeroClient />
      <FeaturedArticles articles={articles} />
      <NewsletterSignup />
    </main>
  )
}