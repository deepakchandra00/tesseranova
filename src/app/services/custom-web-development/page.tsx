import ServiceDetails from '@/components/shared/ServiceDetails';
import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Custom Web Development Services - TesseraNova',
  description: 'Expert custom web development services using React, Angular, Next.js, and PHP frameworks. Build scalable, secure, and high-performance web applications.',
  keywords: 'web development, React, Angular, Next.js, PHP, Laravel, CakePHP, CodeIgniter, YII',
});

const features = [
  {
    title: 'Modern Frontend Development',
    description: 'Build responsive and interactive user interfaces using React, Angular, and Next.js.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Robust Backend Solutions',
    description: 'Develop scalable and secure backend systems using PHP frameworks and modern technologies.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Performance Optimization',
    description: 'Ensure fast loading times and optimal performance across all devices and platforms.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Cross-Platform Compatibility',
    description: 'Create web applications that work seamlessly across all devices and browsers.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'React',
  'Angular',
  'Next.js',
  'PHP',
  'Laravel',
  'CakePHP',
  'CodeIgniter',
  'YII',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
];

const processSteps = [
  {
    title: 'Discovery',
    description: 'Understanding your requirements and project goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'Planning',
    description: 'Creating a detailed project roadmap and architecture',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your application with best practices',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing',
    description: 'Ensuring quality and performance',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Projects Completed',
    value: '500+',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Years Experience',
    value: '10+',
  },
  {
    label: 'Team Members',
    value: '50+',
  },
];

export default function CustomWebDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Custom Web Development"
        description="We create powerful, scalable, and secure web applications that help businesses achieve their digital goals. Our expertise in modern technologies ensures high-performance solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Development Process"
        description="We follow a proven development process to ensure the success of your project"
        steps={processSteps}
      />

      <ServiceDetails
        title="Our Services"
        description="We offer comprehensive web development services using the latest technologies and best practices."
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