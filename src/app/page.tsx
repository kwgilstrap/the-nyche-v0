import React from "react"
import HeroClient from "@/components/HeroClient"
import FeaturedArticles from "@/components/FeaturedArticles"
//@assistant: fix the import paths
export default function HomePage() {
  return (
    <main>
      <HeroClient />
      <FeaturedArticles />

      {/* NEWSLETTER */}
      <section className="bg-gray-50 py-12 px-6 max-w-2xl mx-auto text-center rounded-sm">
        <h3 className="text-2xl font-serif mb-2">Join Our Correspondence</h3>
        <p className="text-gray-600 mb-4">
          Receive curated insights on style, culture, and exclusive invitations to our events.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 border rounded-sm"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white uppercase rounded-sm hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  )
}