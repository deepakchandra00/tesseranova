import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Cypress Testing Services - TesseraNova',
  description: 'Expert Cypress testing services for modern web applications. End-to-end testing, component testing, and real-time test execution.',
  keywords: 'Cypress testing, end-to-end testing, component testing, web automation, automated testing',
});

const features = [
  {
    title: 'End-to-End Testing',
    description: 'Test complete user workflows.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Component Testing',
    description: 'Test individual components.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Real-time Testing',
    description: 'Watch tests execute in real-time.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Debugging Tools',
    description: 'Advanced debugging capabilities.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Cypress',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Mocha',
  'Chai',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'Cypress Dashboard',
  'Cypress Cloud',
  'Cypress Studio',
  'Cypress XHR',
  'Cypress Network',
];

const processSteps = [
  {
    title: 'Test Planning',
    description: 'Planning test scenarios and coverage',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Environment Setup',
    description: 'Setting up Cypress environment',
    icon: BeakerIcon,
  },
  {
    title: 'Test Development',
    description: 'Writing Cypress test scripts',
    icon: CommandLineIcon,
  },
  {
    title: 'Execution & Reporting',
    description: 'Running tests and analyzing results',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Cypress Projects',
    value: '60+',
  },
  {
    label: 'Test Coverage',
    value: '90%',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '15+',
  },
];

export default function CypressTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Cypress Testing"
        description="We provide expert Cypress testing services for modern web applications. Our team delivers reliable and maintainable test solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Cypress Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Cypress Testing Process"
        description="We follow industry best practices to deliver effective web automation solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Cypress Testing Services"
        description="We offer comprehensive Cypress testing services using the latest tools and best practices."
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