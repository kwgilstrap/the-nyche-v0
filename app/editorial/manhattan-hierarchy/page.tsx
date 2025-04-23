import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ManhattanHierarchyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/editorial-showcase" className="inline-flex items-center text-sm hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Editorial
          </Link>
        </div>

        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="mb-4">
              <span className="category font-medium text-black">Style Guide</span>
              <span className="mx-2 text-gray-300">•</span>
              <time className="text-gray-500 text-xs tracking-wide">April 15, 2023</time>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-500 text-xs tracking-wide">12–15 minutes</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 ligatures-all">
              The Manhattan Hierarchy: A Curated Guide to NYC's Essential Tailors
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-serif italic ligatures-common">
              Navigating the Strata of New York's Most Capable Hands
            </p>
          </header>

          <div className="prose prose-lg prose-serif max-w-none">
            <h2>The Philosophy of Local Craftsmanship</h2>

            <p>
              In an era defined by algorithmic curation and mass production, the relationship between a man and his
              tailor remains one of the last bastions of true personal service. The right tailor doesn't merely alter
              clothing—they reshape fabric to harmonize with your physical reality, creating the rare alchemy where
              garment and wearer become a unified whole rather than disparate elements.
            </p>

            <p>
              This guide doesn't merely list tailors; it decodes Manhattan's tailoring ecosystem, arranging its
              practitioners into a coherent hierarchy based on capability, scope, and clientele. What follows is a
              taxonomy of craft, arranged for strategic deployment.
            </p>

            <h2>Tier I: The Master Craftsmen</h2>

            <p>
              These are not merely alteration specialists but true artisans whose understanding of garment construction
              approaches that of bespoke makers. Reserve these relationships for your most significant investments.
            </p>

            <h3>Leonard Logsdail</h3>
            <p>
              <strong>Location:</strong> 9 East 53rd Street, 4th Floor
              <br />
              <strong>Specialty:</strong> Savile Row-trained with unmatched understanding of traditional canvassed
              construction
              <br />
              <strong>Signature Capability:</strong> Complex restorations of English-cut garments, complete
              reconfiguration of proportion
              <br />
              <strong>Ideal For:</strong> Investment-grade suiting, vintage Savile Row restoration, complex
              reconstructions
              <br />
              <strong>Price Point:</strong> $$$$ (Basic trouser cuffs start at $75)
              <br />
              <strong>Access Notes:</strong> By appointment only; best approached with a specific project rather than
              routine alterations
            </p>

            <h3>Paolo Martorano</h3>
            <p>
              <strong>Location:</strong> 130 West 57th Street, 2A
              <br />
              <strong>Specialty:</strong> Delicate balance of classic and contemporary proportions
              <br />
              <strong>Signature Capability:</strong> Precision sleeve reduction preserving perfect roll and expression
              <br />
              <strong>Ideal For:</strong> High-end Italian tailoring, English country garments requiring modernization
              <br />
              <strong>Price Point:</strong> $$$$ (Jacket sleeve alterations from $150)
              <br />
              <strong>Access Notes:</strong> Often booked 2-3 weeks in advance; contact via email for expedited service
            </p>

            <h3>B. Tailor (Bespoke Service)</h3>
            <p>
              <strong>Location:</strong> 111 Canal Street
              <br />
              <strong>Specialty:</strong> Contemporary Asian-influenced approach to traditional tailoring
              <br />
              <strong>Signature Capability:</strong> Superior drape adjustment on unstructured garments
              <br />
              <strong>Ideal For:</strong> Contemporary minimalist pieces requiring precise proportional adjustment
              <br />
              <strong>Price Point:</strong> $$$ (Jacket waist suppression from $85)
              <br />
              <strong>Access Notes:</strong> Initial consultation required for first-time clients
            </p>

            {/* Additional content would continue here */}

            <h2>Final Consideration: The Economics of Excellence</h2>

            <p>
              Quality tailoring represents a fundamental paradox of value: while appearing expensive in isolation, it
              delivers extraordinary returns when measured against the extended functional lifespan of well-maintained
              garments.
            </p>

            <p>
              Consider the true economics: A $100 alteration that extends the viable life of a $1,000 garment by five
              years represents pennies per wear. Conversely, inadequate tailoring that abbreviates a garment's
              usefulness exacts a far greater cost than the nominal savings.
            </p>

            <p>
              For personalized guidance on developing your tailoring strategy, consider our Tailor Connect service,
              which provides a personal introduction to the craftsman best suited to your specific wardrobe needs.
            </p>

            <p className="font-serif italic text-lg">
              <em>The NYChe—because your image isn't everything, but it's the first thing.</em>
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
