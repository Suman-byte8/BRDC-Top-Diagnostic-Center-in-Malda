"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "@/app/assets/services/our-services.png"

export default function ServicesHero() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black text-green-700 leading-tight">
            Our <br /> <span className="text-green-600">Services</span>
          </h1>
          {/* Decorative Hexagons (SVG) */}
          <div className="mt-8 opacity-20">
            <svg width="120" height="120" viewBox="0 0 100 100" className="text-green-500 fill-current">
              <path d="M25 5L75 5L100 50L75 95L25 95L0 50Z" />
            </svg>
          </div>
        </motion.div>

        {/* Right Image with Custom Clip Path */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full md:w-1/2 mt-10 md:mt-0 relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-50 aspect-video">
            <Image
              src={heroImg} 
              alt="Medical Equipment" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Background decorative element */}
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-green-100 rounded-full -z-10 blur-3xl opacity-50" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 border-b-2 border-red-400 inline-block pb-2">
          Comprehensive Diagnostics: Precise Results, Complete Support
        </h2>
      </div>
    </section>
  );
}