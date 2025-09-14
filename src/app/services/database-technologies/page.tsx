import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  ServerIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Database Technologies Services - TesseraNova',
  description: 'Expert database technology services including design, optimization, maintenance, and migration. Ensure optimal performance and reliability of your database systems.',
  keywords: 'database services, database maintenance, database optimization, database migration, SQL, NoSQL',
});

const features = [
  {
    title: 'Database Design',
    description: 'Design efficient and scalable database architectures for your applications.',
    icon: ServerIcon,
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize database performance for faster queries and better resource utilization.',
    icon: ChartBarIcon,
  },
  {
    title: 'Security & Backup',
    description: 'Implement robust security measures and reliable backup solutions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Maintenance & Support',
    description: 'Regular maintenance and 24/7 support for your database systems.',
    icon: WrenchScrewdriverIcon,
  },
];

const technologies = [
  'SQL Server',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Oracle',
  'Redis',
  'Cassandra',
  'Elasticsearch',
  'Database Design',
  'Performance Tuning',
  'Backup Solutions',
  'Security Tools',
  'Monitoring Tools',
  'Migration Tools',
  'Maintenance Tools',
];

export default function DatabaseTechnologiesPage() {
  return (
    <ServiceDetails
      title="Database Technologies"
      description="We provide comprehensive database technology services to ensure your data is stored, managed, and accessed efficiently. From design to maintenance, we help you optimize your database infrastructure."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Optimize Your Database',
        href: '/contact',
      }}
    />
  );
} 