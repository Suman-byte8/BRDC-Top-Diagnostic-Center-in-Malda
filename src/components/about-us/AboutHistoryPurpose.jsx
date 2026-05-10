import Image from "next/image";
import { aboutHistoryPurposeData } from "@/app/data/aboutData";

export default function AboutHistoryPurpose() {
  return (
    <div className="space-y-20 py-10">
      {aboutHistoryPurposeData.map((item, idx) => (
        <section key={idx} className={`max-w-7xl mx-auto px-4 flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
              <Image 
                src={item.imageSrc} 
                alt={item.title} 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-green-700 inline-block border-b-4 border-green-500 pb-1 mb-6">{item.title}</h2>
            <p className="text-gray-600 text-justify text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}