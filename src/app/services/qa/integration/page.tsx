import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  PuzzlePieceIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Integration Testing Services - TesseraNova',
  description: 'Expert integration testing services to ensure seamless component interaction. API testing, database integration, and system integration testing.',
  keywords: 'integration testing, API testing, system integration, component testing, software testing',
});

const features = [
  {
    title: 'Component Integration',
    description: 'Test component interactions.',
    icon: PuzzlePieceIcon,
  },
  {
    title: 'API Integration',
    description: 'Test API integrations.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Database Integration',
    description: 'Test database interactions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'System Integration',
    description: 'Test system-wide integration.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Postman',
  'SoapUI',
  'JMeter',
  'Selenium',
  'TestNG',
  'JUnit',
  'RestAssured',
  'Karate',
  'Cucumber',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'Kubernetes',
  'Database Tools',
];

const processSteps = [
  {
    title: 'Integration Analysis',
    description: 'Analyzing integration points',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Test Planning',
    description: 'Planning integration test strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Test Development',
    description: 'Writing integration test cases',
    icon: CommandLineIcon,
  },
  {
    title: 'Execution & Validation',
    description: 'Running tests and validating results',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Integration Projects',
    value: '150+',
  },
  {
    label: 'Success Rate',
    value: '95%',
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

export default function IntegrationTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Integration Testing"
        description="We provide expert integration testing services to ensure seamless component interaction. Our team delivers comprehensive integration testing solutions."
        icon={PuzzlePieceIcon}
        cta={{
          label: 'Start Your Integration Testing Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Integration Testing Process"
        description="We follow industry best practices to deliver effective integration testing solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Integration Testing Services"
        description="We offer comprehensive integration testing services using the latest tools and best practices."
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