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
  title: 'eCommerce Design Services - TesseraNova',
  description: 'Expert eCommerce design services for creating engaging, conversion-focused online shopping experiences. Design solutions that drive sales and customer satisfaction.',
  keywords: 'eCommerce design, online store design, UI/UX design, shopping experience, conversion optimization, user interface design',
});

const features = [
  {
    title: 'Product Showcase',
    description: 'Create engaging product displays that highlight key features and benefits.',
    icon: PencilSquareIcon,
  },
  {
    title: 'Shopping Experience',
    description: 'Design intuitive shopping flows that guide users to purchase.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Checkout Optimization',
    description: 'Streamline checkout processes to reduce cart abandonment.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Mobile Commerce',
    description: 'Optimize shopping experiences for mobile devices.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'Material Design',
  'Design Systems',
  'User Flows',
  'Information Architecture',
  'Prototyping Tools',
  'Analytics Tools',
  'A/B Testing',
  'Heat Mapping',
  'User Research',
  'Accessibility Tools',
  'Performance Tools',
  'SEO Tools',
];

const processSteps = [
  {
    title: 'Market Research',
    description: 'Understanding target audience and market trends',
    icon: DocumentTextIcon,
  },
  {
    title: 'User Journey Mapping',
    description: 'Mapping optimal shopping experiences',
    icon: BeakerIcon,
  },
  {
    title: 'Interface Design',
    description: 'Creating engaging and conversion-focused interfaces',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Optimization',
    description: 'Testing with users and optimizing for conversions',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'eCommerce Projects',
    value: '80+',
  },
  {
    label: 'Conversion Rate',
    value: '+35%',
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

export default function EcommerceDesignPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="eCommerce Design"
        description="We specialize in creating engaging and conversion-focused eCommerce experiences. Our designs focus on driving sales while ensuring excellent user experience."
        icon={PencilSquareIcon}
        cta={{
          label: 'Start Your eCommerce Design Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our eCommerce Design Process"
        description="We follow industry best practices to deliver high-quality eCommerce interfaces"
        steps={processSteps}
      />

      <ServiceDetails
        title="eCommerce Design Services"
        description="We offer comprehensive eCommerce design services using the latest tools and best practices."
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