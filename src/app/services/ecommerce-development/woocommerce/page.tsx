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
  title: 'WooCommerce Development Services - TesseraNova',
  description: 'Expert WooCommerce development services for building powerful eCommerce websites. Custom themes, plugins, and integrations.',
  keywords: 'WooCommerce, WordPress, eCommerce development, online store, custom themes, plugins',
});

const features = [
  {
    title: 'Custom Themes',
    description: 'Design and develop unique WooCommerce themes.',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Plugin Development',
    description: 'Create custom plugins for enhanced functionality.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Payment Integration',
    description: 'Integrate multiple payment gateways securely.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Mobile Commerce',
    description: 'Optimize for mobile shopping experience.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'WooCommerce',
  'WordPress',
  'PHP',
  'MySQL',
  'JavaScript',
  'jQuery',
  'CSS3',
  'HTML5',
  'REST API',
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
    description: 'Building your WooCommerce store',
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
    label: 'WooCommerce Projects',
    value: '100+',
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
    value: '25+',
  },
];

export default function WooCommercePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="WooCommerce Development"
        description="We specialize in building powerful eCommerce websites using WooCommerce. Our expertise ensures feature-rich, scalable, and user-friendly online stores."
        icon={ShoppingCartIcon}
        cta={{
          label: 'Start Your WooCommerce Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our WooCommerce Development Process"
        description="We follow industry best practices to deliver high-quality eCommerce solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="WooCommerce Development Services"
        description="We offer comprehensive WooCommerce development services using the latest technologies and best practices."
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