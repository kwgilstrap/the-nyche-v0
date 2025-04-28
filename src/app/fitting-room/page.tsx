import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FittingRoomPage() {
  const interactiveTools = [
    {
      id: "style-quiz",
      title: "Style Profile Quiz",
      description: "Discover your personal style archetype through our interactive assessment.",
      image: "/placeholder.svg?height=400&width=600",
      cta: "Take the Quiz",
    },
    {
      id: "virtual-fitting",
      title: "Virtual Fitting",
      description: "Try on curated looks virtually and see how they complement your appearance.",
      image: "/placeholder.svg?height=400&width=600",
      cta: "Start Fitting",
    },
    {
      id: "seasonal-planner",
      title: "Seasonal Wardrobe Planner",
      description: "Plan your wardrobe transitions with our interactive seasonal guide.",
      image: "/placeholder.svg?height=400&width=600",
      cta: "Create Plan",
    },
  ]

  return (
    <main>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-sm hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Fitting Room</h1>
          <p className="text-lg text-gray-600">Interactive experiences to refine your personal style</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interactiveTools.map((tool) => (
            <div key={tool.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-[220px] bg-gray-100 overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <button className="w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                  {tool.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Book a Personal Consultation</h2>
          <p className="text-gray-600 mb-6">
            For a more personalized experience, schedule a one-on-one consultation with our style experts.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                What are you looking for?
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300"
              >
                Request Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
