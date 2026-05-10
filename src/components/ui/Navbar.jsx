import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/logo/logo.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={logo} 
                alt="BRDC Logo" 
                width={80} 
                height={80} 
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-green-600 transition">Home</Link>
            <Link href="/about-us" className="hover:text-green-600 transition">About Us</Link>
            <Link href="/services" className="hover:text-green-600 transition">Our Services</Link>
            <Link href="/our-doctors" className="hover:text-green-600 transition">Our Doctors</Link>
            <Link href="/contact-us" className="hover:text-green-600 transition">Contact Us</Link>
            <Link href="/book-your-appointment" className="hover:text-green-600 transition">Book Your Appointment</Link>
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