import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  ServerIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'LAMP Stack Development Services - TesseraNova',
  description: 'Expert LAMP stack development services for building robust web applications. Linux, Apache, MySQL, and PHP solutions.',
  keywords: 'LAMP stack, Linux, Apache, MySQL, PHP, full stack development, web development',
});

const features = [
  {
    title: 'Open Source Stack',
    description: 'Leverage the power of open-source technologies.',
    icon: ServerIcon,
  },
  {
    title: 'Scalable Solutions',
    description: 'Build scalable and reliable web applications.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Cost-Effective',
    description: 'Reduce development and hosting costs.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Cloud Ready',
    description: 'Deploy and scale applications in the cloud.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Linux',
  'Apache',
  'MySQL',
  'PHP',
  'Laravel',
  'CodeIgniter',
  'Symfony',
  'WordPress',
  'Docker',
  'AWS',
  'Azure',
  'CI/CD',
  'PHPUnit',
  'Composer',
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
    description: 'Building your LAMP stack application',
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
    label: 'LAMP Projects',
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
    value: '25+',
  },
];

export default function LAMPStackPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="LAMP Stack Development"
        description="We specialize in building robust web applications using the LAMP stack. Our expertise ensures reliable, efficient, and cost-effective solutions."
        icon={ServerIcon}
        cta={{
          label: 'Start Your LAMP Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our LAMP Stack Development Process"
        description="We follow industry best practices to deliver high-quality LAMP stack applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="LAMP Stack Development Services"
        description="We offer comprehensive LAMP stack development services using the latest technologies and best practices."
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