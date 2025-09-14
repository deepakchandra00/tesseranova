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
  title: 'High & Low Fidelity Wireframe Services - TesseraNova',
  description: 'Expert wireframing services for creating detailed UI/UX designs. From low-fidelity sketches to high-fidelity interactive prototypes.',
  keywords: 'wireframe design, UI/UX design, low fidelity wireframe, high fidelity wireframe, prototype design, user interface design',
});

const features = [
  {
    title: 'Low-Fidelity Wireframes',
    description: 'Create quick, simple sketches to explore layout and functionality.',
    icon: PencilSquareIcon,
  },
  {
    title: 'High-Fidelity Wireframes',
    description: 'Develop detailed, pixel-perfect designs with realistic content.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Interactive Prototypes',
    description: 'Build clickable prototypes to test user flows and interactions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Responsive Design',
    description: 'Design wireframes for all screen sizes and devices.',
    icon: DevicePhoneMobileIcon,
  },
];

const technologies = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'InVision',
  'Axure RP',
  'Balsamiq',
  'Marvel',
  'Proto.io',
  'Material Design',
  'iOS Design',
  'Responsive Grids',
  'Design Systems',
  'User Flows',
  'Information Architecture',
  'Usability Testing',
];

const processSteps = [
  {
    title: 'Requirements Gathering',
    description: 'Understanding your design requirements and user needs',
    icon: DocumentTextIcon,
  },
  {
    title: 'Low-Fidelity Design',
    description: 'Creating initial sketches and basic layouts',
    icon: BeakerIcon,
  },
  {
    title: 'High-Fidelity Design',
    description: 'Developing detailed, interactive wireframes',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Refinement',
    description: 'Testing with users and refining the design',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Wireframe Projects',
    value: '200+',
  },
  {
    label: 'Design Iterations',
    value: '3-5',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Team Members',
    value: '15+',
  },
];

export default function WireframeDesignPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Wireframe Design"
        description="We specialize in creating detailed wireframes that bring your ideas to life. From low-fidelity sketches to high-fidelity interactive prototypes."
        icon={PencilSquareIcon}
        cta={{
          label: 'Start Your Wireframe Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Wireframe Design Process"
        description="We follow industry best practices to deliver high-quality wireframe designs"
        steps={processSteps}
      />

      <ServiceDetails
        title="Wireframe Design Services"
        description="We offer comprehensive wireframe design services using the latest tools and best practices."
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