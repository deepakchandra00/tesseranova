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
  title: 'White Box & Black Box Testing Services - TesseraNova',
  description: 'Expert white box and black box testing services for comprehensive software validation. Code-level testing, functional testing, and quality assurance.',
  keywords: 'white box testing, black box testing, code testing, functional testing, software testing, quality assurance',
});

const features = [
  {
    title: 'White Box Testing',
    description: 'Code-level testing.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Black Box Testing',
    description: 'Functional testing.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Code Coverage',
    description: 'Comprehensive coverage.',
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
  'SonarQube',
  'JaCoCo',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'Kubernetes',
  'TestRail',
  'JIRA',
];

const processSteps = [
  {
    title: 'Code Analysis',
    description: 'Analyzing code structure',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Test Planning',
    description: 'Planning test strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Test Development',
    description: 'Writing test cases',
    icon: CommandLineIcon,
  },
  {
    title: 'Execution & Analysis',
    description: 'Running tests and analyzing results',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Testing Projects',
    value: '180+',
  },
  {
    label: 'Code Coverage',
    value: '85%',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '28+',
  },
];

export default function BoxTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="White Box & Black Box Testing"
        description="We provide expert white box and black box testing services for comprehensive software validation. Our team delivers thorough testing solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Testing Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Testing Process"
        description="We follow industry best practices to deliver effective testing solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Testing Services"
        description="We offer comprehensive white box and black box testing services using the latest tools and best practices."
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