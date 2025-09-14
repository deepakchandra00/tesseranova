import { generateMetadata } from '@/components/shared/SEO';
import { JsonLd } from '@/components/shared/SEO';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';

export const metadata = generateMetadata({
  title: 'Fintech Industry Solutions - TesseraNova',
  description: 'Transform financial services with TesseraNova&apos;s innovative technology solutions. Digital Banking, Payment Processing, and Financial Analytics.',
  keywords: 'fintech solutions, digital banking, payment processing, financial technology, banking software, fintech development, financial analytics',
});

const solutions = [
  {
    title: 'Digital Banking',
    description: 'Modern banking platforms with seamless user experience and robust security.',
    icon: '🏦',
  },
  {
    title: 'Payment Processing',
    description: 'Secure and efficient payment solutions for businesses and consumers.',
    icon: '💳',
  },
  {
    title: 'Financial Analytics',
    description: 'Data-driven insights for better financial decision-making.',
    icon: '📊',
  },
  {
    title: 'Blockchain Solutions',
    description: 'Innovative blockchain technology for secure financial transactions.',
    icon: '⛓️',
  },
];

const features = [
  'Mobile Banking',
  'Payment Gateway',
  'Digital Wallets',
  'Fraud Detection',
  'Risk Management',
  'Investment Tools',
  'Loan Management',
  'Cryptocurrency',
  'Smart Contracts',
  'API Integration',
  'Cloud Security',
  'Compliance Tools',
  'Real-time Analytics',
  'Customer Portal',
  'Reporting Tools',
];

const benefits = [
  {
    title: 'Innovation',
    description: 'Stay ahead with cutting-edge fintech solutions.',
    icon: '💡',
  },
  {
    title: 'Security',
    description: 'Ensure robust security and compliance with financial regulations.',
    icon: '🔒',
  },
  {
    title: 'Efficiency',
    description: 'Streamline financial operations and reduce processing time.',
    icon: '⚡',
  },
  {
    title: 'Customer Experience',
    description: 'Enhance user experience with intuitive financial services.',
    icon: '😊',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fintech Industry Solutions',
  description: 'Transform financial services with TesseraNova\'s innovative technology solutions.',
  provider: {
    '@type': 'Organization',
    name: 'TesseraNova',
    url: 'https://tesseranova.com',
  },
  serviceType: 'Financial Technology Solutions',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fintech Solutions',
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

export default function FintechPage() {
  return (
    <>
      <JsonLd schema={schema} />
      <div className="bg-white dark:bg-gray-900">
        <HeroSection 
          title="Fintech Industry Solutions"
          description="Transform financial services with our innovative technology solutions."
          backgroundImage="/images/industries/fintech-hero.jpg"
        />

        {/* Solutions Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Our Fintech Solutions
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
                  Digital Banking Transformation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  How we helped a traditional bank modernize its services with a digital banking platform, increasing customer engagement by 50%.
                </p>
                <Link
                  href="/case-studies/digital-banking"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read Case Study →
                </Link>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Payment Solution Implementation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developing a secure payment processing system that reduced transaction time by 70% and improved security.
                </p>
                <Link
                  href="/case-studies/payment-solution"
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
                Ready to Transform Your Financial Services?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Let&apos;s discuss how our solutions can help you innovate and grow your financial business.
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