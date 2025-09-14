import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Functional Testing Services - TesseraNova',
  description: 'Expert functional testing services to validate software functionality. User interface testing, business logic validation, and end-to-end testing.',
  keywords: 'functional testing, UI testing, business logic testing, end-to-end testing, software testing',
});

const features = [
  {
    title: 'User Interface Testing',
    description: 'Test UI functionality.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Business Logic Testing',
    description: 'Test business rules.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Data Validation',
    description: 'Test data processing.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'End-to-End Testing',
    description: 'Test complete workflows.',
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
  'SpecFlow',
  'Robot Framework',
  'Postman',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'BrowserStack',
  'Sauce Labs',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Analyzing functional requirements',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Test Planning',
    description: 'Planning functional test strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Test Development',
    description: 'Writing functional test cases',
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
    label: 'Functional Projects',
    value: '200+',
  },
  {
    label: 'Test Coverage',
    value: '90%',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '35+',
  },
];

export default function FunctionalTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Functional Testing"
        description="We provide expert functional testing services to validate software functionality. Our team delivers comprehensive functional testing solutions."
        icon={WrenchScrewdriverIcon}
        cta={{
          label: 'Start Your Functional Testing Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Functional Testing Process"
        description="We follow industry best practices to deliver effective functional testing solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Functional Testing Services"
        description="We offer comprehensive functional testing services using the latest tools and best practices."
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