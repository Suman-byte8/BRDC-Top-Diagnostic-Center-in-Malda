import Image from "next/image";

export default function FeatureSection({ title, desc, imgPos = 'right', btnText = "Book Your Appointment", imgId, imgSrc }) {
  return (
    <section className="py-16 px-4 border-b border-gray-100">
      <div className={`max-w-7xl mx-auto flex flex-col ${imgPos === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-green-700 mb-4 pb-2 border-b-2 border-green-600 inline-block">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-justify">{desc}</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-green-700 transition">
            {btnText} <span>→</span>
          </button>
        </div>
        <div className="flex-1 w-full h-80 relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
           {imgSrc ? (
             <Image 
                src={imgSrc} 
                alt={title} 
                fill 
                className="object-cover"
                sizes="(max-w-7xl) 50vw, 100vw"
             />
           ) : (
             <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-mono text-sm border-2 border-dashed border-gray-300">
                {imgId ? `[Image: ${imgId}]` : 'Image Placeholder'}
             </div>
           )}
        </div>
      </div>
    </section>
  );
}