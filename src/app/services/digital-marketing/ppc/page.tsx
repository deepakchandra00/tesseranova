import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CurrencyDollarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'PPC Management Services - TesseraNova',
  description: 'Expert PPC management services to maximize your advertising ROI. Google Ads, social media ads, and display advertising.',
  keywords: 'PPC, pay-per-click, Google Ads, social media advertising, display ads, digital marketing',
});

const features = [
  {
    title: 'Campaign Strategy',
    description: 'Develop effective PPC campaign strategies.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Ad Creation',
    description: 'Create compelling ad copy and visuals.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Budget Management',
    description: 'Optimize ad spend for maximum ROI.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Performance Tracking',
    description: 'Monitor and analyze campaign metrics.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Google Ads',
  'Facebook Ads',
  'LinkedIn Ads',
  'Twitter Ads',
  'Instagram Ads',
  'Google Analytics',
  'Google Tag Manager',
  'Conversion Tracking',
  'A/B Testing',
  'Remarketing',
  'Display Network',
  'Search Network',
  'Video Ads',
  'Shopping Ads',
  'Dynamic Ads',
];

const processSteps = [
  {
    title: 'Campaign Analysis',
    description: 'Analyzing your current PPC performance',
    icon: DocumentTextIcon,
  },
  {
    title: 'Strategy Development',
    description: 'Creating a comprehensive PPC strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Setting up and launching campaigns',
    icon: CommandLineIcon,
  },
  {
    title: 'Optimization',
    description: 'Continuously improving campaign performance',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'PPC Campaigns',
    value: '200+',
  },
  {
    label: 'Average ROI',
    value: '300%',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '25+',
  },
];

export default function PPCManagementPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="PPC Management"
        description="We specialize in managing PPC campaigns across multiple platforms to maximize your advertising ROI. Our data-driven approach ensures optimal results."
        icon={CurrencyDollarIcon}
        cta={{
          label: 'Start Your PPC Campaign',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our PPC Management Process"
        description="We follow industry best practices to deliver measurable PPC results"
        steps={processSteps}
      />

      <ServiceDetails
        title="PPC Management Services"
        description="We offer comprehensive PPC management services using the latest tools and best practices."
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