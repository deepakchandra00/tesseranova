import { generateMetadata } from '@/components/shared/SEO';
import HeroSection from '@/components/shared/HeroSection';

export const metadata = generateMetadata({
  title: 'Hire Dedicated QA Developer - TesseraNova',
  description: 'Hire experienced QA developers from TesseraNova for your software testing needs. Get dedicated QA experts for your projects.',
  keywords: 'hire QA developer, dedicated QA developer, QA development team, software testing, quality assurance',
});

const expertise = [
  {
    title: 'Automation Testing',
    description: 'Expertise in Selenium, Cypress, and other automation frameworks.',
    icon: '🤖',
  },
  {
    title: 'Manual Testing',
    description: 'Proficient in functional, regression, and user acceptance testing.',
    icon: '👨‍💻',
  },
  {
    title: 'Performance Testing',
    description: 'Experience in load testing, stress testing, and performance optimization.',
    icon: '⚡',
  },
  {
    title: 'Security Testing',
    description: 'Skilled in vulnerability assessment and security testing.',
    icon: '🔒',
  },
];

const skills = [
  'Selenium',
  'Cypress',
  'Appium',
  'Postman',
  'JMeter',
  'JUnit',
  'TestNG',
  'Cucumber',
  'Git',
  'Jenkins',
  'Docker',
  'AWS',
  'CI/CD',
  'JIRA',
  'TestRail',
];

const benefits = [
  {
    title: 'Expert Team',
    description: 'Get access to our pool of certified QA engineers with extensive experience.',
    icon: '👥',
  },
  {
    title: 'Comprehensive Testing',
    description: 'Cover all aspects of software testing from unit to system level.',
    icon: '📋',
  },
  {
    title: 'Quality Assurance',
    description: 'Ensure high-quality software delivery with thorough testing.',
    icon: '✅',
  },
  {
    title: 'Cost-Effective',
    description: 'Save on testing costs with our experienced QA developers.',
    icon: '💰',
  },
];

export default function HireQADeveloperPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection
        title="Hire Dedicated QA Developer"
        description="Get access to our pool of expert QA developers for your software testing needs. We provide skilled professionals who can help ensure the quality and reliability of your applications."
        ctaText="Get Started"
        ctaLink="/contact"
        showGradient={true}
      />

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our QA Expertise
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
            Why Choose Our QA Developers
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
                  Share your testing requirements
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
                  Choose from our expert QA engineers
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
                  Testing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Start testing your project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 