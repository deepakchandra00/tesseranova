import { generateMetadata } from '@/components/shared/SEO';
import HeroSection from '@/components/shared/HeroSection';

export const metadata = generateMetadata({
  title: 'Hire Dedicated .NET Developer - TesseraNova',
  description: 'Hire experienced .NET developers from TesseraNova for your custom software development needs. Get dedicated .NET experts for your projects.',
  keywords: 'hire .NET developer, dedicated .NET developer, .NET development team, ASP.NET developer, C# developer, .NET Core developer',
});

const expertise = [
  {
    title: 'ASP.NET Development',
    description: 'Expertise in building scalable web applications using ASP.NET MVC and ASP.NET Core.',
    icon: '🌐',
  },
  {
    title: 'C# Programming',
    description: 'Proficient in C# development for desktop, web, and mobile applications.',
    icon: '💻',
  },
  {
    title: '.NET Core',
    description: 'Experience in developing cross-platform applications using .NET Core.',
    icon: '🔄',
  },
  {
    title: 'Azure Integration',
    description: 'Skilled in deploying and managing applications on Microsoft Azure.',
    icon: '☁️',
  },
];

const skills = [
  'ASP.NET MVC',
  'ASP.NET Core',
  'C#',
  '.NET Framework',
  '.NET Core',
  'Entity Framework',
  'LINQ',
  'SQL Server',
  'Azure',
  'Web API',
  'RESTful Services',
  'Microservices',
  'Docker',
  'CI/CD',
  'Unit Testing',
];

const benefits = [
  {
    title: 'Dedicated Team',
    description: 'Get a dedicated team of .NET developers working exclusively on your project.',
    icon: '👥',
  },
  {
    title: 'Flexible Engagement',
    description: 'Choose from various engagement models that suit your project requirements.',
    icon: '⚡',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality checks to ensure bug-free applications.',
    icon: '✅',
  },
  {
    title: 'Cost-Effective',
    description: 'Save on infrastructure and training costs with our dedicated developers.',
    icon: '💰',
  },
];

export default function HireDotNetDeveloperPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection
        title="Hire Dedicated .NET Developer"
        description="Get access to our pool of expert .NET developers for your custom software development needs. We provide skilled professionals who can help you build robust, scalable, and secure applications."
        ctaText="Get Started"
        ctaLink="/contact"
        backgroundImage="Optional background image URL"
        showGradient={true}
      />

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our .NET Expertise
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
            Why Choose Our .NET Developers
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