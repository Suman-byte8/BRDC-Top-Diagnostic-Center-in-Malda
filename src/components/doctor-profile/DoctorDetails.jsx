"use client";
import AppointmentForm from "./AppointmentForm";
import { FaInfoCircle, FaStethoscope, FaMapMarkerAlt } from "react-icons/fa";

export default function DoctorDetails({ doctor }) {
  return (
    <div className="space-y-12 pb-20">
      {/* About Section */}
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <FaInfoCircle className="text-[#00a63e] opacity-80" /> About {doctor.name.split(' ').slice(-1)}
        </h3>
        <p className="text-slate-500 leading-relaxed text-base text-justify font-medium">
          {doctor.about}
        </p>
      </section>

      {/* Specializations Section */}
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50">
        <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <FaStethoscope className="text-[#00a63e] opacity-80" /> Specializations
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {doctor.specializations.map((spec, idx) => (
            <div key={idx} className="flex items-center gap-4 text-slate-500 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 font-semibold transition-all hover:bg-[#00a63e]/5 hover:border-[#00a63e]/20 group">
              <span className="w-2 h-2 bg-[#00a63e] rounded-full group-hover:scale-125 transition-transform opacity-60" />
              {spec}
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Section (Integrated) */}
      <section id="booking-section" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 scroll-mt-24">
        <AppointmentForm doctor={doctor} />
      </section>
    </div>

  );
}
