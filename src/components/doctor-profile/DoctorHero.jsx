"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { MdWorkHistory, MdMilitaryTech } from "react-icons/md";

export default function DoctorHero({ doctor }) {
  return (
    <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-slate-100 bg-cover bg-center shrink-0 border-2 border-[#00a63e] shadow-lg" 
        style={{ backgroundImage: `url('${doctor.image}')` }}
      />
      <div className="flex flex-col justify-center flex-1">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase leading-tight">
            {doctor.name}
          </h1>
          {doctor.verified && (
            <FaCheckCircle className="text-[#00a63e] text-xl mt-1" title="Medical Registration Verified" />
          )}
        </div>
        <p className="text-lg text-[#00a63e] mb-6 font-semibold tracking-wider uppercase">
          {doctor.specialty}
        </p>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-6">
          {doctor.degrees.map((degree, idx) => (
            <span key={idx} className="px-3 py-1 bg-[#00a63e]/5 text-[#00a63e] rounded-full text-[10px] font-bold border border-[#00a63e]/10 uppercase tracking-tight">
              {degree}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">
          <div className="flex items-center gap-2.5 text-slate-500 text-sm font-medium">
            <MdWorkHistory className="text-[#00a63e] text-xl opacity-80" />
            <span>{doctor.experience}</span>
          </div>
          {doctor.extra && (
            <div className="flex items-center gap-2.5 text-slate-500 text-sm font-medium">
              <MdMilitaryTech className="text-[#00a63e] text-xl opacity-80" />
              <span>{doctor.extra}</span>
            </div>
          )}
        </div>
      </div>
    </section>

  );
}

