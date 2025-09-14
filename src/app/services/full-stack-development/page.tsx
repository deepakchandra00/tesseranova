import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  CodeBracketIcon,
  ServerIcon,
  CommandLineIcon,
  CubeIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Full Stack Development Services - TesseraNova',
  description: 'Comprehensive full stack development services using MEAN, MERN, LAMP, and other modern stacks. End-to-end solutions for your business needs.',
  keywords: 'full stack development, MEAN stack, MERN stack, LAMP stack, Angular, React, .NET, Ruby on Rails',
});

const features = [
  {
    title: 'MEAN Stack Development',
    description: 'End-to-end development using MongoDB, Express.js, Angular, and Node.js.',
    icon: CodeBracketIcon,
  },
  {
    title: 'MERN Stack Development',
    description: 'Full stack solutions with MongoDB, Express.js, React, and Node.js.',
    icon: ServerIcon,
  },
  {
    title: 'LAMP Stack Development',
    description: 'Robust web applications using Linux, Apache, MySQL, and PHP.',
    icon: CommandLineIcon,
  },
  {
    title: 'Enterprise Solutions',
    description: 'Scalable enterprise applications using .NET, Ruby on Rails, and more.',
    icon: CubeIcon,
  },
];

const technologies = [
  'MEAN Stack',
  'MERN Stack',
  'LAMP Stack',
  'Angular',
  'React',
  '.NET',
  'Ruby on Rails',
  'ASP.NET',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'PHP',
  'TypeScript',
];

export default function FullStackDevelopmentPage() {
  return (
    <ServiceDetails
      title="Full Stack Development"
      description="We provide comprehensive full stack development services using modern technology stacks. Our expertise spans from frontend to backend development, ensuring seamless integration and optimal performance."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Start Your Full Stack Project',
        href: '/contact',
      }}
    />
  );
} 