import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "personal-styling",
      title: "Personal Styling",
      description:
        "One-on-one consultation to refine your personal style and create a cohesive wardrobe that reflects your identity.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Style assessment and profile creation",
        "Personalized color palette development",
        "Wardrobe audit and organization",
        "Shopping assistance and recommendations",
      ],
    },
    {
      id: "wardrobe-curation",
      title: "Wardrobe Curation",
      description:
        "Comprehensive evaluation and restructuring of your existing wardrobe to maximize versatility and expression.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Closet inventory and analysis",
        "Strategic elimination of redundant pieces",
        "Outfit creation and documentation",
        "Seasonal transition planning",
      ],
    },
    {
      id: "event-styling",
      title: "Event Styling",
      description:
        "Specialized styling services for important occasions, ensuring you make the right impression when it matters most.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Occasion-appropriate outfit selection",
        "Accessory coordination",
        "Grooming and presentation advice",
        "Day-of styling assistance",
      ],
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
          <h1 className="text-4xl font-bold tracking-tight mb-2">Services</h1>
          <p className="text-lg text-gray-600">Elevate your personal style with our bespoke services</p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
