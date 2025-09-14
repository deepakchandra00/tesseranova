import { generateMetadata } from '@/components/shared/SEO';
import HeroSection from '@/components/shared/HeroSection';

export const metadata = generateMetadata({
  title: 'Hire Dedicated MERN Stack Developer - TesseraNova',
  description: 'Hire experienced MERN stack developers from TesseraNova for your full-stack JavaScript development needs. Get dedicated MERN stack experts for your projects.',
  keywords: 'hire MERN stack developer, dedicated MERN developer, MERN development team, MongoDB, Express.js, React, Node.js',
});

const expertise = [
  {
    title: 'MongoDB',
    description: 'Expertise in NoSQL database design, optimization, and management.',
    icon: '🗄️',
  },
  {
    title: 'Express.js',
    description: 'Proficient in building scalable backend APIs and microservices.',
    icon: '🚀',
  },
  {
    title: 'React',
    description: 'Experience in building modern, responsive user interfaces.',
    icon: '⚛️',
  },
  {
    title: 'Node.js',
    description: 'Skilled in server-side JavaScript development and real-time applications.',
    icon: '🟢',
  },
];

const skills = [
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
  'TypeScript',
  'Redux',
  'GraphQL',
  'RESTful APIs',
  'Socket.io',
  'JWT',
  'Docker',
  'AWS',
  'CI/CD',
  'Jest',
  'Mocha',
];

const benefits = [
  {
    title: 'Full Stack',
    description: 'Get end-to-end development expertise in the MERN stack.',
    icon: '🌐',
  },
  {
    title: 'Modern Stack',
    description: 'Work with the latest versions of MERN technologies.',
    icon: '⚡',
  },
  {
    title: 'Quality Code',
    description: 'Follow best practices and maintain high code quality.',
    icon: '✅',
  },
  {
    title: 'Cost-Effective',
    description: 'Save on development costs with our experienced MERN developers.',
    icon: '💰',
  },
];

export default function HireMERNDeveloperPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection
        title="Hire Dedicated MERN Stack Developer"
        description="Get access to our pool of expert MERN stack developers for your full-stack JavaScript development needs. We provide skilled professionals who can help build modern, scalable, and efficient web applications using MongoDB, Express.js, React, and Node.js."
        ctaText="Get Started"
        ctaLink="/contact"
        showGradient={true}
      />

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our MERN Stack Expertise
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
            Why Choose Our MERN Stack Developers
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
    </div>
  );
} 