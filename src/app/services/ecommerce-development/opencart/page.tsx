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
  title: 'OpenCart Development Services - TesseraNova',
  description: 'Expert OpenCart development services for building feature-rich eCommerce stores. Custom themes, modules, and integrations.',
  keywords: 'OpenCart, eCommerce development, online store, custom themes, modules, PHP',
});

const features = [
  {
    title: 'Custom Themes',
    description: 'Design and develop unique OpenCart themes.',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Module Development',
    description: 'Create custom OpenCart modules.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Multi-store Setup',
    description: 'Manage multiple stores efficiently.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Payment Integration',
    description: 'Integrate multiple payment gateways.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'OpenCart',
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
  'Composer',
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
    description: 'Building your OpenCart store',
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
    label: 'OpenCart Projects',
    value: '60+',
  },
  {
    label: 'Performance Score',
    value: '94+',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '18+',
  },
];

export default function OpenCartPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="OpenCart Development"
        description="We specialize in building feature-rich eCommerce stores using OpenCart. Our expertise ensures powerful, flexible, and user-friendly online stores."
        icon={ShoppingCartIcon}
        cta={{
          label: 'Start Your OpenCart Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our OpenCart Development Process"
        description="We follow industry best practices to deliver high-quality eCommerce solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="OpenCart Development Services"
        description="We offer comprehensive OpenCart development services using the latest technologies and best practices."
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