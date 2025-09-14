import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  PencilSquareIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'SAAS Design Services - TesseraNova',
  description: 'Expert SAAS design services for creating intuitive, scalable, and user-friendly software interfaces. Design solutions that drive user adoption and retention.',
  keywords: 'SAAS design, software design, UI/UX design, enterprise software, dashboard design, user interface design',
});

const features = [
  {
    title: 'Dashboard Design',
    description: 'Create intuitive and data-rich dashboards for better user insights.',
    icon: PencilSquareIcon,
  },
  {
    title: 'User Onboarding',
    description: 'Design seamless onboarding experiences for new users.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Feature Discovery',
    description: 'Implement intuitive feature discovery and navigation.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Analytics Integration',
    description: 'Design interfaces that make data visualization clear and actionable.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'Material Design',
  'Design Systems',
  'Data Visualization',
  'User Flows',
  'Information Architecture',
  'Prototyping Tools',
  'Analytics Tools',
  'User Testing',
  'A/B Testing',
  'Heat Mapping',
  'User Research',
  'Accessibility Tools',
];

const processSteps = [
  {
    title: 'User Research',
    description: 'Understanding user needs and business requirements',
    icon: DocumentTextIcon,
  },
  {
    title: 'Information Architecture',
    description: 'Structuring content and features for optimal usability',
    icon: BeakerIcon,
  },
  {
    title: 'Interface Design',
    description: 'Creating intuitive and engaging user interfaces',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Iteration',
    description: 'Testing with users and refining the design',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'SAAS Projects',
    value: '50+',
  },
  {
    label: 'User Adoption',
    value: '85%',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '12+',
  },
];

export default function SAASDesignPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="SAAS Design"
        description="We specialize in creating intuitive and scalable SAAS interfaces that drive user adoption and retention. Our designs focus on usability, efficiency, and user satisfaction."
        icon={PencilSquareIcon}
        cta={{
          label: 'Start Your SAAS Design Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our SAAS Design Process"
        description="We follow industry best practices to deliver high-quality SAAS interfaces"
        steps={processSteps}
      />

      <ServiceDetails
        title="SAAS Design Services"
        description="We offer comprehensive SAAS design services using the latest tools and best practices."
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