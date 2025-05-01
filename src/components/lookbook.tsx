// src/components/lookbook.tsx
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import altMap from '../../data/alt-mapping.json'

export default function Lookbook() {
  // Build-time file list
  const shotFiles = fs
    .readdirSync(path.join(process.cwd(), 'public/images/lookbook'))
    .filter((f) => /\.(jpe?g|png)$/.test(f))

  return (
    <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-4 my-16">
      {shotFiles.map((filename) => {
        const src = `/images/lookbook/${filename}`
        return (
          <div key={src} className="overflow-hidden rounded-lg hover:scale-[1.02] transition">
            <Image
              src={src}
              alt={altMap[src] ?? 'Lookbook image'}
              width={400}
              height={400}
              className="object-cover object-top w-full h-full"
            />
          </div>
        )
      })}
    </section>
  )
}