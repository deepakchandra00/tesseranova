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
  title: 'MEAN Stack Development Services - TesseraNova',
  description: 'Expert MEAN stack development services for building scalable, modern web applications. MongoDB, Express.js, Angular, and Node.js solutions.',
  keywords: 'MEAN stack, MongoDB, Express.js, Angular, Node.js, full stack development, web development',
});

const features = [
  {
    title: 'Full Stack JavaScript',
    description: 'End-to-end JavaScript development from frontend to backend.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Scalable Architecture',
    description: 'Build scalable applications with microservices architecture.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Real-time Features',
    description: 'Implement real-time functionality with WebSocket integration.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless cloud deployment and integration capabilities.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'MongoDB',
  'Express.js',
  'Angular',
  'Node.js',
  'TypeScript',
  'REST APIs',
  'GraphQL',
  'WebSocket',
  'Docker',
  'AWS',
  'Azure',
  'CI/CD',
  'Jest',
  'Mocha',
  'Git',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your application requirements and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'Architecture Design',
    description: 'Designing scalable and maintainable architecture',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your MEAN stack application',
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
    label: 'MEAN Projects',
    value: '40+',
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

export default function MEANStackPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="MEAN Stack Development"
        description="We specialize in building scalable, modern web applications using the MEAN stack. Our expertise ensures robust, efficient, and maintainable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your MEAN Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our MEAN Stack Development Process"
        description="We follow industry best practices to deliver high-quality MEAN stack applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="MEAN Stack Development Services"
        description="We offer comprehensive MEAN stack development services using the latest technologies and best practices."
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