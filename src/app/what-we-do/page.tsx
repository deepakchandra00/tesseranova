import { generateMetadata } from '@/components/shared/SEO';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'What We Do - TesseraNova',
  description: 'Discover TesseraNova\'s comprehensive range of technology services and solutions.',
  keywords: 'technology services, software development, IT solutions, digital transformation, TesseraNova services',
});

const services = [
  {
    title: 'Custom Web Development',
    description: 'Tailored web solutions using modern technologies.',
    link: '/services/custom-web-development',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications.',
    link: '/services/mobile-app-development',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions.',
    link: '/services/ui-ux-design',
    icon: '🎨',
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end development solutions.',
    link: '/services/full-stack-development',
    icon: '💻',
  },
  {
    title: 'eCommerce Development',
    description: 'Powerful e-commerce platforms.',
    link: '/services/ecommerce-development',
    icon: '🛍️',
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing services.',
    link: '/services/digital-marketing',
    icon: '📈',
  },
];

const expertise = [
  {
    title: 'Technology Stack',
    items: [
      'React & Angular',
      'Node.js & Python',
      'PHP & Laravel',
      '.NET & Java',
      'Mobile Technologies',
    ],
  },
  {
    title: 'Industries',
    items: [
      'Healthcare',
      'Fintech',
      'Transportation',
      'E-commerce',
      'Enterprise',
    ],
  },
  {
    title: 'Methodologies',
    items: [
      'Agile Development',
      'DevOps',
      'CI/CD',
      'Test-Driven Development',
      'Cloud Architecture',
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              What We Do
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We deliver comprehensive technology solutions to help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="block p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <ul className="gray-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Discovery
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Understanding your needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Planning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating the roadmap
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building your solution
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Delivery
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Launching and support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let&apos;s discuss how we can help you achieve your goals.
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
  );
} 