import Image from 'next/image';
import altMap from '../../data/alt-mapping.json';

const shots = [
  '/images/lookbook/tweed-and-raincoat.jpg',
  '/images/lookbook/hopsack-and-linen.jpg',
  '/images/lookbook/casual-tie-and-cap.jpg',
  '/images/lookbook/last-top-coat.jpg',
];

export default function Lookbook() {
  return (
    <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-4 my-16">
      {shots.map((src) => (
        <div key={src} className="overflow-hidden rounded-lg hover:scale-[1.02] transition">
          <Image
            src={src}
            alt={altMap[src] ?? 'Lookbook image'}
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </section>
  );
}