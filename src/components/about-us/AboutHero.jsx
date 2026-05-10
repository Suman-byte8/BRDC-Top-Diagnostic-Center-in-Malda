import Image from "next/image";
import { aboutHeroData } from "@/app/data/aboutData";

export default function AboutHero() {
  return (
    <section className="relative bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-full md:w-1/2">
          {/* Green decorative background shape */}
          <div className="absolute -left-10 top-0 w-full h-full bg-green-600 -skew-x-12 z-0 rounded-3xl" />
          <div className="relative z-10 p-2 bg-white rounded-xl shadow-2xl overflow-hidden">
            <Image 
              src={aboutHeroData.imageSrc} 
              alt="BRDC Building" 
              width={800}
              height={600}
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <h1 className="text-7xl md:text-9xl font-black text-green-700 opacity-90 tracking-tighter">
            {aboutHeroData.title}
          </h1>
          {/* Hexagon pattern placeholder */}
          <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 100 100" className="text-green-600 fill-current">
               <path d="M50 5L89 27.5V72.5L50 95L11 72.5V27.5L50 5Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}