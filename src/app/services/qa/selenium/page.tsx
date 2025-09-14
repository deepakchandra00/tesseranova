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
  title: 'Selenium Testing Services - TesseraNova',
  description: 'Expert Selenium testing services for web application automation. Cross-browser testing, parallel execution, and robust test frameworks.',
  keywords: 'Selenium testing, web automation, cross-browser testing, test automation, Selenium WebDriver',
});

const features = [
  {
    title: 'Cross-Browser Testing',
    description: 'Test across multiple browsers.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Parallel Execution',
    description: 'Run tests in parallel for efficiency.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Framework Development',
    description: 'Build maintainable test frameworks.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Reporting & Analytics',
    description: 'Generate detailed test reports.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Selenium WebDriver',
  'TestNG',
  'JUnit',
  'Cucumber',
  'Maven',
  'Gradle',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'Selenium Grid',
  'Extent Reports',
  'Allure Reports',
  'Java',
  'Python',
];

const processSteps = [
  {
    title: 'Framework Design',
    description: 'Designing the Selenium framework',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Environment Setup',
    description: 'Setting up test infrastructure',
    icon: BeakerIcon,
  },
  {
    title: 'Script Development',
    description: 'Developing Selenium test scripts',
    icon: CommandLineIcon,
  },
  {
    title: 'Execution & Maintenance',
    description: 'Running and maintaining tests',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Selenium Projects',
    value: '100+',
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
    value: '25+',
  },
];

export default function SeleniumTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Selenium Testing"
        description="We provide expert Selenium testing services for web application automation. Our team delivers robust, maintainable test solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Selenium Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Selenium Testing Process"
        description="We follow industry best practices to deliver efficient Selenium automation solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Selenium Testing Services"
        description="We offer comprehensive Selenium testing services using the latest tools and best practices."
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