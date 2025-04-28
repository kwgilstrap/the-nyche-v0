import React from "react"
import HeroClient from "../components/HeroClient.tsx"
import FeaturedArticles from "../components/FeaturedArticles.tsx"
import NewsletterSignup from "../components/NewsletterSignup.tsx"
// @assistant:fix the import paths
export default function HomePage() {
  return (
    <main>
      <HeroClient />
      <FeaturedArticles />
      <NewsletterSignup />
    </main>
  )
}