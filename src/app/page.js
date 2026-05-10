import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeatureSection from "@/components/home/FeatureSection";
import { featuresData } from "@/app/data/homeData";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      
      {featuresData.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          desc={feature.desc}
          imgPos={index % 2 === 0 ? "right" : "left"}
          btnText={feature.btnText}
          imgId={feature.imgId}
          imgSrc={feature.imgSrc}
        />
      ))}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center pb-2 border-b-2 border-green-600 inline-block">
            Why Choose BRDC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "100% Accuracy", icon: "🎯", text: "Advanced technology ensures your reports are precise and reliable." },
              { title: "Fast Delivery", icon: "⚡", text: "Get your diagnostic reports delivered quickly, often on the same day." },
              { title: "Expert Care", icon: "👨‍⚕️", text: "Compassionate staff and expert doctors dedicated to your health journey." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}