import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="w-20 h-20 bg-white rounded-full mb-6 flex items-center justify-center text-black font-bold">LOGO</div>
          <p className="text-sm leading-relaxed">
            Welcome to BRDC Diagnostic Center, where precision meets care to provide you with the most accurate and comprehensive medical diagnostics available.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-green-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-500">About Us</Link></li>
            <li><Link href="/services" className="hover:text-green-500">Services</Link></li>
            <li><Link href="/contact" className="hover:text-green-500">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Departments</h4>
          <ul className="space-y-2 text-sm">
            <li>General Physician</li>
            <li>Urologists</li>
            <li>Cardiologists</li>
            <li>Pediatricians</li>
            <li>Gynecologists</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Get In Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <span>📍</span> 3 No Govt Colony, Malda - 732101, West Bengal, India
            </li>
            <li className="flex gap-3 items-center">
              <span>📞</span> 03512 - 258774 / 258743
            </li>
            <li className="flex gap-3 items-center">
              <span>✉️</span> brdc.pc@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs tracking-widest uppercase">
        © All Rights Reserved BRDC | Powered by <span className="text-white font-bold">STM</span>
      </div>
    </footer>
  );
}