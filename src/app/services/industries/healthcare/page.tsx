import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  HeartIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Healthcare Industry Solutions - TesseraNova',
  description: 'Expert technology solutions for the healthcare industry. Electronic Health Records, telemedicine, and healthcare analytics.',
  keywords: 'healthcare technology, EHR, telemedicine, healthcare analytics, medical software, industry solutions',
});

const features = [
  {
    title: 'Electronic Health Records',
    description: 'Comprehensive EHR solutions.',
    icon: HeartIcon,
  },
  {
    title: 'Telemedicine',
    description: 'Virtual healthcare solutions.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Healthcare Analytics',
    description: 'Advanced analytics solutions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Patient Management',
    description: 'Patient care solutions.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'EHR Systems',
  'HIPAA Compliance',
  'Cloud Platforms',
  'Mobile Health Apps',
  'AI/ML Solutions',
  'Data Analytics',
  'IoT Devices',
  'Telehealth Platforms',
  'Patient Portals',
  'Medical Imaging',
  'Healthcare CRM',
  'Clinical Decision Support',
  'Real-time Monitoring',
  'Predictive Analytics',
  'Business Intelligence',
];

const processSteps = [
  {
    title: 'Healthcare Analysis',
    description: 'Analyzing healthcare needs',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Solution Design',
    description: 'Designing healthcare solutions',
    icon: BeakerIcon,
  },
  {
    title: 'Implementation',
    description: 'Implementing solutions',
    icon: CommandLineIcon,
  },
  {
    title: 'Support & Compliance',
    description: 'Ongoing support and compliance',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Healthcare Projects',
    value: '120+',
  },
  {
    label: 'Patient Satisfaction',
    value: '92%',
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

export default function HealthcarePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Healthcare Industry"
        description="We provide expert technology solutions for the healthcare industry. Our team delivers comprehensive healthcare solutions."
        icon={HeartIcon}
        cta={{
          label: 'Start Your Healthcare Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Healthcare Solutions Process"
        description="We follow industry best practices to deliver effective healthcare solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Healthcare Industry Solutions"
        description="We offer comprehensive technology solutions for the healthcare industry using the latest tools and best practices."
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