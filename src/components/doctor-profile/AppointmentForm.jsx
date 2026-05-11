"use client";
import { useState } from "react";
import { FaCalendarAlt, FaClock, FaCheckCircle, FaChevronRight } from "react-icons/fa";

export default function AppointmentForm({ doctor }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    location: doctor.locations[0]?.id || "",
    reason: "",
    concerns: [],
    previousSurgery: "no"
  });

  const handleCheckbox = (concern) => {
    setFormData(prev => ({
      ...prev,
      concerns: prev.concerns.includes(concern) 
        ? prev.concerns.filter(c => c !== concern)
        : [...prev.concerns, concern]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "917029243525";
    const text = `*Appointment Request for ${doctor.name}*%0A%0A*Patient:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Location:* ${formData.location}%0A*Reason:* ${formData.reason}%0A*Concerns:* ${formData.concerns.join(", ")}%0A*Previous Surgery:* ${formData.previousSurgery}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Schedule Your Appointment</h3>
        <p className="text-sm text-slate-500 font-medium">Please fill the form below. Doctor availability will be confirmed via WhatsApp.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h4 className="text-md font-bold text-slate-900 flex items-center gap-2">
             <span className="w-1.5 h-4 bg-[#00a63e] rounded-full opacity-60" /> Personal Info
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-600">Full Name</label>
              <input 
                required
                className="w-full rounded-xl border-slate-100 bg-slate-50/50 px-4 py-3 text-sm focus:border-[#00a63e] focus:ring-1 focus:ring-[#00a63e] outline-none transition-all focus:bg-white placeholder:text-slate-300 font-medium" 
                placeholder="John Doe" 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-600">Phone Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-100 bg-slate-100 text-slate-400 text-sm font-bold">
                  +91
                </span>
                <input 
                  required
                  className="flex-1 min-w-0 block w-full rounded-none rounded-r-xl border-slate-100 bg-slate-50/50 px-4 py-3 text-sm focus:border-[#00a63e] focus:ring-1 focus:ring-[#00a63e] outline-none transition-all focus:bg-white placeholder:text-slate-300 font-medium" 
                  placeholder="9876543210" 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 space-y-6">
          <h4 className="text-md font-bold text-slate-900 flex items-center gap-2">
             <span className="w-1.5 h-4 bg-[#00a63e] rounded-full opacity-60" /> Appointment Details
          </h4>
          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-600">Clinic Location</label>
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/30 flex items-center gap-3">
              <FaCheckCircle className="text-[#00a63e] opacity-70" />
              <span className="text-sm font-bold text-slate-700">B.R Diagnostic Center</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-600">Select Date</label>
              <div className="flex flex-col gap-3">
                {doctor.availableDates.map((date, idx) => (
                  <label 
                    key={idx}
                    className={`relative flex cursor-pointer rounded-xl border p-4 shadow-sm focus:outline-none transition-all ${
                      formData.date === date 
                        ? "border-[#00a63e] ring-1 ring-[#00a63e] bg-[#00a63e]/5" 
                        : "border-slate-100 bg-slate-50/50 hover:border-[#00a63e]/40"
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="date" 
                      className="sr-only" 
                      value={date}
                      checked={formData.date === date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      required
                    />
                    <span className="flex flex-1 items-center gap-3">
                      <FaCalendarAlt className={formData.date === date ? "text-[#00a63e]" : "text-slate-400"} />
                      <span className={`block text-sm font-bold ${formData.date === date ? 'text-[#00a63e]' : 'text-slate-700'}`}>
                        {date}
                      </span>
                    </span>
                    {formData.date === date && <FaCheckCircle className="text-[#00a63e] text-lg" />}
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-600">Preferred Time Slot</label>
              <div className="flex flex-col gap-3">
                {doctor.availableTimes?.map((time, idx) => (
                  <label 
                    key={idx}
                    className={`relative flex cursor-pointer rounded-xl border p-4 shadow-sm focus:outline-none transition-all ${
                      formData.time === time 
                        ? "border-[#00a63e] ring-1 ring-[#00a63e] bg-[#00a63e]/5" 
                        : "border-slate-100 bg-slate-50/50 hover:border-[#00a63e]/40"
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="time" 
                      className="sr-only" 
                      value={time}
                      checked={formData.time === time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      required
                    />
                    <span className="flex flex-1 items-center gap-3">
                      <FaClock className={formData.time === time ? "text-[#00a63e]" : "text-slate-400"} />
                      <span className={`block text-sm font-bold ${formData.time === time ? 'text-[#00a63e]' : 'text-slate-700'}`}>
                        {time}
                      </span>
                    </span>
                    {formData.time === time && <FaCheckCircle className="text-[#00a63e] text-lg" />}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 space-y-6">
          <h4 className="text-md font-bold text-slate-900 flex items-center gap-2">
             <span className="w-1.5 h-4 bg-[#00a63e] rounded-full opacity-60" /> Medical Info
          </h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-600">Reason for visit</label>
              <textarea 
                className="w-full rounded-xl border-slate-100 bg-slate-50/50 px-4 py-3 text-sm focus:border-[#00a63e] focus:ring-1 focus:ring-[#00a63e] outline-none transition-all focus:bg-white resize-none placeholder:text-slate-300 font-medium" 
                placeholder="Briefly describe your symptoms..." 
                rows="2"
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            className="w-full md:w-auto px-12 py-4 bg-[#00a63e] text-white rounded-2xl font-bold text-lg hover:bg-[#008d35] transition-all shadow-md hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            Confirm via WhatsApp <FaChevronRight className="text-sm opacity-40" />
          </button>
        </div>
      </form>
    </div>
  );
}

