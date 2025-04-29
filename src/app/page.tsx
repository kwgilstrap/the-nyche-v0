import React from "react"
import HeroClient from "../components/HeroClient"
import HomeMiniCards from "../components/HomeMiniCards"
import FeaturedArticles from "../components/FeaturedArticles"
import NewsletterSignup from "../components/NewsletterSignup"
import { getAllEditorialSlugs } from "../lib/getAllEditorialSlugs"
// @assistant:fix the three box layout// @assistant:fix the three box layout
export default async function HomePage() {
  const articles = await getAllEditorialSlugs()
  return (
    <main>
      <HeroClient />
      <Lookbook />
      <HomeMiniCards cards={[
        { title: "Editorial", description: "Curated insights on style, culture, and the NYC scene", href: "/editorial" },
        { title: "Services", description: "Personalized styling and wardrobe consultation", href: "/services" },
        { title: "Moodboard", description: "Visual inspirations that define our aesthetic", href: "/moodboard" }
      ]} />
      <FeaturedArticles articles={articles} />
      <NewsletterSignup />
    </main>
  )
}