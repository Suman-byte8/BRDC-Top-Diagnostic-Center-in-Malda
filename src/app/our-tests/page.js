import TestList from '@/components/tests/TestList';

export const metadata = {
  title: 'Our Tests | Diagnostic Services',
  description: 'Explore the wide range of diagnostic tests available at BRDC, including Pathology, Radiology, Cardiology, Neurology, and more.',
};

export default function OurTestsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our <span className="text-green-600">Diagnostic Tests</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive, accurate, and state-of-the-art diagnostic services to support your health and well-being.
          </p>
        </div>
        
        <TestList />
      </div>
    </div>
  );
}
