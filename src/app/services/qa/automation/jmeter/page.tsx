import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  ChartBarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Apache JMeter Testing Services - TesseraNova',
  description: 'Expert JMeter testing services for performance and load testing. Load testing, stress testing, and performance monitoring solutions.',
  keywords: 'JMeter testing, performance testing, load testing, stress testing, automated testing',
});

const features = [
  {
    title: 'Load Testing',
    description: 'Test application under load.',
    icon: ChartBarIcon,
  },
  {
    title: 'Stress Testing',
    description: 'Test system under stress.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Performance Monitoring',
    description: 'Monitor system performance.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Distributed Testing',
    description: 'Run tests across multiple machines.',
    icon: ArrowPathIcon,
  },
];

const technologies = [
  'Apache JMeter',
  'Java',
  'Jenkins',
  'GitLab CI',
  'GitHub Actions',
  'Docker',
  'Grafana',
  'InfluxDB',
  'Prometheus',
  'JMeter Plugins',
  'JMeter CLI',
  'JMeter GUI',
  'JMeter Reports',
  'JMeter Scripts',
  'JMeter Properties',
];

const processSteps = [
  {
    title: 'Test Planning',
    description: 'Planning performance test scenarios',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Script Development',
    description: 'Creating JMeter test scripts',
    icon: BeakerIcon,
  },
  {
    title: 'Test Execution',
    description: 'Running performance tests',
    icon: CommandLineIcon,
  },
  {
    title: 'Analysis & Reporting',
    description: 'Analyzing test results',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Performance Projects',
    value: '50+',
  },
  {
    label: 'Load Capacity',
    value: '100K+',
  },
  {
    label: 'Client Satisfaction',
    value: '95%',
  },
  {
    label: 'Team Members',
    value: '15+',
  },
];

export default function JMeterTestingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Apache JMeter Testing"
        description="We provide expert JMeter testing services for performance and load testing. Our team delivers comprehensive performance testing solutions."
        icon={ChartBarIcon}
        cta={{
          label: 'Start Your JMeter Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our JMeter Testing Process"
        description="We follow industry best practices to deliver effective performance testing solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="JMeter Testing Services"
        description="We offer comprehensive JMeter testing services using the latest tools and best practices."
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