import ServiceHero from '@/components/shared/ServiceHero';
import ServiceProcess from '@/components/shared/ServiceProcess';
import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  WindowIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'Wix Development Services - TesseraNova',
  description: 'Transform your online presence with our expert Wix development services. We specialize in creating custom websites, e-commerce solutions, and business applications using Wix platform. Get scalable, responsive, and SEO-optimized websites.',
  keywords: 'Wix development, custom websites, Wix e-commerce, Wix apps, CMS development, Wix customization, Wix SEO, Wix store development, Wix business solutions',
});

const features = [
  {
    title: 'Custom Websites',
    description: 'Create stunning, responsive websites tailored to your brand identity. We leverage Wix\'s powerful features to build websites that are not just visually appealing but also optimized for performance and user experience.',
    icon: WindowIcon,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Build powerful online stores with Wix\'s e-commerce capabilities. From product catalogs to secure payment gateways, we implement everything you need to run a successful online business.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'App Development',
    description: 'Extend your website\'s functionality with custom Wix applications. We develop tailored solutions that integrate seamlessly with your Wix site, enhancing user engagement and business operations.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Business Solutions',
    description: 'Streamline your business processes with Wix automation tools. We implement booking systems, appointment scheduling, and customer management solutions to optimize your operations.',
    icon: ChartBarIcon,
  },
];

const technologies = [
  'Wix Platform',
  'JavaScript',
  'HTML5/CSS3',
  'Velo by Wix',
  'Wix APIs',
  'Wix Stores',
  'Wix Bookings',
  'Wix Events',
  'Wix Forms',
  'Wix SEO Tools',
  'Wix Analytics',
  'Wix Payments',
  'Wix Members',
  'Wix Blog',
  'Wix Forum',
];

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'We begin by thoroughly understanding your business needs, target audience, and project goals. Our team conducts detailed consultations to ensure we deliver exactly what you need.',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'Design & Planning',
    description: 'Our expert designers create wireframes and mockups that align with your brand identity. We plan the architecture and features to ensure a scalable and maintainable solution.',
    icon: BeakerIcon,
  },
  {
    title: 'Development',
    description: 'Our skilled developers implement your solution using Wix\'s latest features and best practices. We ensure clean code, optimal performance, and seamless integration.',
    icon: CommandLineIcon,
  },
  {
    title: 'Testing & Launch',
    description: 'We conduct thorough testing across devices and browsers. After quality assurance, we deploy your solution and provide comprehensive training and support.',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    label: 'Wix Projects',
    value: '150+',
  },
  {
    label: 'E-commerce Sites',
    value: '80+',
  },
  {
    label: 'Client Satisfaction',
    value: '97%',
  },
  {
    label: 'Team Members',
    value: '20+',
  },
];

export default function WixDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ServiceHero
        title="Wix Development"
        description="Transform your digital presence with our expert Wix development services. We combine technical expertise with creative design to deliver websites that drive results. Our team specializes in creating custom, scalable, and SEO-optimized Wix solutions that help businesses grow online."
        icon={WindowIcon}
        cta={{
          label: 'Start Your Wix Project',
          href: '/contact',
        }}
        stats={stats}
      />

      <ServiceProcess
        title="Our Wix Development Process"
        description="We follow a proven methodology to deliver exceptional Wix solutions. Our process ensures transparency, quality, and timely delivery while maintaining the highest standards of development practices."
        steps={processSteps}
      />

      <ServiceDetails
        title="Wix Development Services"
        description="Leverage the power of Wix with our comprehensive development services. We combine technical expertise with creative design to build websites that not only look great but also perform exceptionally well. Our solutions are optimized for search engines, mobile devices, and user experience."
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