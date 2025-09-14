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
  title: 'Microsoft Dynamics Services - TesseraNova',
  description: 'Expert Microsoft Dynamics services for implementing and customizing Business Central, AX, and Finance & Operations. From ERP solutions to business process automation.',
  keywords: 'Microsoft Dynamics, Business Central, Dynamics AX, Finance & Operations, ERP implementation, business process automation',
});

const features = [
  {
    title: 'ERP Implementation',
    description: 'Implement and customize Microsoft Dynamics solutions for your business.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Business Process Automation',
    description: 'Automate and optimize your business processes with Dynamics.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Integration Services',
    description: 'Seamlessly integrate Dynamics with other business systems.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Custom Development',
    description: 'Develop custom solutions and extensions for Dynamics.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Dynamics 365',
  'Business Central',
  'Dynamics AX',
  'Finance & Operations',
  'Power Platform',
  'Power BI',
  'Power Automate',
  'Power Apps',
  'Azure',
  'SQL Server',
  'X++',
  'AL',
  'C#',
  'JavaScript',
  'REST APIs',
];

const processSteps = [
  {
    title: 'Business Analysis',
    description: 'Understanding your business requirements and processes',
    icon: DocumentTextIcon,
  },
  {
    title: 'Solution Design',
    description: 'Planning the Dynamics implementation and customization',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Building and deploying your Dynamics solution',
    icon: CommandLineIcon,
  },
  {
    title: 'Training & Support',
    description: 'Ensuring successful adoption and ongoing support',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Dynamics Projects',
    value: '50+',
  },
  {
    label: 'Process Efficiency',
    value: '45%',
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

export default function DynamicsServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Microsoft Dynamics Services"
        description="We specialize in implementing and customizing Microsoft Dynamics solutions for businesses of all sizes. Our expertise ensures successful ERP implementations and business process automation."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Dynamics Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Dynamics Implementation Process"
        description="We follow industry best practices to deliver successful Dynamics solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Microsoft Dynamics Services"
        description="We offer comprehensive Dynamics services using the latest features and best practices."
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