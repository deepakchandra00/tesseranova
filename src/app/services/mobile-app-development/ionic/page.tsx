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
  title: 'Ionic Mobile App Development Services - TesseraNova',
  description: 'Expert Ionic development services for building cross-platform mobile applications using web technologies. From startups to enterprise solutions.',
  keywords: 'Ionic development, cross-platform apps, mobile development, Angular, React, Vue, mobile applications',
});

const features = [
  {
    title: 'Web Technologies',
    description: 'Build cross-platform mobile apps using familiar web technologies like HTML, CSS, and JavaScript.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Framework Integration',
    description: 'Leverage popular frameworks like Angular, React, or Vue.js for robust app development.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Native Features',
    description: 'Access native device features through Capacitor or Cordova plugins.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Progressive Web Apps',
    description: 'Create Progressive Web Apps (PWAs) that work seamlessly across platforms.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Ionic Framework',
  'Angular',
  'React',
  'Vue.js',
  'TypeScript',
  'Capacitor',
  'Cordova',
  'HTML5',
  'CSS3',
  'Sass',
  'RxJS',
  'NgRx',
  'Firebase',
  'PWA',
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
    description: 'Creating responsive and platform-specific user interfaces',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your Ionic app with best practices',
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
    label: 'Ionic Apps',
    value: '40+',
  },
  {
    label: 'Framework Usage',
    value: '3+',
  },
  {
    label: 'Client Satisfaction',
    value: '95%',
  },
  {
    label: 'Team Members',
    value: '10+',
  },
];

export default function IonicDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Ionic Development"
        description="We specialize in building cross-platform mobile applications using Ionic Framework. Our expertise ensures robust, scalable, and user-friendly solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Ionic Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Ionic Development Process"
        description="We follow industry best practices to deliver high-quality cross-platform applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="Ionic Development Services"
        description="We offer comprehensive Ionic development services using the latest technologies and best practices."
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