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
  title: 'Unit Testing Services - TesseraNova',
  description: 'Expert unit testing services to ensure code quality and reliability. Test-driven development, code coverage, and automated unit testing.',
  keywords: 'unit testing, test-driven development, code coverage, automated testing, software testing',
});

const features = [
  {
    title: 'Test-Driven Development',
    description: 'Implement TDD practices.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Code Coverage',
    description: 'Ensure comprehensive coverage.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Mocking & Stubbing',
    description: 'Isolate unit tests effectively.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Continuous Integration',
    description: 'Integrate with CI/CD pipelines.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'JUnit',
  'TestNG',
  'NUnit',
  'xUnit',
  'PyTest',
  'Jest',
  'Mocha',
  'Chai',
  'Mockito',
  'PowerMock',
  'Sinon',
  'Jest',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Analyzing code requirements',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Test Planning',
    description: 'Planning unit test strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Test Development',
    description: 'Writing unit test cases',
    icon: CommandLineIcon,
  },
  {
    title: 'Execution & Coverage',
    description: 'Running tests and measuring coverage',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Unit Test Projects',
    value: '200+',
  },
  {
    label: 'Code Coverage',
    value: '90%',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '30+',
  },
];

export default function UnitTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Unit Testing"
        description="We provide expert unit testing services to ensure code quality and reliability. Our team delivers comprehensive test coverage and maintains high code standards."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Unit Testing Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Unit Testing Process"
        description="We follow industry best practices to deliver effective unit testing solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Unit Testing Services"
        description="We offer comprehensive unit testing services using the latest tools and best practices."
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