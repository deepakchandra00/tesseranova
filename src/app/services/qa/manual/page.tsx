import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Manual Testing Services - TesseraNova',
  description: 'Expert manual testing services to ensure your software quality. Comprehensive test planning, execution, and reporting.',
  keywords: 'manual testing, software testing, QA testing, test planning, test execution, bug reporting',
});

const features = [
  {
    title: 'Test Planning',
    description: 'Develop comprehensive test strategies.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'Test Execution',
    description: 'Execute detailed test cases.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Bug Reporting',
    description: 'Document and track issues.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Quality Metrics',
    description: 'Track and report quality metrics.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'JIRA',
  'TestRail',
  'Bugzilla',
  'Mantis',
  'Redmine',
  'Excel',
  'Word',
  'SharePoint',
  'Confluence',
  'TestLink',
  'Quality Center',
  'Zephyr',
  'qTest',
  'Xray',
  'TestLodge',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding testing requirements',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Test Planning',
    description: 'Creating test strategies and plans',
    icon: BeakerIcon,
  },
  {
    title: 'Test Execution',
    description: 'Executing test cases and scenarios',
    icon: CommandLineIcon,
  },
  {
    title: 'Reporting & Analysis',
    description: 'Documenting results and metrics',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Test Projects',
    value: '200+',
  },
  {
    label: 'Bug Detection',
    value: '95%',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '40+',
  },
];

export default function ManualTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Manual Testing"
        description="We provide comprehensive manual testing services to ensure your software meets quality standards. Our experienced testers deliver thorough testing coverage."
        icon={ClipboardDocumentCheckIcon}
        cta={{
          label: 'Start Your Testing Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Manual Testing Process"
        description="We follow industry best practices to deliver high-quality testing results"
        steps={processSteps}
      />

      <ServiceDetails
        title="Manual Testing Services"
        description="We offer comprehensive manual testing services using the latest tools and best practices."
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