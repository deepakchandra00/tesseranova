import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  ShoppingCartIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'BigCommerce Development Services - TesseraNova',
  description: 'Expert BigCommerce development services for building scalable eCommerce stores. Custom themes, apps, and integrations.',
  keywords: 'BigCommerce, eCommerce development, online store, custom themes, apps, stencil',
});

const features = [
  {
    title: 'Custom Themes',
    description: 'Design and develop unique BigCommerce themes.',
    icon: ShoppingCartIcon,
  },
  {
    title: 'App Development',
    description: 'Create custom BigCommerce apps.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'API Integration',
    description: 'Integrate with third-party services.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Multi-channel',
    description: 'Sell across multiple channels.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'BigCommerce',
  'Stencil',
  'JavaScript',
  'React',
  'Node.js',
  'GraphQL',
  'CSS3',
  'HTML5',
  'BigCommerce API',
  'Payment Gateways',
  'SSL',
  'SEO',
  'Analytics',
  'Git',
  'Docker',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your eCommerce needs and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'Design & Planning',
    description: 'Creating the perfect eCommerce solution',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your BigCommerce store',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Launch',
    description: 'Ensuring quality and going live',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'BigCommerce Projects',
    value: '40+',
  },
  {
    label: 'Conversion Rate',
    value: '+38%',
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

export default function BigCommercePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="BigCommerce Development"
        description="We specialize in building scalable eCommerce stores using BigCommerce. Our expertise ensures powerful, flexible, and user-friendly online stores."
        icon={ShoppingCartIcon}
        cta={{
          label: 'Start Your BigCommerce Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our BigCommerce Development Process"
        description="We follow industry best practices to deliver high-quality eCommerce solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="BigCommerce Development Services"
        description="We offer comprehensive BigCommerce development services using the latest technologies and best practices."
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