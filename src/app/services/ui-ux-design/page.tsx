import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  CubeIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'UI/UX Design Services - TesseraNova',
  description: 'Expert UI/UX design services creating engaging and intuitive digital experiences. From wireframes to prototypes, we deliver user-centered design solutions.',
  keywords: 'UI/UX design, wireframes, prototypes, mobile-first design, SAAS design, eCommerce design',
});

const features = [
  {
    title: 'Wireframing & Prototyping',
    description: 'Create detailed wireframes and interactive prototypes for your digital products.',
    icon: PaintBrushIcon,
  },
  {
    title: 'Mobile-First Design',
    description: 'Responsive and adaptive designs that work seamlessly across all devices.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'SAAS & eCommerce Design',
    description: 'Specialized design solutions for SAAS platforms and eCommerce websites.',
    icon: CubeIcon,
  },
  {
    title: 'User Research & Testing',
    description: 'Comprehensive user research and testing to ensure optimal user experience.',
    icon: PresentationChartLineIcon,
  },
];

const technologies = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'InVision',
  'Adobe Creative Suite',
  'Prototyping Tools',
  'User Research Tools',
  'Analytics Tools',
  'Design Systems',
  'Material Design',
  'iOS Design Guidelines',
  'Responsive Design',
  'Accessibility Standards',
  'User Testing Tools',
  'Design Collaboration',
];

export default function UIUXDesignPage() {
  return (
    <ServiceDetails
      title="UI/UX Design"
      description="We create intuitive and engaging user experiences that help businesses connect with their users. Our design process combines creativity with user-centered methodologies to deliver exceptional digital products."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Start Your Design Project',
        href: '/contact',
      }}
    />
  );
} 