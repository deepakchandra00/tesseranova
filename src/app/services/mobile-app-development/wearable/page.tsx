import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Wearable App Development Services - TesseraNova',
  description: 'Expert wearable app development services for smartwatches and fitness trackers. Create innovative applications for Apple Watch, Wear OS, and other wearable devices.',
  keywords: 'wearable app development, smartwatch apps, fitness apps, Apple Watch, Wear OS, wearable technology',
});

const features = [
  {
    title: 'Multi-Platform Support',
    description: 'Develop apps for Apple Watch, Wear OS, and other wearable platforms.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Health & Fitness',
    description: 'Create health monitoring and fitness tracking applications.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Battery Optimization',
    description: 'Implement efficient power management for extended battery life.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Sensor Integration',
    description: 'Leverage device sensors for enhanced functionality.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'watchOS',
  'Wear OS',
  'Swift',
  'Kotlin',
  'HealthKit',
  'Google Fit',
  'Core Motion',
  'Watch Connectivity',
  'Complications',
  'Notifications',
  'Bluetooth LE',
  'Sensor APIs',
  'Cloud Integration',
  'Analytics',
  'Testing Tools',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your wearable app requirements and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces for small screens',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your wearable app with best practices',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Deployment',
    description: 'Ensuring quality and publishing to app stores',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Wearable Apps',
    value: '25+',
  },
  {
    label: 'Platform Support',
    value: '4+',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '8+',
  },
];

export default function WearableDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Wearable App Development"
        description="We specialize in building innovative applications for smartwatches and fitness trackers. Our expertise ensures engaging and useful wearable experiences."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Wearable Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Wearable Development Process"
        description="We follow industry best practices to deliver high-quality wearable applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="Wearable Development Services"
        description="We offer comprehensive wearable app development services using the latest technologies and best practices."
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