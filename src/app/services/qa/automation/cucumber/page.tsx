import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  DocumentTextIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Cucumber Testing Services - TesseraNova',
  description: 'Expert Cucumber testing services for behavior-driven development. Gherkin syntax, feature files, and automated acceptance testing.',
  keywords: 'Cucumber testing, BDD, behavior-driven development, Gherkin, acceptance testing, automated testing',
});

const features = [
  {
    title: 'BDD Implementation',
    description: 'Implement behavior-driven development.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Feature Development',
    description: 'Create Gherkin feature files.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Step Definitions',
    description: 'Write reusable step definitions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Test Reports',
    description: 'Generate detailed test reports.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Cucumber',
  'Gherkin',
  'Ruby',
  'Java',
  'JavaScript',
  'Python',
  'Selenium',
  'TestNG',
  'JUnit',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Cucumber Reports',
  'Allure Reports',
  'Extent Reports',
];

const processSteps = [
  {
    title: 'Feature Analysis',
    description: 'Analyzing user stories and features',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Scenario Writing',
    description: 'Writing Gherkin scenarios',
    icon: BeakerIcon,
  },
  {
    title: 'Step Implementation',
    description: 'Implementing step definitions',
    icon: CommandLineIcon,
  },
  {
    title: 'Execution & Reporting',
    description: 'Running tests and generating reports',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Cucumber Projects',
    value: '80+',
  },
  {
    label: 'Test Coverage',
    value: '85%',
  },
  {
    label: 'Client Satisfaction',
    value: '95%',
  },
  {
    label: 'Team Members',
    value: '20+',
  },
];

export default function CucumberTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Cucumber Testing"
        description="We provide expert Cucumber testing services for behavior-driven development. Our team delivers clear, maintainable test solutions using Gherkin syntax."
        icon={DocumentTextIcon}
        cta={{
          label: 'Start Your Cucumber Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Cucumber Testing Process"
        description="We follow industry best practices to deliver effective BDD solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Cucumber Testing Services"
        description="We offer comprehensive Cucumber testing services using the latest tools and best practices."
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