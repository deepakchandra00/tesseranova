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
  title: 'Flutter Mobile App Development Services - TesseraNova',
  description: 'Expert Flutter development services for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
  keywords: 'Flutter development, cross-platform apps, mobile development, Dart, Google Flutter, mobile applications',
});

const features = [
  {
    title: 'Cross-Platform Development',
    description: 'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Material & Cupertino Design',
    description: 'Create stunning user interfaces using Flutter\'s rich set of Material Design and Cupertino widgets.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Hot Reload',
    description: 'Accelerate development with Flutter\'s hot reload feature for instant updates.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Native Performance',
    description: 'Deliver high-performance applications with Flutter\'s compiled code.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Flutter',
  'Dart',
  'Material Design',
  'Cupertino',
  'Provider',
  'Bloc',
  'GetX',
  'Firebase',
  'REST APIs',
  'GraphQL',
  'SQLite',
  'Hive',
  'Flutter Web',
  'Flutter Desktop',
  'Unit Testing',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your cross-platform app requirements and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful and responsive user interfaces',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your Flutter app with best practices',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Deployment',
    description: 'Ensuring quality and publishing to multiple platforms',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Flutter Apps',
    value: '60+',
  },
  {
    label: 'Platform Coverage',
    value: '3+',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '12+',
  },
];

export default function FlutterDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Flutter Development"
        description="We specialize in building beautiful, high-performance cross-platform applications using Flutter. Our expertise ensures robust, scalable, and user-friendly solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Flutter Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Flutter Development Process"
        description="We follow industry best practices to deliver high-quality cross-platform applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="Flutter Development Services"
        description="We offer comprehensive Flutter development services using the latest technologies and best practices."
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