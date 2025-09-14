import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Next.js Development Services - TesseraNova',
  description: 'Expert Next.js development services for building modern, SEO-friendly web applications. From static sites to full-stack applications.',
  keywords: 'Next.js development, React framework, server-side rendering, static site generation, web applications',
});

const features = [
  {
    title: 'Server-Side Rendering',
    description: 'Build SEO-friendly applications with Next.js server-side rendering capabilities.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Static Site Generation',
    description: 'Generate static websites for optimal performance and SEO.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'API Routes',
    description: 'Create powerful API endpoints within your Next.js application.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Optimized Performance',
    description: 'Leverage Next.js built-in optimizations for superior performance.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'GraphQL',
  'REST APIs',
  'Docker',
  'AWS',
  'Vercel',
  'Jest',
  'Cypress',
  'GitHub Actions',
];

const processSteps = [
  {
    title: 'Project Planning',
    description: 'Defining requirements and architecture for your Next.js application',
    icon: DocumentTextIcon,
  },
  {
    title: 'Development Setup',
    description: 'Setting up the Next.js project with best practices and tools',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Building your application with Next.js features and optimizations',
    icon: CommandLineIcon,
  },
  {
    title: 'Deployment & Optimization',
    description: 'Deploying and optimizing your Next.js application for production',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Next.js Projects',
    value: '100+',
  },
  {
    label: 'Performance Score',
    value: '98+',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '15+',
  },
];

export default function NextDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Next.js Development"
        description="We specialize in building modern, SEO-friendly web applications using Next.js. Our expertise ensures optimal performance and user experience."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Next.js Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Next.js Development Process"
        description="We follow industry best practices to deliver high-quality Next.js applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="Next.js Development Services"
        description="We offer comprehensive Next.js development services using the latest features and best practices."
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