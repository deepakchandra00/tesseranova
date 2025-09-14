import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'SEO Services - TesseraNova',
  description: 'Expert SEO services to improve your website visibility and rankings. Comprehensive search engine optimization strategies.',
  keywords: 'SEO, search engine optimization, digital marketing, keyword research, on-page SEO, off-page SEO',
});

const features = [
  {
    title: 'Keyword Research',
    description: 'Identify high-value keywords for your business.',
    icon: MagnifyingGlassIcon,
  },
  {
    title: 'On-page SEO',
    description: 'Optimize your website content and structure.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Technical SEO',
    description: 'Improve website performance and indexing.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Analytics & Reporting',
    description: 'Track and measure SEO performance.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Google Analytics',
  'Google Search Console',
  'SEMrush',
  'Ahrefs',
  'Moz',
  'Screaming Frog',
  'GTmetrix',
  'PageSpeed Insights',
  'Schema Markup',
  'XML Sitemaps',
  'Meta Tags',
  'Canonical Tags',
  'Robots.txt',
  'Mobile Optimization',
  'Core Web Vitals',
];

const processSteps = [
  {
    title: 'SEO Audit',
    description: 'Analyzing your current SEO performance',
    icon: DocumentTextIcon,
  },
  {
    title: 'Strategy Development',
    description: 'Creating a comprehensive SEO strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Executing SEO optimizations',
    icon: CommandLineIcon,
  },
  {
    title: 'Monitoring & Optimization',
    description: 'Tracking results and making improvements',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'SEO Projects',
    value: '150+',
  },
  {
    label: 'Average Ranking',
    value: 'Top 10',
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

export default function SEOPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="SEO Services"
        description="We specialize in comprehensive SEO services to improve your website visibility and drive organic traffic. Our data-driven approach ensures sustainable results."
        icon={MagnifyingGlassIcon}
        cta={{
          label: 'Start Your SEO Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our SEO Process"
        description="We follow industry best practices to deliver measurable SEO results"
        steps={processSteps}
      />

      <ServiceDetails
        title="SEO Services"
        description="We offer comprehensive SEO services using the latest tools and best practices."
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