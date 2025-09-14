import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { generateMetadata } from '@/components/shared/SEO';

export const metadata = generateMetadata({
  title: 'Our Services - TesseraNova',
  description: 'Explore our comprehensive range of technology services including web development, mobile app development, UI/UX design, and digital marketing solutions.',
  keywords: 'web development, mobile development, UI/UX design, digital marketing, technology services',
});

const services = [
  {
    title: 'Custom Web Development',
    description: 'Tailored web solutions using modern technologies like React, Angular, Next.js, and PHP frameworks.',
    href: '/services/custom-web-development',
    icon: '🌐',
  },
  {
    title: 'Microsoft Services',
    description: 'Comprehensive Microsoft technology solutions including .NET, Azure, and Dynamics.',
    href: '/services/microsoft-services',
    icon: '💻',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS, Android, and enterprise solutions.',
    href: '/services/mobile-app-development',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
    href: '/services/ui-ux-design',
    icon: '🎨',
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end development solutions using MEAN, MERN, LAMP, and other modern stacks.',
    href: '/services/full-stack-development',
    icon: '⚡',
  },
  {
    title: 'eCommerce Development',
    description: 'Custom eCommerce solutions using WooCommerce, Magento, Shopify, and other platforms.',
    href: '/services/ecommerce-development',
    icon: '🛍️',
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    href: '/services/digital-marketing',
    icon: '📈',
  },
  {
    title: 'QA & Testing',
    description: 'Comprehensive quality assurance and testing services for your applications.',
    href: '/services/qa',
    icon: '🔍',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Section variant="primary" spacing="lg">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We offer a comprehensive suite of technology services to help your business thrive in the digital landscape.
          </p>
        </div>
      </Section>

      <Section variant="default" spacing="lg">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400">
                    Learn more
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
} 