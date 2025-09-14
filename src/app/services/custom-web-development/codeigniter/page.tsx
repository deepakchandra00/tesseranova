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
  title: 'CodeIgniter Development Services - TesseraNova',
  description: 'Expert CodeIgniter development services for building lightweight, fast, and secure web applications. From small projects to enterprise solutions.',
  keywords: 'CodeIgniter development, PHP framework, lightweight framework, web applications, enterprise solutions',
});

const features = [
  {
    title: 'Lightweight Framework',
    description: 'Build fast and efficient applications with CodeIgniter\'s lightweight architecture.',
    icon: CodeBracketIcon,
  },
  {
    title: 'MVC Architecture',
    description: 'Develop well-structured applications using the MVC pattern.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Security Features',
    description: 'Implement robust security measures with CodeIgniter\'s built-in features.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Database Abstraction',
    description: 'Work with multiple databases through a simple interface.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'CodeIgniter 4.x',
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
    description: 'Defining requirements and architecture for your CodeIgniter application',
    icon: DocumentTextIcon,
  },
  {
    title: 'Development Setup',
    description: 'Setting up the CodeIgniter project with best practices',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Building your application using CodeIgniter features',
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
    label: 'CodeIgniter Projects',
    value: '100+',
  },
  {
    label: 'Performance Score',
    value: '95+',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '15+',
  },
];

export default function CodeIgniterDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="CodeIgniter Development"
        description="We specialize in building lightweight, fast, and secure web applications using CodeIgniter. Our expertise ensures efficient and maintainable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your CodeIgniter Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our CodeIgniter Development Process"
        description="We follow industry best practices to deliver high-quality CodeIgniter applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="CodeIgniter Development Services"
        description="We offer comprehensive CodeIgniter development services using the latest features and best practices."
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