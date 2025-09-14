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
  title: 'YII Development Services - TesseraNova',
  description: 'Expert YII framework development services for building high-performance, secure, and scalable web applications. From startups to enterprise solutions.',
  keywords: 'YII development, PHP framework, high-performance framework, web applications, enterprise solutions',
});

const features = [
  {
    title: 'High Performance',
    description: 'Build fast and efficient applications with YII\'s optimized architecture.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Security First',
    description: 'Implement robust security measures with YII\'s built-in features.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'RESTful APIs',
    description: 'Create powerful RESTful APIs with YII\'s built-in support.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Database Integration',
    description: 'Work with multiple databases through YII\'s powerful ORM.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'YII 2.x',
  'PHP 8.x',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'MongoDB',
  'REST APIs',
  'Composer',
  'Docker',
  'AWS',
  'Linux',
  'Nginx',
  'Apache',
  'PHPUnit',
  'Git',
];

const processSteps = [
  {
    title: 'Project Planning',
    description: 'Defining requirements and architecture for your YII application',
    icon: DocumentTextIcon,
  },
  {
    title: 'Development Setup',
    description: 'Setting up the YII project with best practices',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Building your application using YII features',
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
    label: 'YII Projects',
    value: '75+',
  },
  {
    label: 'Performance Score',
    value: '96+',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '12+',
  },
];

export default function YiiDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="YII Development"
        description="We specialize in building high-performance, secure, and scalable web applications using the YII framework. Our expertise ensures robust and maintainable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your YII Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our YII Development Process"
        description="We follow industry best practices to deliver high-quality YII applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="YII Development Services"
        description="We offer comprehensive YII development services using the latest features and best practices."
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