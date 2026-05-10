import ServicesHero from '@/components/services/ServicesHero';
import ServiceSection from '@/components/services/ServiceSection';
import ServicesCTA from '@/components/services/ServicesCTA';

// Import the dynamic data
import { opdData, diagnosticData } from '@/app/data/servicesData';

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <ServicesHero />
      
      {/* OPD Services Section */}
      <ServiceSection 
        title={opdData.title}
        description={opdData.description}
        items={opdData.items}
      />

      {/* Diagnostic Services Section */}
      <ServiceSection 
        title={diagnosticData.title}
        description={diagnosticData.description}
        items={diagnosticData.items}
      />

      <ServicesCTA />
    </main>
  );
}