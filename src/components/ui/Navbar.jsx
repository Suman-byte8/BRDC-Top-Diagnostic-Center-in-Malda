import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs text-center p-1">
              BRDC LOGO
            </div>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-green-600 transition">Home</Link>
            <Link href="/about" className="hover:text-green-600 transition">About Us</Link>
            <Link href="/services" className="hover:text-green-600 transition">Services</Link>
            <Link href="/doctors" className="hover:text-green-600 transition">Our Doctors</Link>
            <Link href="/contact" className="hover:text-green-600 transition">Contact Us</Link>
          </div>
          <div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition shadow-lg">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}