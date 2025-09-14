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
  title: 'ASP.NET MVC Development Services - TesseraNova',
  description: 'Expert ASP.NET MVC development services for building robust, scalable, and maintainable web applications. From enterprise solutions to modern web applications.',
  keywords: 'ASP.NET MVC development, web applications, enterprise solutions, C# development, Microsoft technologies',
});

const features = [
  {
    title: 'MVC Architecture',
    description: 'Build well-structured applications using the Model-View-Controller pattern.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Enterprise Solutions',
    description: 'Develop scalable enterprise applications with ASP.NET MVC.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Security Features',
    description: 'Implement robust security with built-in authentication and authorization.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Rapid Development',
    description: 'Accelerate development with ASP.NET MVC\'s powerful features.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'ASP.NET MVC',
  'C#',
  '.NET Framework',
  'Entity Framework',
  'SQL Server',
  'Azure',
  'Razor Views',
  'Bootstrap',
  'jQuery',
  'JavaScript',
  'HTML5',
  'CSS3',
  'REST APIs',
  'Web API',
  'Unit Testing',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your ASP.NET MVC application needs and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'Architecture Design',
    description: 'Planning the MVC structure and database schema',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your application using ASP.NET MVC best practices',
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
    label: 'MVC Projects',
    value: '150+',
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

export default function AspNetMvcDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="ASP.NET MVC Development"
        description="We specialize in building robust, scalable, and maintainable web applications using ASP.NET MVC. Our expertise ensures enterprise-grade solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your MVC Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our ASP.NET MVC Development Process"
        description="We follow industry best practices to deliver high-quality MVC applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="ASP.NET MVC Development Services"
        description="We offer comprehensive ASP.NET MVC development services using the latest features and best practices."
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