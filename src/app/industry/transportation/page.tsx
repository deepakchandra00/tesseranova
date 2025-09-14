import { generateMetadata } from '@/components/shared/SEO';
import { JsonLd } from '@/components/shared/SEO';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';

export const metadata = generateMetadata({
  title: 'Transportation Industry Solutions - TesseraNova',
  description: 'Transform transportation and logistics with TesseraNova&apos;s innovative technology solutions. Fleet Management, Route Optimization, and Transportation Analytics.',
  keywords: 'transportation solutions, fleet management, route optimization, logistics technology, transportation software, transportation development, transportation analytics',
});

const solutions = [
  {
    title: 'Fleet Management',
    description: 'Comprehensive fleet tracking, maintenance scheduling, and driver management solutions.',
    icon: '🚚',
  },
  {
    title: 'Route Optimization',
    description: 'AI-powered route planning and optimization for efficient delivery and logistics.',
    icon: '🗺️',
  },
  {
    title: 'Smart Transportation',
    description: 'IoT-enabled solutions for real-time monitoring and smart city integration.',
    icon: '🚦',
  },
  {
    title: 'Logistics Software',
    description: 'End-to-end logistics management with real-time tracking and analytics.',
    icon: '📦',
  },
];

const features = [
  'Real-time GPS Tracking',
  'Fleet Analytics',
  'Driver Management',
  'Maintenance Scheduling',
  'Fuel Management',
  'Route Optimization',
  'Delivery Management',
  'Inventory Tracking',
  'Smart Sensors',
  'Mobile Apps',
  'Cloud Integration',
  'API Integration',
  'Reporting Tools',
  'Compliance Management',
  'Customer Portal',
];

const benefits = [
  {
    title: 'Cost Reduction',
    description: 'Optimize operations and reduce fuel and maintenance costs.',
    icon: '💰',
  },
  {
    title: 'Efficiency',
    description: 'Streamline operations with automated processes and real-time insights.',
    icon: '⚡',
  },
  {
    title: 'Compliance',
    description: 'Ensure regulatory compliance with automated documentation and reporting.',
    icon: '✅',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Improve service quality with real-time tracking and communication.',
    icon: '😊',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transportation Industry Solutions',
  description: 'Transform your transportation business with TesseraNova\'s innovative technology solutions.',
  provider: {
    '@type': 'Organization',
    name: 'TesseraNova',
    url: 'https://tesseranova.com',
  },
  serviceType: 'Transportation Technology Solutions',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Transportation Solutions',
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

export default function TransportationPage() {
  return (
    <>
      <JsonLd schema={schema} />
      <div className="bg-white dark:bg-gray-900">
        <HeroSection
          title="Transportation Industry Solutions"
          description="Transform transportation and logistics with our innovative technology solutions."
          backgroundImage="/images/industries/transportation-hero.jpg"
        />

        {/* Solutions Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Our Transportation Solutions
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
                  Fleet Management Transformation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  How we helped a logistics company reduce operational costs by 30% through our fleet management solution.
                </p>
                <Link
                  href="/case-studies/fleet-management"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read Case Study →
                </Link>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Smart Transportation Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Implementing IoT solutions for a public transportation system to improve efficiency and passenger experience.
                </p>
                <Link
                  href="/case-studies/smart-transportation"
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
                Ready to Transform Your Transportation Business?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Let&apos;s discuss how our solutions can help you optimize your operations and drive growth.
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