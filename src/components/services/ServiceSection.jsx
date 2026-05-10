// src/components/services/ServiceSection.jsx
"use client";
import { motion } from "framer-motion";

export default function ServiceSection({ title, description, items }) {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-green-700 underline decoration-green-500 underline-offset-8 mb-6 uppercase tracking-tight">
          {title}
        </h3>
        <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base text-center">
          {description}
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {items.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02, borderColor: '#15803d' }}
            className="border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center text-center bg-white shadow-sm hover:shadow-md transition-all min-h-[110px]"
          >
            <span className="text-red-700 font-bold group-hover:text-green-700 transition-colors">
              {service}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}