import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CloudIcon,
  ServerIcon,
  CubeIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Microsoft Services - TesseraNova',
  description: 'Comprehensive Microsoft technology solutions including .NET, Azure, Dynamics, and SQL services. Enterprise-grade development and integration services.',
  keywords: 'Microsoft services, .NET, Azure, Dynamics, SQL, C#, ASP.NET, Business Central, AX, F&O',
});

const features = [
  {
    title: '.NET Development',
    description: 'Expert .NET and .NET Core development services for building robust enterprise applications.',
    icon: ServerIcon,
  },
  {
    title: 'Azure Cloud Solutions',
    description: 'Comprehensive Azure cloud services including development, integration, and migration.',
    icon: CloudIcon,
  },
  {
    title: 'Microsoft Dynamics',
    description: 'Implementation and customization of Dynamics 365, Business Central, AX, and F&O.',
    icon: CubeIcon,
  },
  {
    title: 'SQL Services',
    description: 'Database design, optimization, and management using Microsoft SQL Server.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  '.NET',
  '.NET Core',
  'ASP.NET',
  'ASP.NET MVC',
  'C#',
  'Azure',
  'Azure DevOps',
  'SQL Server',
  'Dynamics 365',
  'Business Central',
  'AX',
  'F&O',
  'Power BI',
  'SharePoint',
  'Microsoft 365',
];

export default function MicrosoftServicesPage() {
  return (
    <ServiceDetails
      title="Microsoft Services"
      description="We provide comprehensive Microsoft technology solutions to help businesses leverage the power of the Microsoft ecosystem. From .NET development to Azure cloud services and Dynamics implementation, we deliver enterprise-grade solutions."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Get Started',
        href: '/contact',
      }}
    />
  );
} 