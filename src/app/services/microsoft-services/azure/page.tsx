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
  title: 'Azure Development Services - TesseraNova',
  description: 'Expert Azure development services for building cloud-native applications and solutions. From cloud migration to serverless architecture.',
  keywords: 'Azure development, cloud services, cloud migration, serverless, microservices, cloud architecture',
});

const features = [
  {
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your applications to Azure cloud platform.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Serverless Architecture',
    description: 'Build scalable applications using Azure Functions and serverless services.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Cloud Security',
    description: 'Implement robust security measures with Azure\'s built-in features.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Microservices',
    description: 'Develop and deploy microservices using Azure Kubernetes Service.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Azure App Service',
  'Azure Functions',
  'Azure Kubernetes Service',
  'Azure SQL Database',
  'Azure Cosmos DB',
  'Azure DevOps',
  'Azure Active Directory',
  'Azure Storage',
  'Azure CDN',
  'Azure Monitor',
  'Azure Security Center',
  'Azure API Management',
  'Azure Logic Apps',
  'Azure Event Grid',
  'Azure Service Bus',
];

const processSteps = [
  {
    title: 'Cloud Assessment',
    description: 'Evaluating your current infrastructure and cloud requirements',
    icon: DocumentTextIcon,
  },
  {
    title: 'Architecture Design',
    description: 'Planning the cloud architecture and service selection',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Building and deploying your cloud solution',
    icon: CommandLineIcon,
  },
  {
    title: 'Optimization',
    description: 'Optimizing performance and costs',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Azure Projects',
    value: '100+',
  },
  {
    label: 'Cost Savings',
    value: '40%',
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

export default function AzureDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Azure Development"
        description="We specialize in building cloud-native applications and solutions using Microsoft Azure. Our expertise ensures scalable, secure, and cost-effective cloud solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your Azure Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Azure Development Process"
        description="We follow industry best practices to deliver high-quality cloud solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Azure Development Services"
        description="We offer comprehensive Azure development services using the latest cloud technologies and best practices."
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