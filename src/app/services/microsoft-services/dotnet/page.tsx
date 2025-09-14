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
  title: '.NET/.NET Core Development Services - TesseraNova',
  description: 'Expert .NET and .NET Core development services for building modern, scalable, and secure applications. From web applications to enterprise solutions.',
  keywords: '.NET development, .NET Core, C# development, enterprise applications, web applications, microservices',
});

const features = [
  {
    title: 'Cross-Platform Development',
    description: 'Build applications that run on Windows, Linux, and macOS using .NET Core.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Microservices Architecture',
    description: 'Develop scalable microservices using .NET Core\'s lightweight framework.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamlessly integrate with Azure and other cloud platforms.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'High Performance',
    description: 'Leverage .NET\'s performance optimizations for fast and efficient applications.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  '.NET 8',
  '.NET Core',
  'C#',
  'ASP.NET Core',
  'Entity Framework Core',
  'SQL Server',
  'Azure',
  'Docker',
  'Kubernetes',
  'Microservices',
  'REST APIs',
  'gRPC',
  'SignalR',
  'Blazor',
  'XUnit',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your .NET application needs and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'Architecture Design',
    description: 'Planning the application structure and technology stack',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your .NET application with best practices',
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
    label: '.NET Projects',
    value: '250+',
  },
  {
    label: 'Performance Score',
    value: '97+',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '35+',
  },
];

export default function DotNetDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title=".NET/.NET Core Development"
        description="We specialize in building modern, scalable, and secure applications using .NET and .NET Core. Our expertise ensures robust and maintainable solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your .NET Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our .NET Development Process"
        description="We follow industry best practices to deliver high-quality .NET applications"
        steps={processSteps}
      />

      <ServiceDetails
        title=".NET Development Services"
        description="We offer comprehensive .NET development services using the latest features and best practices."
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