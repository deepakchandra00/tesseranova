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
  title: 'Ruby on Rails Development Services - TesseraNova',
  description: 'Expert Ruby on Rails development services for building scalable web applications. Rapid development and robust solutions.',
  keywords: 'Ruby on Rails, RoR, full stack development, web development, rapid development',
});

const features = [
  {
    title: 'Rapid Development',
    description: 'Build applications quickly with Rails conventions.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Scalable Solutions',
    description: 'Design and implement scalable applications.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Security First',
    description: 'Built-in security features and best practices.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Cloud Ready',
    description: 'Deploy and scale applications in the cloud.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Ruby',
  'Ruby on Rails',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Sidekiq',
  'RSpec',
  'Capybara',
  'Docker',
  'AWS',
  'Heroku',
  'CI/CD',
  'Git',
  'GitHub Actions',
  'Bundler',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your application requirements and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'Architecture Design',
    description: 'Designing scalable and maintainable architecture',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your Rails application',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Deployment',
    description: 'Ensuring quality and deploying to production',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Rails Projects',
    value: '60+',
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

export default function RubyOnRailsPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Ruby on Rails Development"
        description="We specialize in building scalable web applications using Ruby on Rails. Our expertise ensures rapid development and robust solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Rails Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Rails Development Process"
        description="We follow industry best practices to deliver high-quality Rails applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="Ruby on Rails Development Services"
        description="We offer comprehensive Rails development services using the latest technologies and best practices."
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