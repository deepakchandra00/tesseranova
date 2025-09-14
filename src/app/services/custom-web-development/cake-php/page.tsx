import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'CakePHP Development Services - TesseraNova',
  description: 'Expert CakePHP development services for building rapid, secure, and maintainable web applications. From small projects to enterprise solutions.',
  keywords: 'CakePHP development, PHP framework, rapid development, MVC framework, web applications',
});

const features = [
  {
    title: 'Rapid Development',
    description: 'Leverage CakePHP\'s convention over configuration for faster development.',
    icon: CodeBracketIcon,
  },
  {
    title: 'MVC Architecture',
    description: 'Build well-structured applications using the MVC pattern.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Built-in Security',
    description: 'Utilize CakePHP\'s built-in security features and best practices.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Database Integration',
    description: 'Seamlessly work with multiple database systems.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'CakePHP 4.x',
  'PHP 8.x',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'REST APIs',
  'Composer',
  'Docker',
  'AWS',
  'Linux',
  'Nginx',
  'Apache',
  'PHPUnit',
  'Git',
  'CI/CD',
];

const processSteps = [
  {
    title: 'Project Planning',
    description: 'Defining requirements and architecture for your CakePHP application',
    icon: DocumentTextIcon,
  },
  {
    title: 'Development Setup',
    description: 'Setting up the CakePHP project with best practices',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Building your application using CakePHP features',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Deployment',
    description: 'Ensuring quality and deploying to production',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'CakePHP Projects',
    value: '50+',
  },
  {
    label: 'Performance Score',
    value: '93+',
  },
  {
    label: 'Client Satisfaction',
    value: '95%',
  },
  {
    label: 'Team Members',
    value: '10+',
  },
];

export default function CakePHPDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="CakePHP Development"
        description="We specialize in building rapid, secure, and maintainable web applications using CakePHP. Our expertise ensures efficient and scalable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your CakePHP Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our CakePHP Development Process"
        description="We follow industry best practices to deliver high-quality CakePHP applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="CakePHP Development Services"
        description="We offer comprehensive CakePHP development services using the latest features and best practices."
        features={features}
        technologies={technologies}
        cta={{
          label: 'Get Started',
          href: '/contact',
        }}
      />
    </div>
  );
} 