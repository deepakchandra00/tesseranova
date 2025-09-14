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
  title: 'Android App Development Services - TesseraNova',
  description: 'Expert Android app development services for building native, high-performance mobile applications. From startups to enterprise solutions.',
  keywords: 'Android development, mobile apps, native Android, Kotlin, Java, Android Studio, mobile applications',
});

const features = [
  {
    title: 'Native Development',
    description: 'Build high-performance native Android applications using Kotlin and Java.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Material Design',
    description: 'Create beautiful and intuitive user interfaces following Material Design guidelines.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize app performance for smooth user experience across devices.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Offline Support',
    description: 'Implement robust offline capabilities and data synchronization.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Kotlin',
  'Java',
  'Android SDK',
  'Android Studio',
  'Material Design',
  'Jetpack Components',
  'Room Database',
  'Retrofit',
  'Dagger Hilt',
  'Coroutines',
  'Flow',
  'Firebase',
  'Google Play Services',
  'Android Architecture Components',
  'Unit Testing',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your Android app requirements and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your Android app with best practices',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Deployment',
    description: 'Ensuring quality and publishing to Google Play',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Android Apps',
    value: '150+',
  },
  {
    label: 'Play Store Rating',
    value: '4.8+',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '25+',
  },
];

export default function AndroidDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Android App Development"
        description="We specialize in building high-performance, native Android applications. Our expertise ensures robust, scalable, and user-friendly mobile solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Android Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Android Development Process"
        description="We follow industry best practices to deliver high-quality Android applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="Android Development Services"
        description="We offer comprehensive Android development services using the latest technologies and best practices."
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