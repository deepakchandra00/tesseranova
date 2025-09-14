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
  title: 'Magento Development Services - TesseraNova',
  description: 'Expert Magento development services for building enterprise-grade eCommerce platforms. Custom extensions, themes, and integrations.',
  keywords: 'Magento, eCommerce development, enterprise eCommerce, custom extensions, themes',
});

const features = [
  {
    title: 'Enterprise Solutions',
    description: 'Build scalable enterprise eCommerce platforms.',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Custom Extensions',
    description: 'Develop custom Magento extensions.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Multi-store Setup',
    description: 'Manage multiple stores efficiently.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize for speed and scalability.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Magento 2',
  'PHP',
  'MySQL',
  'JavaScript',
  'jQuery',
  'CSS3',
  'HTML5',
  'REST API',
  'GraphQL',
  'Payment Gateways',
  'SSL',
  'Redis',
  'Varnish',
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
    title: 'Architecture Design',
    description: 'Designing scalable eCommerce architecture',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your Magento store',
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
    label: 'Magento Projects',
    value: '50+',
  },
  {
    label: 'Performance Score',
    value: '95+',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '20+',
  },
];

export default function MagentoPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Magento Development"
        description="We specialize in building enterprise-grade eCommerce platforms using Magento. Our expertise ensures scalable, secure, and feature-rich online stores."
        icon={ShoppingCartIcon}
        cta={{
          label: 'Start Your Magento Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Magento Development Process"
        description="We follow industry best practices to deliver high-quality eCommerce solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Magento Development Services"
        description="We offer comprehensive Magento development services using the latest technologies and best practices."
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