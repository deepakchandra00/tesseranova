import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Appium Testing Services - TesseraNova',
  description: 'Expert Appium testing services for mobile application automation. Cross-platform testing, real device testing, and robust mobile test frameworks.',
  keywords: 'Appium testing, mobile automation, cross-platform testing, mobile testing, automated testing',
});

const features = [
  {
    title: 'Cross-Platform Testing',
    description: 'Test on iOS and Android platforms.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Real Device Testing',
    description: 'Test on physical devices.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Framework Development',
    description: 'Build maintainable test frameworks.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Performance Testing',
    description: 'Test mobile app performance.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Appium',
  'Selenium',
  'XCUITest',
  'UIAutomator',
  'Java',
  'Python',
  'JavaScript',
  'TestNG',
  'JUnit',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'BrowserStack',
  'Sauce Labs',
  'Perfecto',
];

const processSteps = [
  {
    title: 'Environment Setup',
    description: 'Setting up mobile test environment',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Framework Design',
    description: 'Designing mobile test framework',
    icon: BeakerIcon,
  },
  {
    title: 'Script Development',
    description: 'Developing mobile test scripts',
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
    label: 'Appium Projects',
    value: '70+',
  },
  {
    label: 'Device Coverage',
    value: '50+',
  },
  {
    label: 'Client Satisfaction',
    value: '94%',
  },
  {
    label: 'Team Members',
    value: '18+',
  },
];

export default function AppiumTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Appium Testing"
        description="We provide expert Appium testing services for mobile application automation. Our team delivers comprehensive mobile testing solutions."
        icon={DevicePhoneMobileIcon}
        cta={{
          label: 'Start Your Appium Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Appium Testing Process"
        description="We follow industry best practices to deliver effective mobile automation solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Appium Testing Services"
        description="We offer comprehensive Appium testing services using the latest tools and best practices."
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