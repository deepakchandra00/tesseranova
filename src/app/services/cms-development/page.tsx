import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  DocumentTextIcon,
  PaintBrushIcon,
  CogIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'CMS Development Services - TesseraNova',
  description: 'Expert CMS development services including WordPress and Wix development. Create and manage content-rich websites with ease.',
  keywords: 'CMS development, WordPress development, Wix development, content management systems, website development',
});

const features = [
  {
    title: 'WordPress Development',
    description: 'Custom WordPress development and theme customization for your website.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Wix Development',
    description: 'Professional Wix website development and customization services.',
    icon: PaintBrushIcon,
  },
  {
    title: 'Plugin Development',
    description: 'Custom plugin development to extend your CMS functionality.',
    icon: CogIcon,
  },
  {
    title: 'Security & Maintenance',
    description: 'Ensure your CMS is secure and up-to-date with regular maintenance.',
    icon: ShieldCheckIcon,
  },
];

const technologies = [
  'WordPress',
  'Wix',
  'PHP',
  'MySQL',
  'HTML5',
  'CSS3',
  'JavaScript',
  'jQuery',
  'Plugin Development',
  'Theme Development',
  'Security Tools',
  'SEO Tools',
  'Analytics Tools',
  'Backup Solutions',
  'Performance Optimization',
];

export default function CMSDevelopmentPage() {
  return (
    <ServiceDetails
      title="CMS Development"
      description="We provide comprehensive CMS development services to help businesses create and manage their online content effectively. From WordPress to Wix, we deliver customized content management solutions."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Start Your CMS Project',
        href: '/contact',
      }}
    />
  );
} 