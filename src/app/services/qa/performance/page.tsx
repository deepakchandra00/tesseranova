import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  BoltIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Performance Testing Services - TesseraNova',
  description: 'Expert performance testing services to ensure optimal software performance. Load testing, stress testing, and scalability testing.',
  keywords: 'performance testing, load testing, stress testing, scalability testing, software testing',
});

const features = [
  {
    title: 'Load Testing',
    description: 'Test system under load.',
    icon: BoltIcon,
  },
  {
    title: 'Stress Testing',
    description: 'Test system limits.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Scalability Testing',
    description: 'Test system scaling.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Performance Monitoring',
    description: 'Monitor system metrics.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'JMeter',
  'Gatling',
  'K6',
  'Locust',
  'New Relic',
  'Dynatrace',
  'AppDynamics',
  'Prometheus',
  'Grafana',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'Kubernetes',
  'Cloud Platforms',
];

const processSteps = [
  {
    title: 'Performance Analysis',
    description: 'Analyzing performance requirements',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Test Planning',
    description: 'Planning performance test strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Test Development',
    description: 'Writing performance test scripts',
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
    label: 'Performance Projects',
    value: '100+',
  },
  {
    label: 'Performance Improvement',
    value: '40%',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '20+',
  },
];

export default function PerformanceTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Performance Testing"
        description="We provide expert performance testing services to ensure optimal software performance. Our team delivers comprehensive performance testing solutions."
        icon={BoltIcon}
        cta={{
          label: 'Start Your Performance Testing Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Performance Testing Process"
        description="We follow industry best practices to deliver effective performance testing solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Performance Testing Services"
        description="We offer comprehensive performance testing services using the latest tools and best practices."
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