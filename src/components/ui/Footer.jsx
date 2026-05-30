import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo/logo.png";
import socialBuzzLogo from "@/app/assets/logo/socialBuzzMedia.png";

import { contactInfo } from "@/app/data/contactData";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#f1fef6] to-[#fbf1f1] text-gray-600 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Image 
            src={logo} 
            alt="BRDC Logo" 
            width={120} 
            height={120} 
            className="h-20 w-auto mb-6 object-contain"
          />
          <p className="text-sm leading-relaxed">
            Welcome to BRDC Diagnostic Center, where precision meets care to provide you with the most accurate and comprehensive medical diagnostics available.
          </p>
        </div>
        
        <div>
          <h4 className="text-green-800 font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-green-600 transition-colors">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-green-600 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition-colors">Our Services</Link></li>
            <li><Link href="/our-doctors" className="hover:text-green-600 transition-colors">Our Doctors</Link></li>
            <li><Link href="/contact-us" className="hover:text-green-600 transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-green-600 transition-colors">Privacy Policy</Link></li>
            <li><a href="https://www.google.com/maps/place/Bisweswari+Roy+Diagnostic+%26+Polyclinic+Centre+(B.R.D.C.)/@24.9989966,88.1335925,17z/data=!4m8!3m7!1s0x39fafdc783945f57:0x9041d50993f3d14e!8m2!3d24.9989966!4d88.1361674!9m1!1b1!16s%2Fg%2F11c30_zmyw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">Feedback</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-green-800 font-bold text-lg mb-6">Departments</h4>
          <ul className="space-y-2 text-sm max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            <li><Link href="/services" className="hover:text-green-600 transition-colors">Gynecologists</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition-colors">General Surgeons</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition-colors">General Physicians</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition-colors">ENT Surgeons</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition-colors">Urologists</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition-colors">Rheumatologists</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition-colors">Gastroenterologists</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition-colors">Oncologists</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition-colors">Pediatricians</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition-colors">Orthopedic Surgeons</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-green-800 font-bold text-lg mb-6">Get In Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <span className="text-green-600">📍</span> {contactInfo.address}
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600">📞</span> 
              <div className="flex flex-col gap-1 font-medium text-gray-700">
                {contactInfo.phones.map((phone, idx) => (
                  <span key={idx}>{phone}</span>
                ))}
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-green-600">✉️</span> brdc.pc@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-widest uppercase font-bold text-gray-500">
        <p>© All Rights Reserved BRDC</p>
        <div className="flex items-center gap-2">
          <span>Powered by</span>
          <a href="https://socialbuzzmedia.in" target="_blank" rel="noopener noreferrer">
            <Image 
              src={socialBuzzLogo} 
              alt="Social Buzz Media" 
              width={100} 
              height={40} 
              className="h-6 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}