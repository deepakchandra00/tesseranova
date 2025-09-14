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
  title: 'React Native Mobile App Development Services - TesseraNova',
  description: 'Expert React Native development services for building cross-platform mobile applications. From startups to enterprise solutions.',
  keywords: 'React Native development, cross-platform apps, mobile development, JavaScript, TypeScript, mobile applications',
});

const features = [
  {
    title: 'Cross-Platform Development',
    description: 'Build high-performance mobile apps for both iOS and Android using a single codebase.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Native Performance',
    description: 'Leverage native components for optimal performance and user experience.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Code Reusability',
    description: 'Maximize code reuse across platforms while maintaining native feel.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Rapid Development',
    description: 'Accelerate development with hot reloading and extensive component libraries.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'React Native',
  'JavaScript',
  'TypeScript',
  'Redux',
  'MobX',
  'React Navigation',
  'Native Base',
  'React Native Paper',
  'Firebase',
  'GraphQL',
  'Jest',
  'Detox',
  'CodePush',
  'Fastlane',
  'CI/CD',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your cross-platform app requirements and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces for both platforms',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your React Native app with best practices',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Deployment',
    description: 'Ensuring quality and publishing to both app stores',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'React Native Apps',
    value: '80+',
  },
  {
    label: 'Code Reuse',
    value: '90%',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '15+',
  },
];

export default function ReactNativeDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="React Native Development"
        description="We specialize in building high-performance, cross-platform mobile applications using React Native. Our expertise ensures robust, scalable, and user-friendly solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your React Native Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our React Native Development Process"
        description="We follow industry best practices to deliver high-quality cross-platform applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="React Native Development Services"
        description="We offer comprehensive React Native development services using the latest technologies and best practices."
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