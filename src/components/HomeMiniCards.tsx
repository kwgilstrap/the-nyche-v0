"use client"

import Link from "next/link"

interface HomeMiniCardsProps {
  cards: {
    title: string
    description: string
    href: string
  }[]
}

export default function HomeMiniCards({ cards }: HomeMiniCardsProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Link 
            key={card.title}
            href={card.href}
            className="block p-6 border rounded-md hover:shadow-lg transition-all duration-300 bg-white"
          >
            <h3 className="text-2xl font-serif mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}