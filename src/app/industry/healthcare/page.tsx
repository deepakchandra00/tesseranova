import { generateMetadata } from '@/components/shared/SEO';
import { JsonLd } from '@/components/shared/SEO';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';

export const metadata = generateMetadata({
  title: 'Healthcare Industry Solutions - TesseraNova',
  description: 'Transform healthcare delivery with TesseraNova&apos;s innovative technology solutions. Digital Health, Patient Care, and Healthcare Analytics.',
  keywords: 'healthcare solutions, digital health, patient care, healthcare technology, medical software, healthcare development, healthcare analytics',
});

const solutions = [
  {
    title: 'Electronic Health Records',
    description: 'Comprehensive EHR systems for efficient patient data management and care coordination.',
    icon: '📋',
  },
  {
    title: 'Telemedicine',
    description: 'Secure and reliable virtual healthcare delivery platforms.',
    icon: '👨‍⚕️',
  },
  {
    title: 'Healthcare Analytics',
    description: 'Data-driven insights for improved patient outcomes and operational efficiency.',
    icon: '📊',
  },
  {
    title: 'Patient Management',
    description: 'End-to-end patient care and engagement solutions.',
    icon: '👥',
  },
];

const features = [
  'EHR Integration',
  'Telehealth Platform',
  'Patient Portal',
  'Appointment Scheduling',
  'Medical Billing',
  'Prescription Management',
  'Lab Results',
  'Medical Imaging',
  'Health Analytics',
  'Mobile Apps',
  'Cloud Storage',
  'HIPAA Compliance',
  'Secure Messaging',
  'Insurance Integration',
  'Reporting Tools',
];

const benefits = [
  {
    title: 'Improved Care',
    description: 'Enhance patient care with integrated healthcare solutions.',
    icon: '❤️',
  },
  {
    title: 'Efficiency',
    description: 'Streamline healthcare operations and reduce administrative burden.',
    icon: '⚡',
  },
  {
    title: 'Compliance',
    description: 'Ensure HIPAA compliance and data security.',
    icon: '✅',
  },
  {
    title: 'Patient Experience',
    description: 'Improve patient engagement and satisfaction.',
    icon: '😊',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Industry Solutions',
  description: 'Transform healthcare delivery with TesseraNova\'s innovative technology solutions.',
  provider: {
    '@type': 'Organization',
    name: 'TesseraNova',
    url: 'https://tesseranova.com',
  },
  serviceType: 'Healthcare Technology Solutions',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Healthcare Solutions',
    itemListElement: solutions.map((solution) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: solution.title,
        description: solution.description,
      },
    })),
  },
};

export default function HealthcarePage() {
  return (
    <>
      <JsonLd schema={schema} />
      <div className="bg-white dark:bg-gray-900">
        <HeroSection
          title="Healthcare Industry Solutions"
          description="Transform healthcare delivery with our innovative technology solutions."
          backgroundImage="/images/industries/healthcare-hero.jpg"
        />

        {/* Solutions Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Our Healthcare Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Key Features
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Business Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Digital Health Transformation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  How we helped a hospital network implement a comprehensive EHR system, improving patient care by 40%.
                </p>
                <Link
                  href="/case-studies/digital-health"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read Case Study →
                </Link>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Telemedicine Implementation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Launching a telemedicine platform that increased patient access to care by 60% during the pandemic.
                </p>
                <Link
                  href="/case-studies/telemedicine"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Transform Your Healthcare Practice?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Let&apos;s discuss how our solutions can help you improve patient care and operational efficiency.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 