import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'IT Consultation Services - TesseraNova',
  description: 'Expert IT consultation services to drive digital transformation. Technology strategy, digital innovation, and enterprise solutions.',
  keywords: 'IT consultation, technology strategy, digital transformation, enterprise solutions, technology consulting',
});

const features = [
  {
    title: 'Technology Strategy',
    description: 'Strategic technology planning.',
    icon: LightBulbIcon,
  },
  {
    title: 'Digital Transformation',
    description: 'Digital innovation solutions.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Enterprise Solutions',
    description: 'Enterprise-wide solutions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Technology Assessment',
    description: 'Comprehensive assessment.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Cloud Platforms',
  'Enterprise Software',
  'DevOps Tools',
  'Security Solutions',
  'Data Analytics',
  'AI/ML Platforms',
  'IoT Solutions',
  'Blockchain',
  'Mobile Technologies',
  'Web Technologies',
  'Database Systems',
  'Networking Solutions',
  'Cybersecurity Tools',
  'Business Intelligence',
  'Project Management',
];

const processSteps = [
  {
    title: 'Business Analysis',
    description: 'Analyzing business needs',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Strategy Development',
    description: 'Developing technology strategy',
    icon: BeakerIcon,
  },
  {
    title: 'Solution Design',
    description: 'Designing optimal solutions',
    icon: CommandLineIcon,
  },
  {
    title: 'Implementation Support',
    description: 'Supporting implementation',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Consultation Projects',
    value: '150+',
  },
  {
    label: 'Client Success Rate',
    value: '95%',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '40+',
  },
];

export default function ITConsultationPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="IT Consultation"
        description="We provide expert IT consultation services to drive digital transformation. Our team delivers strategic technology solutions."
        icon={LightBulbIcon}
        cta={{
          label: 'Start Your Consultation',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Consultation Process"
        description="We follow industry best practices to deliver effective IT consultation solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="IT Consultation Services"
        description="We offer comprehensive IT consultation services using the latest technologies and best practices."
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