import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  DocumentTextIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'WordPress Development Services - TesseraNova',
  description: 'Expert WordPress development services offering custom themes, plugins, e-commerce solutions, and comprehensive CMS development with modern technologies and best practices.',
  keywords: 'WordPress development, custom themes, WordPress plugins, WordPress e-commerce, CMS development, WooCommerce, WordPress optimization, WordPress security',
});

const features = [
  {
    title: 'Custom Themes',
    description: 'Create unique, responsive WordPress themes tailored to your brand identity with modern design principles and optimal user experience.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Plugin Development',
    description: 'Develop custom WordPress plugins that extend functionality, automate tasks, and integrate with third-party services to meet your specific business needs.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Build powerful online stores with WooCommerce integration, custom payment gateways, inventory management, and advanced shipping solutions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Performance Optimization',
    description: 'Enhance website speed, security, and SEO with advanced optimization techniques, caching solutions, and performance monitoring tools.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'WordPress Core',
  'PHP',
  'MySQL',
  'JavaScript',
  'HTML5/CSS3',
  'WooCommerce',
  'Advanced Custom Fields',
  'Gutenberg',
  'REST API',
  'WP-CLI',
  'Composer',
  'Git',
  'Docker',
  'WPML',
  'Yoast SEO',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Thorough analysis of your business needs, target audience, and technical requirements to create a detailed project roadmap and specifications.',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Design & Planning',
    description: 'Create wireframes, mockups, and technical architecture while planning the development approach, timeline, and resource allocation.',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Implement custom features, integrate third-party services, and develop responsive designs following WordPress coding standards and best practices.',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Launch',
    description: 'Comprehensive testing including functionality, performance, security, and cross-browser compatibility before deployment and post-launch support.',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'WordPress Projects',
    value: '200+',
  },
  {
    label: 'Theme Downloads',
    value: '50K+',
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

export default function WordPressDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="WordPress Development"
        description="Transform your digital presence with our expert WordPress development services. We deliver scalable, secure, and high-performance WordPress solutions tailored to your business needs. From custom themes to complex e-commerce platforms, our team ensures your success in the digital landscape."
        icon={DocumentTextIcon}
        cta={{
          label: 'Start Your WordPress Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our WordPress Development Process"
        description="Our proven development methodology combines industry best practices with innovative solutions to deliver exceptional WordPress websites that drive business growth and user engagement."
        steps={processSteps}
      />

      <ServiceDetails
        title="WordPress Development Services"
        description="Leverage our comprehensive WordPress development expertise to build powerful, scalable, and secure websites. We combine cutting-edge technologies with industry best practices to deliver solutions that exceed expectations."
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