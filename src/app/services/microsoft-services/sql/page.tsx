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
  title: 'SQL Services - TesseraNova',
  description: 'Expert SQL services for database design, optimization, and management. From database development to performance tuning and migration.',
  keywords: 'SQL services, database development, SQL Server, database optimization, data migration, database management',
});

const features = [
  {
    title: 'Database Design',
    description: 'Design efficient and scalable database architectures.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Performance Tuning',
    description: 'Optimize database performance and query execution.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Data Migration',
    description: 'Seamlessly migrate data between different database systems.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Database Security',
    description: 'Implement robust security measures and access controls.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'SQL Server',
  'Azure SQL Database',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'T-SQL',
  'Stored Procedures',
  'Database Triggers',
  'ETL Tools',
  'SSIS',
  'SSRS',
  'Power BI',
  'Database Monitoring',
  'Backup Solutions',
];

const processSteps = [
  {
    title: 'Database Assessment',
    description: 'Evaluating your current database infrastructure and requirements',
    icon: DocumentTextIcon,
  },
  {
    title: 'Solution Design',
    description: 'Planning the database architecture and optimization strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Building and optimizing your database solution',
    icon: CommandLineIcon,
  },
  {
    title: 'Monitoring & Maintenance',
    description: 'Ensuring optimal performance and reliability',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Database Projects',
    value: '200+',
  },
  {
    label: 'Performance Improvement',
    value: '60%',
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

export default function SQLServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="SQL Services"
        description="We specialize in providing comprehensive SQL services for database design, optimization, and management. Our expertise ensures efficient and secure database solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your SQL Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our SQL Services Process"
        description="We follow industry best practices to deliver high-quality database solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="SQL Services"
        description="We offer comprehensive SQL services using the latest technologies and best practices."
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