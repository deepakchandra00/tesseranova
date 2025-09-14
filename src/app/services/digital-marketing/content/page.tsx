import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  DocumentTextIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Content Marketing Services - TesseraNova',
  description: 'Expert content marketing services to create valuable, engaging content that drives traffic and conversions. Blog posts, whitepapers, case studies, and more.',
  keywords: 'content marketing, content strategy, blog writing, whitepapers, case studies, content creation',
});

const features = [
  {
    title: 'Content Strategy',
    description: 'Develop a comprehensive content plan.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Content Creation',
    description: 'Create engaging, valuable content.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Content Distribution',
    description: 'Reach your target audience effectively.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Performance Analytics',
    description: 'Measure content effectiveness.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'WordPress',
  'HubSpot',
  'Contentful',
  'Grammarly',
  'Ahrefs',
  'SEMrush',
  'Google Analytics',
  'Mailchimp',
  'Canva',
  'Adobe Creative Suite',
  'Yoast SEO',
  'BuzzSumo',
  'CoSchedule',
  'Trello',
  'Asana',
];

const processSteps = [
  {
    title: 'Content Audit',
    description: 'Analyzing your current content',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Strategy Development',
    description: 'Creating a content strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Content Creation',
    description: 'Developing valuable content',
    icon: CommandLineIcon,
  },
  {
    title: 'Distribution & Promotion',
    description: 'Reaching your target audience',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Content Pieces',
    value: '500+',
  },
  {
    label: 'Traffic Growth',
    value: '+60%',
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

export default function ContentMarketingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Content Marketing"
        description="We create valuable, engaging content that drives traffic and conversions. Our strategic approach ensures your content resonates with your target audience."
        icon={DocumentTextIcon}
        cta={{
          label: 'Start Your Content Strategy',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Content Marketing Process"
        description="We follow industry best practices to deliver effective content marketing results"
        steps={processSteps}
      />

      <ServiceDetails
        title="Content Marketing Services"
        description="We offer comprehensive content marketing services using the latest tools and best practices."
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