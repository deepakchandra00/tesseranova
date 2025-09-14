import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  FireIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'SMOKE Testing Services - TesseraNova',
  description: 'Expert SMOKE testing services to validate critical functionality. Build verification testing, sanity testing, and quality assurance.',
  keywords: 'SMOKE testing, build verification testing, sanity testing, software testing, quality assurance',
});

const features = [
  {
    title: 'Build Verification',
    description: 'Verify build stability.',
    icon: FireIcon,
  },
  {
    title: 'Critical Path Testing',
    description: 'Test critical functionality.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Quick Validation',
    description: 'Rapid test execution.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Quality Gates',
    description: 'Set quality thresholds.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Selenium',
  'Cypress',
  'Playwright',
  'TestNG',
  'JUnit',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'Kubernetes',
  'BrowserStack',
  'Sauce Labs',
  'TestRail',
  'JIRA',
  'Postman',
];

const processSteps = [
  {
    title: 'Critical Path Analysis',
    description: 'Identifying critical functionality',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Test Planning',
    description: 'Planning SMOKE test strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Test Execution',
    description: 'Running SMOKE tests',
    icon: CommandLineIcon,
  },
  {
    title: 'Results Validation',
    description: 'Validating test results',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'SMOKE Projects',
    value: '200+',
  },
  {
    label: 'Test Efficiency',
    value: '90%',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '30+',
  },
];

export default function SMOKETestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="SMOKE Testing"
        description="We provide expert SMOKE testing services to validate critical functionality. Our team delivers comprehensive SMOKE testing solutions."
        icon={FireIcon}
        cta={{
          label: 'Start Your SMOKE Testing Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our SMOKE Testing Process"
        description="We follow industry best practices to deliver effective SMOKE testing solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="SMOKE Testing Services"
        description="We offer comprehensive SMOKE testing services using the latest tools and best practices."
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