import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CommandLineIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CodeBracketIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Automation Testing Services - TesseraNova',
  description: 'Expert automation testing services to improve testing efficiency and coverage. Selenium, Cypress, and other automation frameworks.',
  keywords: 'automation testing, test automation, Selenium, Cypress, automated testing, QA automation',
});

const features = [
  {
    title: 'Framework Development',
    description: 'Build robust test automation frameworks.',
    icon: CommandLineIcon,
  },
  {
    title: 'Script Development',
    description: 'Create maintainable test scripts.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'CI/CD Integration',
    description: 'Integrate with CI/CD pipelines.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Performance Monitoring',
    description: 'Monitor test execution metrics.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Selenium',
  'Cypress',
  'Appium',
  'TestNG',
  'JUnit',
  'Cucumber',
  'Postman',
  'JMeter',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'Kubernetes',
  'Python',
  'JavaScript',
];

const processSteps = [
  {
    title: 'Framework Selection',
    description: 'Choosing the right automation tools',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Framework Setup',
    description: 'Setting up automation infrastructure',
    icon: BeakerIcon,
  },
  {
    title: 'Script Development',
    description: 'Developing automated test scripts',
    icon: CodeBracketIcon,
  },
  {
    title: 'Execution & Maintenance',
    description: 'Running and maintaining tests',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Automation Projects',
    value: '150+',
  },
  {
    label: 'Test Coverage',
    value: '85%',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '35+',
  },
];

export default function AutomationTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Automation Testing"
        description="We provide comprehensive automation testing services to improve testing efficiency and coverage. Our expert team delivers robust automation solutions."
        icon={CommandLineIcon}
        cta={{
          label: 'Start Your Automation Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Automation Testing Process"
        description="We follow industry best practices to deliver efficient automation solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Automation Testing Services"
        description="We offer comprehensive automation testing services using the latest tools and best practices."
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