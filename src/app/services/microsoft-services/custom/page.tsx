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
  title: 'Microsoft Custom Development Services - TesseraNova',
  description: 'Expert custom development services for Microsoft technologies. From custom applications to system integration and automation solutions.',
  keywords: 'Microsoft custom development, C# development, custom applications, system integration, automation solutions',
});

const features = [
  {
    title: 'Custom Applications',
    description: 'Build tailored applications using Microsoft technologies.',
    icon: CodeBracketIcon,
  },
  {
    title: 'System Integration',
    description: 'Integrate Microsoft systems with other business applications.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Automation Solutions',
    description: 'Develop automated workflows and business processes.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Legacy Modernization',
    description: 'Modernize legacy systems using Microsoft technologies.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'C#',
  '.NET Framework',
  '.NET Core',
  'ASP.NET',
  'Windows Forms',
  'WPF',
  'UWP',
  'Xamarin',
  'Azure',
  'SQL Server',
  'SharePoint',
  'Office 365',
  'Power Platform',
  'REST APIs',
  'Web Services',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your custom development needs and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'Solution Design',
    description: 'Planning the custom solution architecture',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your custom solution with best practices',
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
    label: 'Custom Projects',
    value: '100+',
  },
  {
    label: 'Success Rate',
    value: '98%',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '30+',
  },
];

export default function MicrosoftCustomDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Microsoft Custom Development"
        description="We specialize in building custom solutions using Microsoft technologies. Our expertise ensures robust, scalable, and maintainable applications."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Custom Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Custom Development Process"
        description="We follow industry best practices to deliver high-quality custom solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Microsoft Custom Development Services"
        description="We offer comprehensive custom development services using the latest Microsoft technologies and best practices."
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