import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  ArrowPathIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Postman Testing Services - TesseraNova',
  description: 'Expert Postman testing services for API testing and automation. API development, testing, and monitoring solutions.',
  keywords: 'Postman testing, API testing, API automation, API development, automated testing',
});

const features = [
  {
    title: 'API Testing',
    description: 'Comprehensive API test automation.',
    icon: ArrowPathIcon,
  },
  {
    title: 'Collection Development',
    description: 'Create reusable API collections.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Environment Setup',
    description: 'Configure test environments.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Monitoring',
    description: 'Monitor API performance.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Postman',
  'Newman',
  'JavaScript',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'Postman CLI',
  'Postman API',
  'Postman Cloud',
  'Postman Monitor',
  'Postman Workspaces',
  'Postman Collections',
  'Postman Environments',
  'Postman Scripts',
];

const processSteps = [
  {
    title: 'API Analysis',
    description: 'Analyzing API requirements',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Collection Setup',
    description: 'Setting up Postman collections',
    icon: BeakerIcon,
  },
  {
    title: 'Test Development',
    description: 'Writing API test scripts',
    icon: CommandLineIcon,
  },
  {
    title: 'Execution & Monitoring',
    description: 'Running tests and monitoring APIs',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'API Projects',
    value: '100+',
  },
  {
    label: 'Test Coverage',
    value: '95%',
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

export default function PostmanTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Postman Testing"
        description="We provide expert Postman testing services for API testing and automation. Our team delivers comprehensive API testing solutions."
        icon={ArrowPathIcon}
        cta={{
          label: 'Start Your Postman Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Postman Testing Process"
        description="We follow industry best practices to deliver effective API testing solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Postman Testing Services"
        description="We offer comprehensive Postman testing services using the latest tools and best practices."
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