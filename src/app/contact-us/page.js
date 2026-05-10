import ContactHero from "@/components/contact-us/ContactHero";
import ContactForm from "@/components/contact-us/ContactForm";
import ContactInfo from "@/components/contact-us/ContactInfo";
import MapSection from "@/components/contact-us/MapSection";

export const metadata = {
  title: "Contact Us & Find Location",
  description: "Get in touch with BRDC Malda. Find our phone numbers, location on Google Maps, and send us an inquiry directly through our website.",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50 pb-20">
      <ContactHero />

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="md:col-span-1">
            <ContactInfo />
          </div>

          {/* Form Area */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      <MapSection />
    </main>
  );
}