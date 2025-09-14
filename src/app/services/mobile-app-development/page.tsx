import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  DevicePhoneMobileIcon,
  CommandLineIcon,
  GlobeAltIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Mobile App Development Services - TesseraNova',
  description: 'Expert mobile app development services for iOS, Android, and cross-platform solutions. From native to hybrid apps, we deliver high-performance mobile applications.',
  keywords: 'mobile app development, iOS, Android, React Native, Flutter, Ionic, enterprise mobile solutions',
});

const features = [
  {
    title: 'Native App Development',
    description: 'High-performance native applications for iOS and Android platforms.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Cross-Platform Solutions',
    description: 'Efficient cross-platform development using React Native, Flutter, and Ionic.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Enterprise Solutions',
    description: 'Scalable and secure mobile solutions for enterprise needs.',
    icon: CommandLineIcon,
  },
  {
    title: 'Wearable Technology',
    description: 'Innovative solutions for wearable devices and IoT integration.',
    icon: BeakerIcon,
  },
];

const technologies = [
  'iOS',
  'Android',
  'React Native',
  'Flutter',
  'Ionic',
  'Swift',
  'Kotlin',
  'Java',
  'Objective-C',
  'Xamarin',
  'Firebase',
  'AWS Amplify',
  'Redux',
  'GraphQL',
  'REST APIs',
];

export default function MobileAppDevelopmentPage() {
  return (
    <ServiceDetails
      title="Mobile App Development"
      description="We create innovative and user-friendly mobile applications that help businesses connect with their customers on the go. Our expertise spans native and cross-platform development, ensuring the best performance and user experience."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Start Your Mobile Project',
        href: '/contact',
      }}
    />
  );
} 