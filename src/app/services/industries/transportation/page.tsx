import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  TruckIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Transportation Industry Solutions - TesseraNova',
  description: 'Expert technology solutions for the transportation industry. Fleet management, logistics optimization, and transportation analytics.',
  keywords: 'transportation technology, fleet management, logistics optimization, transportation analytics, industry solutions',
});

const features = [
  {
    title: 'Fleet Management',
    description: 'Comprehensive fleet solutions.',
    icon: TruckIcon,
  },
  {
    title: 'Logistics Optimization',
    description: 'Optimize logistics operations.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Route Planning',
    description: 'Intelligent route planning.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Analytics & Reporting',
    description: 'Advanced analytics solutions.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'GPS Tracking',
  'IoT Sensors',
  'Cloud Platforms',
  'Mobile Apps',
  'AI/ML Solutions',
  'Data Analytics',
  'Blockchain',
  'RFID Systems',
  'Telematics',
  'ERP Systems',
  'Fleet Management Software',
  'Route Optimization Tools',
  'Real-time Monitoring',
  'Predictive Analytics',
  'Business Intelligence',
];

const processSteps = [
  {
    title: 'Industry Analysis',
    description: 'Analyzing transportation needs',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Solution Design',
    description: 'Designing optimal solutions',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Implementing solutions',
    icon: CommandLineIcon,
  },
  {
    title: 'Support & Optimization',
    description: 'Ongoing support and optimization',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Transportation Projects',
    value: '100+',
  },
  {
    label: 'Efficiency Improvement',
    value: '35%',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
  },
  {
    label: 'Team Members',
    value: '25+',
  },
];

export default function TransportationPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Transportation Industry"
        description="We provide expert technology solutions for the transportation industry. Our team delivers comprehensive transportation solutions."
        icon={TruckIcon}
        cta={{
          label: 'Start Your Transportation Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Transportation Solutions Process"
        description="We follow industry best practices to deliver effective transportation solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Transportation Industry Solutions"
        description="We offer comprehensive technology solutions for the transportation industry using the latest tools and best practices."
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