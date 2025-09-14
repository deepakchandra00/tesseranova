import { generateMetadata } from '@/components/shared/SEO';

export const metadata = generateMetadata({
  title: 'Who We Are - TesseraNova',
  description: 'Learn about TesseraNova - our mission, values, and commitment to delivering innovative technology solutions.',
  keywords: 'TesseraNova, technology company, software development, IT services, company values',
});

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions.',
    icon: '🚀',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do.',
    icon: '⭐',
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional integrity.',
    icon: '🤝',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnership.',
    icon: '👥',
  },
];

export default function WhoWeArePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We are a team of passionate technologists dedicated to transforming businesses through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Our Journey
            </h2>
            <div className="gray-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Founded in 2020
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Started with a vision to revolutionize technology solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Global Expansion
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Expanded our services to multiple countries and industries.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Innovation Hub
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Established as a center for technological innovation and excellence.
                  </p>
                </div>
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
              Join Us on Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Be part of our mission to transform businesses through technology.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 