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
  title: 'Regression Testing Services - TesseraNova',
  description: 'Expert regression testing services to ensure software stability. Automated regression testing, continuous testing, and quality assurance.',
  keywords: 'regression testing, automated testing, continuous testing, software testing, quality assurance',
});

const features = [
  {
    title: 'Automated Regression',
    description: 'Automated test execution.',
    icon: ArrowPathIcon,
  },
  {
    title: 'Continuous Testing',
    description: 'Continuous quality assurance.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Test Maintenance',
    description: 'Maintain test suites.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Quality Metrics',
    description: 'Track quality metrics.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Selenium',
  'Cypress',
  'Playwright',
  'TestNG',
  'JUnit',
  'Cucumber',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'Kubernetes',
  'BrowserStack',
  'Sauce Labs',
  'TestRail',
  'JIRA',
];

const processSteps = [
  {
    title: 'Impact Analysis',
    description: 'Analyzing code changes',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Test Planning',
    description: 'Planning regression test strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Test Execution',
    description: 'Running regression tests',
    icon: CommandLineIcon,
  },
  {
    title: 'Results Analysis',
    description: 'Analyzing test results',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Regression Projects',
    value: '150+',
  },
  {
    label: 'Test Automation',
    value: '85%',
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

export default function RegressionTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Regression Testing"
        description="We provide expert regression testing services to ensure software stability. Our team delivers comprehensive regression testing solutions."
        icon={ArrowPathIcon}
        cta={{
          label: 'Start Your Regression Testing Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Regression Testing Process"
        description="We follow industry best practices to deliver effective regression testing solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Regression Testing Services"
        description="We offer comprehensive regression testing services using the latest tools and best practices."
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