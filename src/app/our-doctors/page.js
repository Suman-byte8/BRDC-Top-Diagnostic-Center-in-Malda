import DoctorsHero from "@/components/our-doctors/DoctorsHero";
import DoctorCard from "@/components/our-doctors/DoctorCard";
import { doctorsData } from "@/app/data/doctorsData";

export const metadata = {
  title: "Our Specialized Doctors",
  description: "Consult with highly experienced medical professionals in Malda. Our team includes Gynecologists, Surgeons, Cardiologists, Pediatricians, and more at BRDC.",
};

export default function DoctorsPage() {
  return (
    <main className="bg-white pb-20">
      <DoctorsHero />

      <div className="max-w-7xl mx-auto px-4 space-y-16 mt-10">
        {doctorsData.map((section, idx) => (
          <div key={idx}>
            {/* Category Header */}
            <h3 className="text-xl font-bold text-green-700 mb-10 border-b-2 border-green-200 inline-block pb-1">
              {section.category}
            </h3>

            {/* Grid for Doctors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {section.doctors.map((doc, dIdx) => (
                <DoctorCard
                  key={dIdx}
                  name={doc.name}
                  info={doc.info}
                  timing={doc.timing}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Book Appointment CTA Section */}
      <div className="mt-20 bg-green-50 py-10 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-green-100">
        <h3 className="text-xl font-semibold text-green-800">
          Begin Your Medical Journey with BRDC
        </h3>
        <button className="bg-green-700 text-white px-8 py-3 rounded-md font-bold hover:bg-green-800 transition shadow-md">
          Book Your Appointment
        </button>
      </div>
    </main>
  );
}
