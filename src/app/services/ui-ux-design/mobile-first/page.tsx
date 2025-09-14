import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  PencilSquareIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Mobile First Design Services - TesseraNova',
  description: 'Expert mobile-first design services for creating responsive, user-friendly interfaces. Design for mobile first, then scale up for larger screens.',
  keywords: 'mobile first design, responsive design, UI/UX design, mobile interface design, responsive web design',
});

const features = [
  {
    title: 'Mobile-First Approach',
    description: 'Design for mobile devices first, then scale up for larger screens.',
    icon: PencilSquareIcon,
  },
  {
    title: 'Responsive Design',
    description: 'Create fluid layouts that adapt to any screen size.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Touch Optimization',
    description: 'Optimize interfaces for touch interactions and gestures.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Performance Focus',
    description: 'Design with mobile performance and loading times in mind.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'Responsive Grids',
  'CSS Grid',
  'Flexbox',
  'Material Design',
  'iOS Design',
  'Touch Gestures',
  'Mobile Patterns',
  'Performance Tools',
  'Analytics',
  'Design Systems',
  'Prototyping Tools',
  'Testing Tools',
];

const processSteps = [
  {
    title: 'Mobile Analysis',
    description: 'Analyzing mobile user needs and behaviors',
    icon: DocumentTextIcon,
  },
  {
    title: 'Mobile Design',
    description: 'Creating mobile-first interface designs',
    icon: BeakerIcon,
  },
  {
    title: 'Responsive Scaling',
    description: 'Scaling designs for larger screens',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Optimization',
    description: 'Testing across devices and optimizing performance',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Mobile Projects',
    value: '180+',
  },
  {
    label: 'Device Coverage',
    value: '20+',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '15+',
  },
];

export default function MobileFirstDesignPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Mobile First Design"
        description="We specialize in creating mobile-first designs that provide exceptional user experiences across all devices. Design for mobile first, then scale up for larger screens."
        icon={PencilSquareIcon}
        cta={{
          label: 'Start Your Mobile Design Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Mobile First Design Process"
        description="We follow industry best practices to deliver high-quality mobile-first designs"
        steps={processSteps}
      />

      <ServiceDetails
        title="Mobile First Design Services"
        description="We offer comprehensive mobile-first design services using the latest tools and best practices."
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