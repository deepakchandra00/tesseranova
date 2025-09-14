import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CurrencyDollarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Fintech Industry Solutions - TesseraNova',
  description: 'Expert technology solutions for the fintech industry. Digital banking, payment processing, and financial analytics.',
  keywords: 'fintech technology, digital banking, payment processing, financial analytics, blockchain, industry solutions',
});

const features = [
  {
    title: 'Digital Banking',
    description: 'Modern banking solutions.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Payment Processing',
    description: 'Secure payment solutions.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Financial Analytics',
    description: 'Advanced analytics solutions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Blockchain Solutions',
    description: 'Innovative blockchain technology.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Blockchain',
  'Cloud Platforms',
  'Mobile Banking Apps',
  'AI/ML Solutions',
  'Data Analytics',
  'Payment Gateways',
  'Cryptocurrency',
  'Smart Contracts',
  'Digital Wallets',
  'Fraud Detection',
  'Risk Management',
  'Compliance Tools',
  'Real-time Processing',
  'Predictive Analytics',
  'Business Intelligence',
];

const processSteps = [
  {
    title: 'Financial Analysis',
    description: 'Analyzing financial needs',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Solution Design',
    description: 'Designing financial solutions',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Implementing solutions',
    icon: CommandLineIcon,
  },
  {
    title: 'Security & Compliance',
    description: 'Ensuring security and compliance',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Fintech Projects',
    value: '150+',
  },
  {
    label: 'Transaction Volume',
    value: '$1B+',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '35+',
  },
];

export default function FintechPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Fintech Industry"
        description="We provide expert technology solutions for the fintech industry. Our team delivers comprehensive financial technology solutions."
        icon={CurrencyDollarIcon}
        cta={{
          label: 'Start Your Fintech Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Fintech Solutions Process"
        description="We follow industry best practices to deliver effective fintech solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Fintech Industry Solutions"
        description="We offer comprehensive technology solutions for the fintech industry using the latest tools and best practices."
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