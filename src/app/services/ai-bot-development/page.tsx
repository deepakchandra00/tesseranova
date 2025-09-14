import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  BeakerIcon,
  CommandLineIcon,
  CpuChipIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'AI & Bot Development Services - TesseraNova',
  description: 'Expert AI and bot development services including machine learning, IoT solutions, and intelligent automation. Transform your business with cutting-edge AI technology.',
  keywords: 'AI development, bot development, machine learning, IoT, artificial intelligence, automation',
});

const features = [
  {
    title: 'Machine Learning',
    description: 'Develop intelligent systems that learn and adapt to your business needs.',
    icon: BeakerIcon,
  },
  {
    title: 'Chatbot Development',
    description: 'Create intelligent chatbots for customer service and business automation.',
    icon: CommandLineIcon,
  },
  {
    title: 'IoT Solutions',
    description: 'Build connected devices and IoT systems with AI capabilities.',
    icon: CpuChipIcon,
  },
  {
    title: 'AI Integration',
    description: 'Integrate AI capabilities into your existing systems and applications.',
    icon: GlobeAltIcon,
  },
];

const technologies = [
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
  'Computer Vision',
  'IoT Platforms',
  'Chatbot Frameworks',
  'AI Models',
  'Cloud AI Services',
  'Data Analytics',
  'Predictive Analytics',
  'Neural Networks',
  'TensorFlow',
  'PyTorch',
  'IoT Protocols',
  'AI Integration',
];

export default function AIBotDevelopmentPage() {
  return (
    <ServiceDetails
      title="AI & Bot Development"
      description="We develop cutting-edge AI and bot solutions that help businesses automate processes, gain insights, and enhance customer experiences. Our expertise in machine learning and IoT enables innovative solutions."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Start Your AI Project',
        href: '/contact',
      }}
    />
  );
} 