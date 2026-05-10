import Image from "next/image";
import { aboutWelcomeData } from "@/app/data/aboutData";

export default function AboutWelcome() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-700 inline-block border-b-4 border-green-500 pb-1">
            {aboutWelcomeData.title}
          </h2>
          <div className="text-gray-700 text-sm leading-relaxed space-y-4 text-justify">
            {aboutWelcomeData.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-[500px] overflow-hidden rounded-2xl shadow-xl">
            <Image 
              src={aboutWelcomeData.imageSrc} 
              alt={aboutWelcomeData.title} 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}