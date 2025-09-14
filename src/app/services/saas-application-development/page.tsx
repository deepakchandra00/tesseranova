import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CloudIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'SAAS Application Development Services - TesseraNova',
  description: 'Expert SAAS application development services. Build scalable, secure, and feature-rich software-as-a-service solutions for your business.',
  keywords: 'SAAS development, cloud applications, subscription software, web applications, cloud solutions',
});

const features = [
  {
    title: 'Cloud-Native Solutions',
    description: 'Build scalable and resilient applications using cloud-native technologies.',
    icon: CloudIcon,
  },
  {
    title: 'Subscription Management',
    description: 'Implement robust subscription and billing systems for your SAAS platform.',
    icon: ChartBarIcon,
  },
  {
    title: 'Security & Compliance',
    description: 'Ensure your SAAS application meets security standards and compliance requirements.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Custom Integrations',
    description: 'Seamlessly integrate with third-party services and existing systems.',
    icon: CogIcon,
  },
];

const technologies = [
  'Cloud Platforms',
  'Microservices',
  'API Development',
  'Database Solutions',
  'Payment Gateways',
  'Authentication',
  'Subscription Management',
  'Analytics Tools',
  'Monitoring Tools',
  'DevOps',
  'Containerization',
  'CI/CD',
  'Security Tools',
  'Cloud Storage',
  'API Integration',
];

export default function SAASApplicationDevelopmentPage() {
  return (
    <ServiceDetails
      title="SAAS Application Development"
      description="We specialize in developing scalable and secure SAAS applications that help businesses transform their services into subscription-based solutions. Our expertise ensures reliable, maintainable, and user-friendly applications."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Start Your SAAS Project',
        href: '/contact',
      }}
    />
  );
} 