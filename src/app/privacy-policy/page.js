import PrivacySection from "@/components/privacy-policy/PrivacySection";

export const metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to understand how BRDC Malda collects, uses, and protects your personal and medical information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Simple Breadcrumb / Top spacing */}
      <div className="bg-green-700 py-12 text-center text-white">
        <h2 className="text-3xl font-bold uppercase tracking-widest">Legal Information</h2>
      </div>
      
      <PrivacySection
       />
      
    </main>
  );
}