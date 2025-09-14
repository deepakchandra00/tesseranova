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
  title: 'Shopify Development Services - TesseraNova',
  description: 'Expert Shopify development services for building modern eCommerce stores. Custom themes, apps, and integrations.',
  keywords: 'Shopify, eCommerce development, online store, custom themes, apps, liquid',
});

const features = [
  {
    title: 'Custom Themes',
    description: 'Design and develop unique Shopify themes.',
    icon: ShoppingCartIcon,
  },
  {
    title: 'App Development',
    description: 'Create custom Shopify apps.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Store Setup',
    description: 'Complete store setup and configuration.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Mobile Optimization',
    description: 'Optimize for mobile shopping experience.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Shopify',
  'Liquid',
  'JavaScript',
  'React',
  'Node.js',
  'GraphQL',
  'CSS3',
  'HTML5',
  'Shopify API',
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
    description: 'Building your Shopify store',
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
    label: 'Shopify Projects',
    value: '80+',
  },
  {
    label: 'Conversion Rate',
    value: '+40%',
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

export default function ShopifyPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Shopify Development"
        description="We specialize in building modern eCommerce stores using Shopify. Our expertise ensures beautiful, functional, and user-friendly online stores."
        icon={ShoppingCartIcon}
        cta={{
          label: 'Start Your Shopify Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Shopify Development Process"
        description="We follow industry best practices to deliver high-quality eCommerce solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Shopify Development Services"
        description="We offer comprehensive Shopify development services using the latest technologies and best practices."
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