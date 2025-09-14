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
  title: 'Angular Development Services - TesseraNova',
  description: 'Expert Angular development services for building enterprise-grade web applications. From single-page applications to complex business solutions.',
  keywords: 'Angular development, Angular.js, frontend development, web applications, enterprise applications',
});

const features = [
  {
    title: 'Enterprise Applications',
    description: 'Build scalable and maintainable enterprise applications with Angular.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize Angular applications for maximum performance and user experience.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'TypeScript Integration',
    description: 'Leverage TypeScript for type-safe and maintainable code.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Responsive Design',
    description: 'Create responsive and mobile-friendly Angular applications.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Angular',
  'TypeScript',
  'RxJS',
  'NgRx',
  'Angular Material',
  'Bootstrap',
  'SASS/SCSS',
  'Jasmine',
  'Karma',
  'Protractor',
  'Webpack',
  'Node.js',
  'REST APIs',
  'GraphQL',
  'Docker',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your Angular application needs and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'Architecture Design',
    description: 'Planning the application structure and module organization',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your Angular application with best practices',
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
    label: 'Angular Projects',
    value: '150+',
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
    value: '20+',
  },
];

export default function AngularDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Angular Development"
        description="We specialize in building enterprise-grade web applications using Angular. Our expertise ensures robust, maintainable, and scalable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Angular Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Angular Development Process"
        description="We follow industry best practices to deliver high-quality Angular applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="Angular Development Services"
        description="We offer comprehensive Angular development services using the latest technologies and best practices."
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