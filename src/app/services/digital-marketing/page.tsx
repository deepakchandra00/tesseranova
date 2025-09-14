import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  ChartBarIcon,
  MegaphoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Digital Marketing Services - TesseraNova',
  description: 'Comprehensive digital marketing services including SEO, PPC, social media marketing, content marketing, and email marketing. Drive growth and engagement.',
  keywords: 'digital marketing, SEO, PPC, social media marketing, content marketing, email marketing',
});

const features = [
  {
    title: 'Search Engine Optimization',
    description: 'Improve your online visibility and drive organic traffic through effective SEO strategies.',
    icon: ChartBarIcon,
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage with your audience and build brand presence across social media platforms.',
    icon: MegaphoneIcon,
  },
  {
    title: 'Content Marketing',
    description: 'Create valuable content that attracts and engages your target audience.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Email Marketing',
    description: 'Build relationships and drive conversions through targeted email campaigns.',
    icon: EnvelopeIcon,
  },
];

const technologies = [
  'SEO Tools',
  'PPC Platforms',
  'Social Media Tools',
  'Content Management',
  'Email Marketing',
  'Analytics Tools',
  'Marketing Automation',
  'CRM Integration',
  'Social Media Platforms',
  'Content Creation Tools',
  'Email Platforms',
  'SEO Analytics',
  'PPC Management',
  'Social Analytics',
  'Marketing Analytics',
];

export default function DigitalMarketingPage() {
  return (
    <ServiceDetails
      title="Digital Marketing"
      description="We provide comprehensive digital marketing services to help businesses grow their online presence and reach their target audience effectively. Our data-driven approach ensures measurable results."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Start Your Marketing Campaign',
        href: '/contact',
      }}
    />
  );
} 