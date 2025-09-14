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
  title: 'iOS App Development Services - TesseraNova',
  description: 'Expert iOS app development services for building native, high-performance mobile applications. From startups to enterprise solutions.',
  keywords: 'iOS development, mobile apps, native iOS, Swift, Objective-C, Xcode, mobile applications',
});

const features = [
  {
    title: 'Native Development',
    description: 'Build high-performance native iOS applications using Swift and Objective-C.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Apple Design',
    description: 'Create beautiful and intuitive user interfaces following Apple\'s Human Interface Guidelines.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize app performance for smooth user experience across iOS devices.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Offline Support',
    description: 'Implement robust offline capabilities and data synchronization.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Swift',
  'Objective-C',
  'iOS SDK',
  'Xcode',
  'SwiftUI',
  'UIKit',
  'Core Data',
  'Alamofire',
  'Combine',
  'Firebase',
  'Apple Pay',
  'Push Notifications',
  'Core Animation',
  'ARKit',
  'Unit Testing',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your iOS app requirements and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your iOS app with best practices',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Deployment',
    description: 'Ensuring quality and publishing to App Store',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'iOS Apps',
    value: '120+',
  },
  {
    label: 'App Store Rating',
    value: '4.9+',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '20+',
  },
];

export default function IOSDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="iOS App Development"
        description="We specialize in building high-performance, native iOS applications. Our expertise ensures robust, scalable, and user-friendly mobile solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your iOS Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our iOS Development Process"
        description="We follow industry best practices to deliver high-quality iOS applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="iOS Development Services"
        description="We offer comprehensive iOS development services using the latest technologies and best practices."
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