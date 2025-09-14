import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  EnvelopeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Email Marketing Services - TesseraNova',
  description: 'Expert email marketing services to build and engage your email list. Campaign strategy, automation, and analytics for maximum ROI.',
  keywords: 'email marketing, email campaigns, marketing automation, email list building, email analytics',
});

const features = [
  {
    title: 'Campaign Strategy',
    description: 'Develop effective email campaigns.',
    icon: EnvelopeIcon,
  },
  {
    title: 'List Building',
    description: 'Grow your email subscriber base.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Automation',
    description: 'Set up automated email sequences.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Analytics & Testing',
    description: 'Optimize campaign performance.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Mailchimp',
  'HubSpot',
  'ActiveCampaign',
  'SendGrid',
  'Constant Contact',
  'ConvertKit',
  'AWeber',
  'Campaign Monitor',
  'MailerLite',
  'Drip',
  'Klaviyo',
  'Litmus',
  'Email on Acid',
  'Google Analytics',
  'Segment',
];

const processSteps = [
  {
    title: 'Audience Analysis',
    description: 'Understanding your email subscribers',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Strategy Development',
    description: 'Creating an email marketing strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Campaign Creation',
    description: 'Developing engaging email content',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Optimization',
    description: 'Improving campaign performance',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Email Campaigns',
    value: '400+',
  },
  {
    label: 'Open Rate',
    value: '+35%',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '20+',
  },
];

export default function EmailMarketingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Email Marketing"
        description="We help you build and engage your email list with strategic campaigns that drive conversions. Our data-driven approach ensures maximum ROI."
        icon={EnvelopeIcon}
        cta={{
          label: 'Start Your Email Campaign',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Email Marketing Process"
        description="We follow industry best practices to deliver effective email marketing results"
        steps={processSteps}
      />

      <ServiceDetails
        title="Email Marketing Services"
        description="We offer comprehensive email marketing services using the latest tools and best practices."
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