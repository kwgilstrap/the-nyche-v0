import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TypographyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-sm hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="mb-2">Typography System</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A sophisticated typographic system using a primary serif font for headlines and body copy, paired with a
            neutral sans serif for supporting elements.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="mb-6">Headings</h2>
          <div className="space-y-8 mb-8">
            <div>
              <h1>Heading Level 1</h1>
              <p className="text-sm text-gray-500 mt-2">
                Font: Playfair Display, Weight: 700, Size: 4xl-6xl, Tracking: -0.025em, Leading: extra-tight
              </p>
            </div>
            <div>
              <h2>Heading Level 2</h2>
              <p className="text-sm text-gray-500 mt-2">
                Font: Playfair Display, Weight: 600, Size: 3xl-4xl, Tracking: -0.0125em, Leading: tight
              </p>
            </div>
            <div>
              <h3>Heading Level 3</h3>
              <p className="text-sm text-gray-500 mt-2">
                Font: Playfair Display, Weight: 500, Size: 2xl-3xl, Tracking: -0.0125em, Leading: snug
              </p>
            </div>
            <div>
              <h4>Heading Level 4</h4>
              <p className="text-sm text-gray-500 mt-2">
                Font: Playfair Display, Weight: 500, Size: xl-2xl, Leading: snug
              </p>
            </div>
            <div>
              <h5>Heading Level 5</h5>
              <p className="text-sm text-gray-500 mt-2">
                Font: Playfair Display, Weight: 500, Size: lg-xl, Leading: snug
              </p>
            </div>
            <div>
              <h6>Heading Level 6</h6>
              <p className="text-sm text-gray-500 mt-2">
                Font: Playfair Display, Weight: 500, Size: base-lg, Leading: snug
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6">Body Text</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-4">Serif Body Text</h3>
              <article className="prose">
                <p className="font-serif">
                  This is an example of serif body text, set in Playfair Display. The line height is set to 1.8
                  (leading-article) for optimal readability. The maximum line length is limited to 75 characters to
                  ensure comfortable reading. Proper hyphenation is enabled to create more balanced text blocks and
                  avoid awkward spacing.
                </p>
                <p className="font-serif">
                  Typography is the art and technique of arranging type to make written language legible, readable, and
                  appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line
                  lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.
                </p>
              </article>
              <p className="text-sm text-gray-500 mt-4">
                Font: Playfair Display, Weight: 400, Size: base, Leading: 1.8, Max-width: 75ch, Hyphenation: auto
              </p>
            </div>

            <div>
              <h3 className="mb-4">Sans-Serif Body Text</h3>
              <article className="prose">
                <p className="font-sans">
                  This is an example of sans-serif body text, set in Inter. The line height is set to 1.5
                  (leading-normal) for good readability. The maximum line length is limited to 75 characters to ensure
                  comfortable reading. This font is particularly well-suited for interface elements and supporting text.
                </p>
                <p className="font-sans">
                  Typography is the art and technique of arranging type to make written language legible, readable, and
                  appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line
                  lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.
                </p>
              </article>
              <p className="text-sm text-gray-500 mt-4">
                Font: Inter, Weight: 400, Size: base, Leading: 1.5, Max-width: 75ch
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6">Supporting Text Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-4">Small Text & Captions</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-sans tracking-wide">
                    This is small text set in Inter with slightly increased letter spacing for better legibility at
                    small sizes. This style is ideal for captions, metadata, and supporting information.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Font: Inter, Weight: 400, Size: sm, Tracking: 0.01em</p>
                </div>
                <div>
                  <p className="caption">
                    This is a caption style, typically used for image descriptions or supplementary information. The
                    subtle increase in letter spacing improves readability at this smaller size.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Font: Inter, Weight: 400, Size: sm, Color: gray-600, Tracking: 0.01em
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4">Special Text Styles</h3>
              <div className="space-y-6">
                <div>
                  <p className="category">Editorial • Style • Culture</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Font: Inter, Weight: 500, Size: xs, Case: uppercase, Tracking: 0.1em
                  </p>
                </div>
                <div>
                  <blockquote>"Style is knowing who you are, what you want to say, and not giving a damn."</blockquote>
                  <p className="text-sm text-gray-500 mt-2">
                    Font: Playfair Display, Style: italic, Size: xl, Border-left: 4px
                  </p>
                </div>
                <div>
                  <p className="font-serif ligatures-all">
                    Typography with all ligatures: efficient, affluent, difficult
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Font: Playfair Display, Feature-settings: "liga", "calt", "dlig", "swsh"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6">Typographic Scale</h2>
          <div className="space-y-4">
            <div className="flex items-baseline">
              <span className="w-24 text-sm text-gray-500">text-xs</span>
              <span className="text-xs">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline">
              <span className="w-24 text-sm text-gray-500">text-sm</span>
              <span className="text-sm">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline">
              <span className="w-24 text-sm text-gray-500">text-base</span>
              <span className="text-base">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline">
              <span className="w-24 text-sm text-gray-500">text-lg</span>
              <span className="text-lg">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline">
              <span className="w-24 text-sm text-gray-500">text-xl</span>
              <span className="text-xl">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline">
              <span className="w-24 text-sm text-gray-500">text-2xl</span>
              <span className="text-2xl">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline">
              <span className="w-24 text-sm text-gray-500">text-3xl</span>
              <span className="text-3xl">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline">
              <span className="w-24 text-sm text-gray-500">text-4xl</span>
              <span className="text-4xl">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline">
              <span className="w-24 text-sm text-gray-500">text-5xl</span>
              <span className="text-5xl">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline">
              <span className="w-24 text-sm text-gray-500">text-6xl</span>
              <span className="text-6xl">The quick brown fox jumps over the lazy dog.</span>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6">Numeric Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-4">Tabular vs. Proportional</h3>
              <div className="space-y-4">
                <div>
                  <p className="tabular-nums">1234567890</p>
                  <p className="text-sm text-gray-500 mt-1">Tabular Numerals (fixed-width, for alignment)</p>
                </div>
                <div>
                  <p className="proportional-nums">1234567890</p>
                  <p className="text-sm text-gray-500 mt-1">Proportional Numerals (variable-width)</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Oldstyle vs. Lining</h3>
              <div className="space-y-4">
                <div>
                  <p className="oldstyle-nums">1234567890</p>
                  <p className="text-sm text-gray-500 mt-1">Oldstyle Numerals (varying heights)</p>
                </div>
                <div>
                  <p className="lining-nums">1234567890</p>
                  <p className="text-sm text-gray-500 mt-1">Lining Numerals (uniform height)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
