"use client";
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { contactInfo } from "@/app/data/contactData";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Phone Numbers Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-green-600">
        <h4 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <FaPhoneAlt className="text-lg" /> Call Us for Enquiry
        </h4>
        <div className="space-y-4 text-gray-700 font-medium">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 bg-green-50 rounded-full flex-shrink-0 flex items-center justify-center text-green-600 mt-1">
              <FaPhoneAlt size={14} />
            </span>
            <div className="flex flex-col gap-1">
              {contactInfo.phones.map((phone, idx) => (
                <p key={idx}>{phone}</p>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-green-50 rounded-full flex-shrink-0 flex items-center justify-center text-green-600">
              <FaWhatsapp size={16} />
            </span>
            <p>+91 {contactInfo.whatsapp}</p>
          </div>
        </div>
      </div>

      {/* Social Media Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-red-500">
        <h4 className="text-xl font-bold text-red-600 mb-6">Follow Us</h4>
        <div className="flex gap-4">
          {contactInfo.socials.map((social, idx) => (
            <a 
              key={idx}
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${
                social.type === 'facebook' ? 'bg-blue-600' : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600'
              } text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition shadow-md`}
              title={social.name}
            >
              {social.type === 'facebook' ? <FaFacebookF size={18} /> : <FaInstagram size={20} />}
            </a>
          ))}
        </div>
      </div>

      {/* Address Card (Bonus) */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-500">
        <h4 className="text-xl font-bold text-blue-700 mb-4">Location</h4>
        <p className="text-gray-600 text-sm leading-relaxed italic">
          {contactInfo.address}
        </p>
      </div>
    </div>
  );
}
