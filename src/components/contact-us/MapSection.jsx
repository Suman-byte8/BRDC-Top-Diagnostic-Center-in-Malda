import { contactInfo } from "@/app/data/contactData";

export default function MapSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[450px]">
        <iframe 
          src={contactInfo.mapUrl}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="BRDC Google Map"
        ></iframe>
      </div>
    </div>
  );
}
