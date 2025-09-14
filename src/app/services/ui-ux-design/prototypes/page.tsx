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
  title: 'Prototype Design Services - TesseraNova',
  description: 'Expert prototype design services for creating interactive, high-fidelity prototypes. Test and validate your ideas before development.',
  keywords: 'prototype design, interactive prototypes, UI/UX design, user testing, design validation, prototype development',
});

const features = [
  {
    title: 'Interactive Prototypes',
    description: 'Create clickable, interactive prototypes to test user flows and interactions.',
    icon: PencilSquareIcon,
  },
  {
    title: 'User Testing',
    description: 'Conduct user testing sessions to validate design decisions.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Animation & Transitions',
    description: 'Add smooth animations and transitions for realistic interactions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Multi-Device Testing',
    description: 'Test prototypes across different devices and screen sizes.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Figma',
  'Adobe XD',
  'InVision',
  'Proto.io',
  'Axure RP',
  'Principle',
  'Framer',
  'Origami Studio',
  'Material Design',
  'iOS Design',
  'Animation Tools',
  'User Testing Tools',
  'Analytics',
  'Design Systems',
  'Collaboration Tools',
];

const processSteps = [
  {
    title: 'Design Planning',
    description: 'Planning the prototype scope and user flows',
    icon: DocumentTextIcon,
  },
  {
    title: 'Prototype Creation',
    description: 'Building interactive, high-fidelity prototypes',
    icon: BeakerIcon,
  },
  {
    title: 'User Testing',
    description: 'Conducting user testing and gathering feedback',
    icon: CommandLineIcon,
  },
  {
    title: 'Refinement',
    description: 'Refining the prototype based on user feedback',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Prototype Projects',
    value: '150+',
  },
  {
    label: 'User Tests',
    value: '500+',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '12+',
  },
];

export default function PrototypeDesignPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Prototype Design"
        description="We specialize in creating interactive, high-fidelity prototypes that help validate your ideas before development. Test and refine your designs with real users."
        icon={PencilSquareIcon}
        cta={{
          label: 'Start Your Prototype Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Prototype Design Process"
        description="We follow industry best practices to deliver high-quality interactive prototypes"
        steps={processSteps}
      />

      <ServiceDetails
        title="Prototype Design Services"
        description="We offer comprehensive prototype design services using the latest tools and best practices."
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