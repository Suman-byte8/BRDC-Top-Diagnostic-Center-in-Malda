import Link from "next/link";

export default function ServicesCTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="bg-green-50 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-green-100">
        <h4 className="text-xl font-bold text-green-800">
          For more information of our services
        </h4>
        <Link href="/book-your-appointment" className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition-all shadow-lg hover:shadow-green-200 flex items-center gap-2">
          Book An Appointment with Us <span>→</span>
        </Link>
      </div>
    </div>
  );
}