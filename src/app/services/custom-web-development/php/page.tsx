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
  title: 'PHP Development Services - TesseraNova',
  description: 'Expert PHP development services for building robust, scalable, and secure web applications. From custom solutions to enterprise-grade systems.',
  keywords: 'PHP development, web applications, backend development, custom PHP solutions, enterprise applications',
});

const features = [
  {
    title: 'Custom Web Applications',
    description: 'Build tailored web applications using modern PHP frameworks and best practices.',
    icon: CodeBracketIcon,
  },
  {
    title: 'API Development',
    description: 'Create secure and scalable RESTful APIs for your applications.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Database Integration',
    description: 'Seamlessly integrate with various databases and data sources.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Security & Performance',
    description: 'Implement robust security measures and optimize performance.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'PHP 8.x',
  'Laravel',
  'Symfony',
  'CodeIgniter',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'REST APIs',
  'GraphQL',
  'Docker',
  'AWS',
  'Linux',
  'Nginx',
  'Apache',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your PHP application needs and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'Architecture Design',
    description: 'Planning the application structure and database schema',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your PHP application with best practices',
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
    label: 'PHP Projects',
    value: '300+',
  },
  {
    label: 'Performance Score',
    value: '94+',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '30+',
  },
];

export default function PHPDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="PHP Development"
        description="We specialize in building robust, scalable, and secure web applications using PHP. Our expertise ensures reliable and maintainable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your PHP Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our PHP Development Process"
        description="We follow industry best practices to deliver high-quality PHP applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="PHP Development Services"
        description="We offer comprehensive PHP development services using the latest technologies and best practices."
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