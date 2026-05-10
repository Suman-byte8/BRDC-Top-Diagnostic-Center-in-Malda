import AppointmentForm from "@/components/appointment/AppointmentForm";

export const metadata = {
  title: "Book Your Appointment",
  description: "Schedule your diagnostic tests or doctor consultations online at BRDC Malda. Quick and easy booking via WhatsApp.",
};

export default function AppointmentPage() {
  return (
    <main className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-black text-green-700 uppercase tracking-tight">
          Secure Your <span className="text-green-500">Appointment</span>
        </h1>
        <div className="w-20 h-1 bg-red-500 mx-auto mt-4" />
      </div>

      <AppointmentForm />
      
      <p className="text-center text-gray-500 text-sm mt-10 max-w-lg mx-auto leading-relaxed">
        *After clicking the submit button, you will be redirected to WhatsApp to confirm your details with our desk. 
        Your data is processed securely as per our privacy policy.
      </p>
    </main>
  );
}