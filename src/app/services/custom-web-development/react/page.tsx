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
  title: 'React Development Services - TesseraNova',
  description: 'Expert React development services for building modern, scalable, and high-performance web applications. From single-page applications to complex enterprise solutions.',
  keywords: 'React development, React.js, React Native, frontend development, web applications, single-page applications',
});

const features = [
  {
    title: 'Single Page Applications',
    description: 'Build fast and responsive single-page applications with React.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize React applications for maximum performance and user experience.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'State Management',
    description: 'Implement robust state management solutions using Redux, Context API, or other tools.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Responsive Design',
    description: 'Create responsive and mobile-friendly React applications.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'React.js',
  'React Native',
  'Next.js',
  'Redux',
  'Context API',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Material-UI',
  'Styled Components',
  'Jest',
  'React Testing Library',
  'Webpack',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your React application needs and goals',
    icon: DocumentTextIcon,
  },
  {
    title: 'Architecture Design',
    description: 'Planning the application structure and component hierarchy',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Building your React application with best practices',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Deployment',
    description: 'Ensuring quality and deploying to production',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'React Projects',
    value: '200+',
  },
  {
    label: 'Performance Score',
    value: '95+',
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

export default function ReactDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="React Development"
        description="We specialize in building modern, scalable, and high-performance web applications using React. Our expertise ensures robust, maintainable, and user-friendly solutions."
        icon={CodeBracketIcon}
        cta={{
          label: 'Start Your React Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our React Development Process"
        description="We follow industry best practices to deliver high-quality React applications"
        steps={processSteps}
      />

      <ServiceDetails
        title="React Development Services"
        description="We offer comprehensive React development services using the latest technologies and best practices."
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