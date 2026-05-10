"use client";
import React from "react";
import { privacyContent } from "@/app/data/privacyData";

export default function PrivacySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="border-b-2 border-green-600 pb-8 mb-12">
          <h1 className="text-4xl font-black text-green-800 mb-4">{privacyContent.title}</h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            {privacyContent.intro}
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-12">
          {privacyContent.sections.map((section, idx) => (
            <div key={idx} className="group">
              <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-red-500 rounded-full block" />
                {section.heading}
              </h2>

              {section.content && (
                <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
              )}

              {/* Handle Subsections (if any) */}
              {section.subsections?.map((sub, sIdx) => (
                <div key={sIdx} className="ml-5 mt-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 underline decoration-green-300">
                    {sub.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{sub.content}</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-600">
                    {sub.list.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Handle main section lists */}
              {section.list && !section.subsections && (
                <ul className="list-disc ml-11 space-y-3 text-gray-600">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="mt-4 text-gray-700 font-medium">{section.footer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info Footer */}
        <div className="mt-20 p-8 bg-green-50 rounded-2xl border-l-8 border-green-600">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 font-bold mb-2">{privacyContent.contact.name}</p>
          <div className="space-y-1 text-gray-600">
            <p>Email: <a href={`mailto:${privacyContent.contact.email}`} className="text-green-700 hover:underline">{privacyContent.contact.email}</a></p>
            <p>Phone: {privacyContent.contact.phones.join(" / ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}