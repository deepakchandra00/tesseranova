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
  title: 'MERN Stack Development Services - TesseraNova',
  description: 'Expert MERN stack development services for building modern, scalable web applications. MongoDB, Express.js, React, and Node.js solutions.',
  keywords: 'MERN stack, MongoDB, Express.js, React, Node.js, full stack development, web development',
});

const features = [
  {
    title: 'Modern Frontend',
    description: 'Build interactive UIs with React and modern JavaScript.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Scalable Backend',
    description: 'Develop robust backend services with Node.js and Express.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Real-time Features',
    description: 'Implement real-time functionality with Socket.io.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Cloud Ready',
    description: 'Deploy and scale applications in the cloud.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
  'TypeScript',
  'Redux',
  'GraphQL',
  'Socket.io',
  'Docker',
  'AWS',
  'Azure',
  'CI/CD',
  'Jest',
  'React Testing Library',
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
    description: 'Building your MERN stack application',
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
    label: 'MERN Projects',
    value: '50+',
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
    value: '20+',
  },
];

export default function MERNStackPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="MERN Stack Development"
        description="We specialize in building modern, scalable web applications using the MERN stack. Our expertise ensures robust, efficient, and maintainable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your MERN Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our MERN Stack Development Process"
        description="We follow industry best practices to deliver high-quality MERN stack applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="MERN Stack Development Services"
        description="We offer comprehensive MERN stack development services using the latest technologies and best practices."
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