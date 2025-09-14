import { generateMetadata } from '@/components/shared/SEO';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';

export const metadata = generateMetadata({
  title: 'About Us - TesseraNova',
  description: 'Learn about TesseraNova\'s journey, mission, and commitment to delivering exceptional technology solutions.',
  keywords: 'about TesseraNova, company history, technology company, software development company, IT solutions provider',
});

const achievements = [
  {
    number: '500+',
    label: 'Projects Completed',
    icon: '🎯',
  },
  {
    number: '200+',
    label: 'Happy Clients',
    icon: '😊',
  },
  {
    number: '50+',
    label: 'Team Members',
    icon: '👥',
  },
  {
    number: '10+',
    label: 'Years Experience',
    icon: '⭐',
  },
];

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'TesseraNova was established with a vision to transform businesses through technology.',
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Expanded operations to serve clients across multiple continents.',
  },
  {
    year: '2022',
    title: 'Innovation Hub',
    description: 'Launched our dedicated innovation and research center.',
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Received multiple awards for excellence in technology solutions.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection
        title="About TesseraNova"
        description="We are a global technology company dedicated to helping businesses succeed in the digital age."
        ctaText="Get Started"
        ctaLink="/contact"
        backgroundImage="Optional background image URL"
        showGradient={true}
      />

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                  {achievement.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
              To empower businesses with innovative technology solutions that drive growth,
              efficiency, and success in an ever-evolving digital landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the global leader in delivering transformative technology solutions
                  that shape the future of business.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Values
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Innovation and Excellence</li>
                  <li>• Client Success</li>
                  <li>• Integrity and Trust</li>
                  <li>• Continuous Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/careers"
                className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 