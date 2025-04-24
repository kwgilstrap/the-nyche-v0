import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// This would come from your content management system or files
// Mock data for our articles - in a real app this would be fetched from an API or file system
const articleData = {
  "the-art-of-layering": {
    title: "The Art of Layering for NYC Winters",
    description: "How to stay stylish while battling the elements in the concrete jungle.",
    category: "Style",
    date: "January 15, 2023",
    readingTime: "8 minutes",
    content: `
      <h2>Strategic Layers for Urban Winters</h2>
      <p>When winter settles over Manhattan, the challenge isn't simply staying warm—it's remaining effortlessly sophisticated while navigating rapidly changing environments. From overheated subway platforms to frigid street corners, the modern urbanite requires a layering system that adapts as quickly as the city itself.</p>
      
      <p>The secret lies not in bulk, but in thoughtful composition. Begin with a foundation of fine merino wool or technical silk, materials that offer surprising warmth without visual weight. The middle layer should provide insulation while maintaining a clean silhouette—consider a cashmere quarter-zip or an ultra-thin down vest that disappears under outerwear.</p>
      
      <h2>The Outer Layer Philosophy</h2>
      <p>Your coat represents the most visible investment in your winter arsenal. While fashion capitals cycle through trends, New York's pragmatic elegance demands performance alongside aesthetics. The ideal winter coat balances several competing interests:</p>
      
      <ul>
        <li>Wind resistance without rigid structure</li>
        <li>Water repellency that doesn't compromise breathability</li>
        <li>Insulation that maintains a defined silhouette</li>
      </ul>
      
      <p>Consider the topcoat in wool-cashmere for milder days, transitioning to a technically-informed parka when temperatures demand serious intervention. The key is versatility without compromise—each piece should stand confident on its own while harmonizing with your existing wardrobe.</p>
      
      <h2>Accessories as Architecture</h2>
      <p>The finishing elements of your winter strategy deserve equal consideration. A well-chosen scarf introduces both textural interest and crucial warmth at the vulnerable neck junction where heat escapes most readily. Opt for cashmere in a muted tone that complements rather than competes with your outerwear.</p>
      
      <p>Gloves represent another opportunity for practical refinement. The ideal pair combines insulation with the tactile sensitivity required for urban life—consider leather with cashmere lining or technical materials that maintain smartphone compatibility.</p>
      
      <h2>The Bottom Line</h2>
      <p>Mastering winter layering is less about specific pieces than understanding the architecture of comfortable insulation. Each layer should serve a distinct purpose while maintaining a coherent visual narrative. When properly executed, your winter wardrobe becomes a versatile system rather than a collection of disconnected items.</p>
      
      <p>For personalized guidance on building your winter layering strategy, consider our Wardrobe Architecture consultation service.</p>
    `,
  },
  "downtown-gallery-openings": {
    title: "Downtown Gallery Openings: Spring 2023",
    description: "The must-see exhibitions and events in Manhattan's art scene this season.",
    category: "Scene",
    date: "March 3, 2023",
    readingTime: "10 minutes",
    content: `
      <h2>The Evolution of Downtown's Gallery Landscape</h2>
      <p>As the art world continues its post-pandemic recalibration, Manhattan's downtown gallery ecosystem has emerged with renewed focus and surprising geographic shifts. While Chelsea maintains its position as the established gallery district, the most compelling new voices are clustering in unexpected pockets throughout downtown.</p>
      
      <p>This spring season brings a particularly rich convergence of established names and emerging talents across a range of disciplines. Here, we curate the essential exhibitions deserving of your limited attention.</p>
      
      <h2>Essential Viewing: March-April</h2>
      <h3>Tribeca's New Vision</h3>
      <p>The recent migration of influential galleries to Tribeca has reached critical mass, cementing the neighborhood's status as the epicenter for serious collectors and viewers. Of particular note:</p>
      
      <ul>
        <li><strong>James Cohan Gallery</strong> (48 Walker St) - "Material Studies" - An exploration of textile-informed abstractions from three emerging artists working at the intersection of craft tradition and contemporary formalism.</li>
        <li><strong>Bortolami</strong> (39 Walker St) - "Constructed Space" - Ann Veronica Janssens transforms the gallery with her minimalist light installations, creating environments that challenge perceptual certainty.</li>
      </ul>
      
      <h3>Lower East Side Experimentation</h3>
      <p>While some marquee galleries have departed for Tribeca, the Lower East Side retains its position as the neighborhood most amenable to formal and conceptual risk-taking:</p>
      
      <ul>
        <li><strong>Miguel Abreu Gallery</strong> (88 Eldridge St) - "Systems of Perception" - Rey Akdogan's precise interventions examine how institutional architecture shapes viewing experiences.</li>
        <li><strong>Bodega</strong> (167 Rivington St) - "Vernacular Futures" - Group exhibition exploring how everyday objects become vessels for speculative thinking.</li>
      </ul>
      
      <h2>Opening Night Strategies</h2>
      <p>The experienced gallery visitor understands that timing is everything. For meaningful engagement with both artwork and gallerists, avoid opening receptions in favor of mid-week afternoon visits when spaces are less crowded. However, if the social aspect of openings appeals to your purposes, consider:</p>
      
      <ul>
        <li><strong>Thursday Circuit</strong>: Tribeca and Lower East Side galleries typically coordinate Thursday evening hours, allowing for efficient exploration of multiple exhibitions.</li>
        <li><strong>Saturday Density</strong>: Chelsea's Saturday afternoon scene offers the highest concentration of openings, though with correspondingly larger crowds.</li>
      </ul>
      
      <p>For personalized gallery tours tailored to your aesthetic interests, inquire about our Art Advisor services.</p>
    `,
  },
  "sarah-chen-interview": {
    title: "Interview: Designer Sarah Chen on Sustainable Fashion",
    description: "The rising star discusses her approach to ethical design and the future of the industry.",
    category: "Desk",
    date: "April 22, 2023",
    readingTime: "15 minutes",
    content: `
      <h2>The Quiet Revolutionary</h2>
      <p>In an industry often driven by spectacle, Sarah Chen has built her reputation through methodical refinement rather than seasonal reinvention. Her eponymous label, now in its fifth year, has become a case study in how principled design can gradually reshape market expectations.</p>
      
      <p>We met Chen at her Garment District atelier—a light-filled space where her team of six works with a focus that mirrors her collections' thoughtful restraint.</p>
      
      <h2>On Beginning With Ethics</h2>
      <p><strong>The NYChe:</strong> Your approach places sustainability at the foundation rather than as an added feature. How does this first-principles thinking affect your design process?</p>
      
      <p><strong>Sarah Chen:</strong> I don't separate aesthetics from ethics—they're completely integrated in my process. Every design decision begins with questions about material origin, production impact, and lifecycle. This actually becomes liberating rather than limiting because it forces innovation. When conventional solutions don't meet our standards, we have to develop new approaches.</p>
      
      <p>The industry's typical pattern is to design first and then retrofit sustainability where convenient. That approach will never create meaningful change because it preserves the extractive logic of the system. Starting with ethical boundaries actually leads to more original design outcomes.</p>
      
      <h2>On Material Innovation</h2>
      <p><strong>The NYChe:</strong> Your recent collections have featured some remarkable textile developments. Could you speak about your material research?</p>
      
      <p><strong>Sarah Chen:</strong> We're particularly focused on regenerative systems rather than simply less harmful ones. Take our new knit program—we're working with a cooperative in Vermont that's using regenerative grazing practices. Their merino farming actually improves soil health and carbon sequestration beyond what would occur if the land were left unused.</p>
      
      <p>The exciting development is connecting these agricultural practices with the urban manufacturing ecosystem. We're partnering with a Brooklyn-based knitting facility to create zero-waste garment programs. The full production chain operates within a 300-mile radius, which creates resilience and traceability.</p>
      
      <h2>On Industry Evolution</h2>
      <p><strong>The NYChe:</strong> What changes do you believe are most urgent for fashion to address its environmental impact?</p>
      
      <p><strong>Sarah Chen:</strong> The volume problem is central—we simply produce too many garments. Any meaningful solution must address the scale of production. This isn't just about materials or processes; it requires rethinking the business model itself.</p>
      
      <p>I'm interested in frameworks where growth isn't measured by unit volume but by durability of relationships—both with materials and customers. What if success meant selling fewer pieces that remain relevant and functional for much longer periods? This would require significant restructuring of how brands are valued and financed, but I believe it's inevitable if we're serious about sustainability.</p>
      
      <p>For consumers, the most powerful shift would be developing a more attuned relationship with their existing wardrobe. Learning to properly care for, repair, and style what you already own is the most immediate sustainability practice available to everyone.</p>
    `,
  },
  "90s-minimalism": {
    title: "The Return of 90s Minimalism in Modern Wardrobes",
    description: "How the stripped-back aesthetic is influencing today's fashion landscape.",
    category: "Style",
    date: "May 10, 2023",
    readingTime: "7 minutes",
    content: `
      <h2>The Pendulum Returns</h2>
      <p>Fashion's cyclical nature has brought us back to the refined restraint of 1990s minimalism—a welcome counterpoint to recent years of maximalist expression. This isn't merely nostalgic revival but a recalibration of core principles that feel particularly resonant in our current moment.</p>
      
      <p>The minimalist approach of the '90s emerged as a reaction to the excess of the previous decade, stripping away decorative elements to focus on proportion, material quality, and thoughtful construction. Today's iteration responds to similar cultural conditions: digital oversaturation, economic uncertainty, and growing environmental concerns all favor investment in less but better.</p>
      
      <h2>The New Essentials</h2>
      <p>Contemporary minimalism retains the clean lines and neutral palette of its '90s predecessor while incorporating subtle updates in proportion and fabrication. Key elements of this evolved aesthetic include:</p>
      
      <ul>
        <li><strong>Fluid Tailoring</strong> - Structured but not rigid, with natural shoulders and relaxed silhouettes that prioritize movement</li>
        <li><strong>Considered Neutrals</strong> - Moving beyond stark monochrome to embrace the full spectrum of natural tones</li>
        <li><strong>Material Focus</strong> - Privileging textural interest over pattern, with investment-grade fabrics that improve with age</li>
        <li><strong>Reduction Without Severity</strong> - Maintaining simplicity without the clinical detachment sometimes associated with '90s minimalism</li>
      </ul>
      
      <h2>The Reference Points</h2>
      <p>While contemporary practitioners bring fresh perspective, understanding the original minimalist movement provides valuable context. The influential work of designers like Jil Sander, early Prada, and Helmut Lang established principles that remain instructive:</p>
      
      <p>Jil Sander's precise color theory demonstrated how seemingly simple palettes could contain remarkable depth. Miuccia Prada elevated humble materials through superior construction. Helmut Lang balanced reduction with subtle subversion, creating tension that prevented minimalism from becoming formulaic.</p>
      
      <h2>Beyond Trend Cycles</h2>
      <p>What makes minimalism particularly relevant now is its potential to transcend seasonal churn. When constructed with quality materials and considered proportions, these garments exist outside of trend-driven obsolescence.</p>
      
      <p>The approach offers a framework for more intentional consumption—investing in pieces designed for longevity rather than momentary relevance. In this sense, minimalism becomes less an aesthetic choice than a philosophy of curation and care.</p>
      
      <p>For guidance on building an enduring minimalist wardrobe, explore our Wardrobe Foundation consultation services.</p>
    `,
  },
  "vintage-shops": {
    title: "Hidden Gems: NYC's Most Underrated Vintage Shops",
    description: "Discover the city's best-kept secrets for finding unique second-hand treasures.",
    category: "Scene",
    date: "June 5, 2023",
    readingTime: "9 minutes",
    content: `
      <h2>Beyond the Obvious: NYC's Secret Vintage Landscape</h2>
      <p>While Manhattan's established vintage destinations draw consistent crowds, the city's most compelling second-hand discoveries often happen in less trafficked establishments. The following destinations represent the thoughtfully curated alternatives to both mainstream consignment chains and overwhelming thrift warehouses.</p>
      
      <h2>Specialized Hunters: Category Experts</h2>
      
      <h3>Vintage Workwear: Workers Warehouse</h3>
      <p><strong>Location:</strong> 77 Delancey Street, Lower East Side<br />
      <strong>Specialty:</strong> American utilitarian garments (1940s-1980s)<br />
      <strong>Price Range:</strong> $$-$$$<br />
      <strong>Hidden Strength:</strong> Unparalleled selection of chore coats and selvedge denim from lesser-known regional American workwear manufacturers</p>
      
      <p>Unlike vintage shops that treat workwear as an aesthetic rather than functional category, Workers Warehouse approaches their curation with deep historical knowledge. Owner James Perez spent years documenting regional variations in American workwear manufacturing, allowing for precisely dated and located pieces.</p>
      
      <p>Visit Strategy: Their basement archive (accessible by appointment) holds museum-quality pieces available for purchase, including rare examples from defunct Pennsylvania and North Carolina factories.</p>
      
      <h3>Tailored Treasures: The Archive Room</h3>
      <p><strong>Location:</strong> 45 East 20th Street, Flatiron District<br />
      <strong>Specialty:</strong> European and American tailoring (1960s-1990s)<br />
      <strong>Price Range:</strong> $$$-$$$$<br />
      <strong>Hidden Strength:</strong> Immaculate condition suits and sportcoats from both known luxury houses and obscure European makers</p>
      
      <p>Operated by former fashion archivist Rebecca Lin, The Archive Room applies museum-level care to their rotating collection. Each piece undergoes professional cleaning and assessment before reaching the floor, ensuring investment-grade condition.</p>
      
      <p>Visit Strategy: The unmarked appointment-only space requires planning but rewards serious collectors with personalized attention and expert guidance.</p>
      
      <h2>Neighborhood Secret: The Outer Borough Advantage</h2>
      
      <h3>Time Capsule: Yesterday's News</h3>
      <p><strong>Location:</strong> 428 Court Street, Carroll Gardens, Brooklyn<br />
      <strong>Specialty:</strong> Eclectic mix with exceptional accessories and homewares<br />
      <strong>Price Range:</strong> $-$$$<br />
      <strong>Hidden Strength:</strong> Remarkably fair pricing even as neighborhood gentrification continues</p>
      
      <p>While maintaining the charm of a traditional thrift store, Yesterday's News benefits from decades of owner Michael Papas' selective sourcing. The shop receives less fashion industry traffic than Manhattan counterparts, meaning genuine discoveries remain possible even for casual browsers.</p>
      
      <p>Visit Strategy: The basement level houses a rotating "archive section" where higher-end pieces are displayed separately from the main floor's more accessible offerings.</p>
      
      <h2>The Measured Approach: Vintage Hunting Philosophy</h2>
      <p>Successful vintage exploration requires both patience and preparation. Rather than approaching second-hand shopping as either treasure hunt or sustainable alternative to fast fashion, consider it an opportunity to develop a more meaningful relationship with clothing's historical context.</p>
      
      <p>Before your next vintage expedition, consider these principles:</p>
      
      <ul>
        <li>Research construction details specific to your periods of interest</li>
        <li>Focus on material quality over brand recognition</li>
        <li>Develop relationships with proprietors whose aesthetic alignment matches yours</li>
        <li>Consider restoration costs when evaluating condition issues</li>
      </ul>
      
      <p>For personalized vintage sourcing assistance, inquire about our Archive Acquisition service.</p>
    `,
  },
  "psychology-of-dress": {
    title: "The Psychology of Dress: How Clothing Affects Perception",
    description: "Exploring the subtle ways your wardrobe choices influence how others see you.",
    category: "Desk",
    date: "July 18, 2023",
    readingTime: "11 minutes",
    content: `
      <h2>The Silent Conversation: Clothing as Communication</h2>
      <p>Every garment makes a statement, whether intentional or not. The psychology of dress examines how clothing choices create nonverbal communication that significantly impacts interpersonal dynamics across contexts.</p>
      
      <p>Recent research in embodied cognition suggests the relationship between clothing and perception works in both directions—affecting not only how others perceive us but how we perceive ourselves. This bidirectional influence creates opportunities for strategic wardrobe development that serves both external presentation and internal state.</p>
      
      <h2>The Perception Landscape: How Others Read Your Choices</h2>
      
      <h3>The Competence Dimension</h3>
      <p>Studies consistently demonstrate that clothing formality correlates directly with perceptions of competence, authority, and intelligence. However, this effect is highly context-dependent. What communicates competence in a financial services environment may suggest rigidity in creative fields.</p>
      
      <p>The key finding from recent research: perceived appropriateness for context matters more than absolute formality level. Clothing that demonstrates understanding of tacit environmental codes signals competence more effectively than generically formal attire.</p>
      
      <h3>The Warmth Dimension</h3>
      <p>While competence relates to perceived ability, warmth addresses perceived intent—whether we are seen as friendly, trustworthy, and approachable. Interestingly, color choices impact warmth perceptions more significantly than silhouette or formality.</p>
      
      <p>Research from the field of color psychology indicates that warm hues (especially softer variations) enhance perceived approachability, while textural elements that invite tactile engagement (brushed fabrics, natural materials) similarly increase warmth attribution.</p>
      
      <h2>The Self-Perception Effect: How Clothing Changes Internal Experience</h2>
      <p>Perhaps more surprising than external perception effects is how clothing choices alter our internal experience. The emerging field of enclothed cognition examines how garments influence the wearer's psychological processes.</p>
      
      <p>Landmark studies have demonstrated that wearing clothes with symbolic associations measurably affects performance and self-perception. Participants wearing lab coats described as "doctor's coats" showed enhanced attention and performance on careful tasks compared to identical coats described as "painter's coats"—suggesting we internalize the symbolic meaning associated with our clothing.</p>
      
      <h2>Strategic Applications: Intentional Wardrobe Development</h2>
      <p>Understanding these psychological dimensions allows for more intentional wardrobe development. Consider these strategic approaches:</p>
      
      <ul>
        <li><strong>Context Calibration</strong> - Develop wardrobes specific to the environments you navigate, demonstrating fluency in each setting's visual language</li>
        <li><strong>Balance Optimization</strong> - Identify your professional requirements along competence and warmth dimensions, then calibrate choices accordingly</li>
        <li><strong>Internal Alignment</strong> - Select pieces that symbolically represent how you wish to perceive yourself and your role</li>
      </ul>
      
      <p>For personalized guidance on developing a psychologically calibrated wardrobe strategy, explore our Perception Management consultation services.</p>
    `,
  },
  "manhattan-hierarchy": {
    title: "The Manhattan Hierarchy: A Curated Guide to NYC's Essential Tailors",
    description: "Navigating the Strata of New York's Most Capable Hands",
    category: "Style Guide",
    date: "April 15, 2023",
    readingTime: "12–15 minutes",
    // Content is already in the existing page
  },
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const article = articleData[slug]

  // If article doesn't exist, return 404
  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/editorial" className="inline-flex items-center text-sm hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Editorial
          </Link>
        </div>

        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="mb-4">
              <span className="category font-medium text-black">{article.category}</span>
              <span className="mx-2 text-gray-300">•</span>
              <time className="text-gray-500 text-xs tracking-wide">{article.date}</time>
              {article.readingTime && (
                <>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-500 text-xs tracking-wide">{article.readingTime}</span>
                </>
              )}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 ligatures-all">
              {article.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-serif italic ligatures-common">
              {article.description}
            </p>
          </header>

          <div 
            className="prose prose-lg prose-serif max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content || "" }}
          />
        </article>
      </div>
    </main>
  )
}