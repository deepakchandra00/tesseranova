import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Social Media Marketing Services - TesseraNova',
  description: 'Expert social media marketing services to build your brand presence and engage with your audience. Content strategy, community management, and paid social.',
  keywords: 'social media marketing, SMM, social media management, content strategy, community management, paid social',
});

const features = [
  {
    title: 'Content Strategy',
    description: 'Develop engaging social media content.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Community Management',
    description: 'Build and engage your social community.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Paid Social',
    description: 'Run targeted social media campaigns.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Analytics & Reporting',
    description: 'Track and measure social performance.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Facebook',
  'Instagram',
  'LinkedIn',
  'Twitter',
  'TikTok',
  'Pinterest',
  'YouTube',
  'Hootsuite',
  'Buffer',
  'Sprout Social',
  'Later',
  'Canva',
  'Adobe Creative Suite',
  'Google Analytics',
  'Social Listening Tools',
];

const processSteps = [
  {
    title: 'Social Audit',
    description: 'Analyzing your current social presence',
    icon: DocumentTextIcon,
  },
  {
    title: 'Strategy Development',
    description: 'Creating a comprehensive social strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Content Creation',
    description: 'Developing engaging social content',
    icon: CommandLineIcon,
  },
  {
    title: 'Community Management',
    description: 'Building and engaging your audience',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Social Campaigns',
    value: '300+',
  },
  {
    label: 'Engagement Rate',
    value: '+45%',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '30+',
  },
];

export default function SocialMediaMarketingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Social Media Marketing"
        description="We specialize in building strong social media presence and engaging with your audience. Our creative approach ensures meaningful connections and brand growth."
        icon={ChatBubbleLeftRightIcon}
        cta={{
          label: 'Start Your Social Media Campaign',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Social Media Marketing Process"
        description="We follow industry best practices to deliver engaging social media results"
        steps={processSteps}
      />

      <ServiceDetails
        title="Social Media Marketing Services"
        description="We offer comprehensive social media marketing services using the latest tools and best practices."
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