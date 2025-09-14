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
  title: 'ASP.NET Development Services - TesseraNova',
  description: 'Expert ASP.NET development services for building enterprise-grade web applications. Robust, secure, and scalable solutions.',
  keywords: 'ASP.NET, .NET, full stack development, web development, enterprise applications',
});

const features = [
  {
    title: 'Enterprise Solutions',
    description: 'Build robust enterprise-grade applications.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Security First',
    description: 'Built-in security features and best practices.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Scalable Architecture',
    description: 'Design and implement scalable solutions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless integration with Azure cloud services.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'ASP.NET Core',
  'C#',
  'Entity Framework',
  'SQL Server',
  'Azure',
  'Docker',
  'CI/CD',
  'xUnit',
  'Moq',
  'Git',
  'Azure DevOps',
  'SignalR',
  'Blazor',
  'Razor Pages',
  'Web API',
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
    description: 'Building your ASP.NET application',
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
    label: 'ASP.NET Projects',
    value: '80+',
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
    value: '25+',
  },
];

export default function ASPNetPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="ASP.NET Development"
        description="We specialize in building enterprise-grade web applications using ASP.NET. Our expertise ensures robust, secure, and scalable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your ASP.NET Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our ASP.NET Development Process"
        description="We follow industry best practices to deliver high-quality ASP.NET applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="ASP.NET Development Services"
        description="We offer comprehensive ASP.NET development services using the latest technologies and best practices."
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