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
  title: 'Angular/React & .NET Development Services - TesseraNova',
  description: 'Expert full-stack development services combining modern frontend frameworks with .NET backend. Angular, React, and .NET solutions.',
  keywords: 'Angular, React, .NET, full stack development, web development, enterprise applications',
});

const features = [
  {
    title: 'Modern Frontend',
    description: 'Build interactive UIs with Angular or React.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Enterprise Backend',
    description: 'Develop robust backend services with .NET.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Scalable Architecture',
    description: 'Design and implement scalable solutions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless integration with cloud services.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Angular',
  'React',
  '.NET Core',
  'ASP.NET',
  'TypeScript',
  'C#',
  'Entity Framework',
  'SQL Server',
  'Azure',
  'Docker',
  'CI/CD',
  'Jest',
  'xUnit',
  'Git',
  'Azure DevOps',
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
    description: 'Building your full-stack application',
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
    label: 'Full Stack Projects',
    value: '75+',
  },
  {
    label: 'Performance Score',
    value: '96+',
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

export default function AngularReactDotNetPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Angular/React & .NET Development"
        description="We specialize in building enterprise-grade applications using Angular/React with .NET. Our expertise ensures robust, scalable, and maintainable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Full Stack Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Full Stack Development Process"
        description="We follow industry best practices to deliver high-quality full-stack applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="Angular/React & .NET Development Services"
        description="We offer comprehensive full-stack development services using the latest technologies and best practices."
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