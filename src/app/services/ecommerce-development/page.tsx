import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  ShoppingCartIcon,
  CreditCardIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'eCommerce Development Services - TesseraNova',
  description: 'Expert eCommerce development services using WooCommerce, Magento, Shopify, and other platforms. Create powerful online stores that drive sales.',
  keywords: 'eCommerce development, WooCommerce, Magento, Shopify, BigCommerce, OpenCart, custom eCommerce',
});

const features = [
  {
    title: 'Platform Development',
    description: 'Custom eCommerce solutions using WooCommerce, Magento, Shopify, and more.',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Payment Integration',
    description: 'Secure payment gateway integration and multiple payment method support.',
    icon: CreditCardIcon,
  },
  {
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics and reporting tools for business insights.',
    icon: ChartBarIcon,
  },
  {
    title: 'Multi-channel Selling',
    description: 'Solutions for selling across multiple channels and marketplaces.',
    icon: GlobeAltIcon,
  },
];

const technologies = [
  'WooCommerce',
  'Magento',
  'Shopify',
  'BigCommerce',
  'OpenCart',
  'Custom Development',
  'Payment Gateways',
  'Inventory Management',
  'Order Management',
  'Customer Management',
  'Analytics Tools',
  'Marketing Tools',
  'Security Solutions',
  'Mobile Commerce',
  'API Integration',
];

export default function EcommerceDevelopmentPage() {
  return (
    <ServiceDetails
      title="eCommerce Development"
      description="We create powerful and scalable eCommerce solutions that help businesses sell online effectively. From platform development to custom solutions, we deliver comprehensive eCommerce services."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Start Your eCommerce Project',
        href: '/contact',
      }}
    />
  );
} 