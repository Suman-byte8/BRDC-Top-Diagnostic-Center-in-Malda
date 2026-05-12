import Link from "next/link";

export default function AboutCTA() {
  return (
    <div className="bg-green-50 py-10 flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
      <h3 className="text-xl font-semibold text-green-800">Begin Your Medical Journey with BRDC</h3>
      <Link href="/book-your-appointment" className="bg-green-600 text-white px-8 py-3 rounded-md font-bold hover:bg-green-700 transition shadow-md">
        Book An Appointment
      </Link>
    </div>
  );
}