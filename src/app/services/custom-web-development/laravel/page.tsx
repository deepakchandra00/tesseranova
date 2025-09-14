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
  title: 'Laravel Development Services - TesseraNova',
  description: 'Expert Laravel development services for building elegant, scalable, and secure web applications. From startups to enterprise solutions.',
  keywords: 'Laravel development, PHP framework, web applications, enterprise solutions, API development',
});

const features = [
  {
    title: 'Elegant Architecture',
    description: 'Build applications with Laravel\'s elegant and expressive syntax.',
    icon: CodeBracketIcon,
  },
  {
    title: 'API Development',
    description: 'Create robust RESTful APIs and microservices.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Security Features',
    description: 'Leverage Laravel\'s built-in security features and best practices.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Scalable Solutions',
    description: 'Build applications that scale with your business needs.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Laravel 10.x',
  'PHP 8.x',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'MongoDB',
  'REST APIs',
  'GraphQL',
  'Docker',
  'AWS',
  'Vue.js',
  'React',
  'Tailwind CSS',
  'Laravel Mix',
  'Laravel Forge',
];

const processSteps = [
  {
    title: 'Project Planning',
    description: 'Defining requirements and architecture for your Laravel application',
    icon: DocumentTextIcon,
  },
  {
    title: 'Development Setup',
    description: 'Setting up the Laravel project with best practices',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Building your application using Laravel features',
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
    label: 'Laravel Projects',
    value: '200+',
  },
  {
    label: 'Performance Score',
    value: '96+',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '25+',
  },
];

export default function LaravelDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Laravel Development"
        description="We specialize in building elegant, scalable, and secure web applications using Laravel. Our expertise ensures robust and maintainable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Laravel Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Laravel Development Process"
        description="We follow industry best practices to deliver high-quality Laravel applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="Laravel Development Services"
        description="We offer comprehensive Laravel development services using the latest features and best practices."
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