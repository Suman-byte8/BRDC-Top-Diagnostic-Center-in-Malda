"use client";
import Image from 'next/image';
import heroImg from '@/app/assets/doctors/our-doctor-hero.png';

export default function DoctorsHero() {
  return (
    <section className="relative w-full py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[21/9] md:aspect-[4/1] overflow-hidden rounded-3xl shadow-lg">
          <Image 
            src={heroImg} 
            alt="Our Doctors Banner" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 border-b-2 border-red-400 inline-block pb-1">
            Experienced Professionals Dedicated to Your Health
          </h2>
        </div>
      </div>
    </section>
  );
}