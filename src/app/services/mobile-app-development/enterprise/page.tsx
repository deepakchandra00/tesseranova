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
  title: 'Enterprise Mobile Solutions - TesseraNova',
  description: 'Expert enterprise mobile solutions for large organizations. Secure, scalable, and integrated mobile applications that transform business operations.',
  keywords: 'enterprise mobile solutions, enterprise apps, mobile development, business applications, enterprise mobility',
});

const features = [
  {
    title: 'Enterprise Security',
    description: 'Implement robust security measures including MDM, MAM, and data encryption.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'System Integration',
    description: 'Seamlessly integrate with existing enterprise systems and workflows.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Scalability',
    description: 'Build scalable solutions that grow with your business needs.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Offline Capabilities',
    description: 'Enable robust offline functionality for field operations.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'MDM Solutions',
  'MAM Platforms',
  'Enterprise SSO',
  'API Integration',
  'Cloud Services',
  'Data Encryption',
  'Push Notifications',
  'Analytics',
  'Monitoring',
  'CI/CD',
  'Containerization',
  'Microservices',
  'DevOps',
  'Security Tools',
  'Testing Frameworks',
];

const processSteps = [
  {
    title: 'Enterprise Analysis',
    description: 'Understanding your business requirements and existing systems',
    icon: DocumentTextIcon,
  },
  {
    title: 'Solution Design',
    description: 'Designing secure and scalable enterprise solutions',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building enterprise-grade mobile applications',
    icon: CommandLineIcon,
  },
  {
    title: 'Deployment & Support',
    description: 'Enterprise-wide deployment and ongoing support',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Enterprise Clients',
    value: '30+',
  },
  {
    label: 'Security Score',
    value: '99%',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '35+',
  },
];

export default function EnterpriseMobileSolutionsPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Enterprise Mobile Solutions"
        description="We specialize in building secure, scalable, and integrated mobile solutions for enterprises. Our expertise ensures robust, business-transforming applications."
        icon={CodeBracketIcon}
        cta={{
          label: 'Transform Your Enterprise',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Enterprise Development Process"
        description="We follow industry best practices to deliver high-quality enterprise solutions"
        steps={processSteps}
      />

      <ServiceDetails
        title="Enterprise Mobile Services"
        description="We offer comprehensive enterprise mobile development services using the latest technologies and best practices."
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