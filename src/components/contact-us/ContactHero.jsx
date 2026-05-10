"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// Importing the specific image you mentioned
import heroImg from "@/app/assets/contactUs/contact-us-hero.png";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-slate-900">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Contact Us Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Modern Gradient Overlay (Ensures text readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            Contact <span className="text-green-400">Us</span>
          </h1>
          <div className="w-24 h-2 bg-red-500 mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed">
            Have questions or need to book an appointment? We are here to help
            you. Reach out to our medical experts today for precise diagnostics
            and care.
          </p>
        </motion.div>
      </div>

      {/* Decorative side element matching your previous pages */}
      <div className="absolute top-0 right-0 h-full w-1/3 bg-green-600/10 skew-x-12 translate-x-20 z-10" />
    </section>
  );
}