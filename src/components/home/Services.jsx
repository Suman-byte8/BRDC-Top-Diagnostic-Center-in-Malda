export default function Services() {
  const services = [
    {
      title: "OPD Services",
      desc: "BR Multispecialty Clinic in BRDC is designed to provide patients with access to medical consultations, diagnostic tests, and treatment for a range of medical conditions. Our clinic is staffed by experienced doctors and healthcare professionals who work together to provide comprehensive, convenient, and cost-effective care.",
      icon: "🏥",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Diagnostic Services",
      desc: "We offer a comprehensive range of diagnostic services using state-of-the-art technology. Our qualified specialists provide accurate and timely results, interpreting tests to deliver precise diagnoses in a comfortable environment, empowering patients to make informed health decisions.",
      icon: "🔬",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Medicine Services",
      desc: "Our fully-stocked on-site medicine store provides the convenience of purchasing medications immediately after your consultation. We offer a wide range of prescription and over-the-counter drugs, with knowledgeable pharmacists available to provide expert guidance.",
      icon: "💊",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Services We <span className="text-green-600">Offer</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Providing comprehensive healthcare solutions with precision, care, and convenience for all our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-pretty mb-6">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
