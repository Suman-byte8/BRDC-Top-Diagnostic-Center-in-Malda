"use client";
import Link from "next/link";
import { FaCalendarCheck, FaMapMarkerAlt, FaShieldAlt, FaFlask } from "react-icons/fa";

export default function BookingSidebar({ doctor }) {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Booking Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <Link 
          href="/book-your-appointment"
          className="w-full py-4 bg-[#00a63e] text-white rounded-2xl font-bold text-lg hover:bg-[#008d35] transition-all shadow-md hover:-translate-y-1 flex items-center justify-center gap-3 mb-8"
        >
          <FaCalendarCheck />
          Book Now
        </Link>
        
        <div className="space-y-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Available At</p>
          <div className="group cursor-pointer">
            <div className="flex items-start gap-4 mb-1">
              <div className="w-10 h-10 rounded-xl bg-[#00a63e]/5 flex items-center justify-center shrink-0 group-hover:bg-[#00a63e] group-hover:text-white transition-all">
                 <FaMapMarkerAlt className="text-[#00a63e] opacity-70 group-hover:text-white" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-800 block group-hover:text-[#00a63e] transition-colors">B.R Diagnostic Center</span>
                <span className="text-xs text-slate-400 font-medium leading-tight">
                  Schedule an Appointment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Card */}
      <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100">
        <h4 className="font-bold mb-5 text-[10px] uppercase tracking-[0.2em] text-slate-300">Credentials & Trust</h4>
        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#00a63e]/5 flex items-center justify-center text-[#00a63e] opacity-70">
               <FaShieldAlt size={14} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Board Certified</p>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Specialized Practice</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#00a63e]/5 flex items-center justify-center text-[#00a63e] opacity-70">
               <FaFlask size={14} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Research Contributor</p>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Advanced Diagnostics</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
}
