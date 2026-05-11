import Link from "next/link";
import { notFound } from "next/navigation";
import { FaChevronRight, FaLock } from "react-icons/fa";
import { detailedDoctors } from "@/app/data/doctorsData";
import DoctorBookingWidget from "@/components/doctor-profile/DoctorBookingWidget";

export async function generateStaticParams() {
  return detailedDoctors.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DoctorProfilePage({ params }) {
  const { slug } = await params;
  const doctor = detailedDoctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10">
        <nav className="flex flex-wrap items-center gap-2 mb-10 text-sm font-bold">
          <Link href="/" className="text-slate-400 hover:text-[#00a63e] transition-colors">Home</Link>
          <FaChevronRight className="text-slate-300 text-[10px]" />
          <Link href="/our-doctors" className="text-slate-400 hover:text-[#00a63e] transition-colors">Our Doctors</Link>
          <FaChevronRight className="text-slate-300 text-[10px]" />
          <span className="text-slate-900">{doctor.name}</span>
        </nav>

        <DoctorBookingWidget doctor={doctor} />
      </div>

      {/* Trust Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 text-center px-4">
        <div className="flex items-center justify-center gap-2 text-slate-500 mb-2">
          <FaLock className="text-lg" />
          <span className="text-sm font-bold uppercase tracking-widest">Secure & HIPAA Compliant</span>
        </div>
        <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Your personal and medical information is encrypted and transmitted securely. We strictly adhere to HIPAA regulations and national healthcare standards to protect patient privacy and data integrity.
        </p>
      </footer>
    </main>
  );
}
