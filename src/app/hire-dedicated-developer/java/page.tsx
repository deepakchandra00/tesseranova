import HeroSection from '@/components/shared/HeroSection';
import { generateMetadata } from '@/components/shared/SEO';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Hire Dedicated Java Developer - TesseraNova',
  description: 'Hire experienced Java developers from TesseraNova for your enterprise application development needs. Get dedicated Java experts for your projects.',
  keywords: 'hire Java developer, dedicated Java developer, Java development team, Spring developer, Enterprise Java developer',
});

const expertise = [
  {
    title: 'Enterprise Java',
    description: 'Expertise in building scalable enterprise applications using Java EE and Spring.',
    icon: '🏢',
  },
  {
    title: 'Spring Framework',
    description: 'Proficient in Spring Boot, Spring MVC, and Spring Cloud for microservices.',
    icon: '🌱',
  },
  {
    title: 'Java Backend',
    description: 'Experience in developing robust backend systems and RESTful APIs.',
    icon: '⚙️',
  },
  {
    title: 'Cloud Solutions',
    description: 'Skilled in deploying Java applications on AWS, Azure, and GCP.',
    icon: '☁️',
  },
];

const skills = [
  'Java EE',
  'Spring Boot',
  'Spring MVC',
  'Spring Cloud',
  'Hibernate',
  'JPA',
  'Microservices',
  'RESTful APIs',
  'Maven',
  'Gradle',
  'JUnit',
  'Docker',
  'Kubernetes',
  'AWS',
  'CI/CD',
];

const benefits = [
  {
    title: 'Expert Team',
    description: 'Get access to our pool of certified Java developers with enterprise experience.',
    icon: '👥',
  },
  {
    title: 'Scalable Solutions',
    description: 'Build scalable and maintainable applications using best practices.',
    icon: '📈',
  },
  {
    title: 'Quality Code',
    description: 'Follow industry standards and best practices for clean, efficient code.',
    icon: '✅',
  },
  {
    title: 'Cost-Effective',
    description: 'Save on recruitment and training costs with our dedicated developers.',
    icon: '💰',
  },
];

export default function HireJavaDeveloperPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection
        title="Hire Dedicated Java Developer"
        description="Get access to our pool of expert Java developers for your enterprise application development needs. We provide skilled professionals who can help build robust, scalable, and secure Java applications."
        ctaText="Get Started"
        ctaLink="/contact"
        showGradient={true}
      />

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Java Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
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

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {skill}
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
            Why Choose Our Java Developers
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

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Hiring Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Requirements
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Share your project requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Selection
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose from our expert developers
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Onboarding
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Quick setup and project initiation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Start working on your project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Hire a Java Developer?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let&apos;s discuss your project requirements and find the perfect Java developer for your team.
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