import ServiceDetails from '@/components/shared/ServiceDetails';
import { generateMetadata } from '@/components/shared/SEO';
import {
  BeakerIcon,
  CommandLineIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export const metadata = generateMetadata({
  title: 'QA & Testing Services - TesseraNova',
  description: 'Comprehensive quality assurance and testing services including manual testing, automation testing, and specialized testing solutions. Ensure software quality and reliability.',
  keywords: 'QA services, software testing, manual testing, automation testing, Selenium, Cucumber, Appium, Cypress',
});

const features = [
  {
    title: 'Manual Testing',
    description: 'Thorough manual testing services to ensure software quality and user experience.',
    icon: BeakerIcon,
  },
  {
    title: 'Automation Testing',
    description: 'Efficient automated testing using Selenium, Cucumber, Appium, and Cypress.',
    icon: CommandLineIcon,
  },
  {
    title: 'Performance Testing',
    description: 'Comprehensive performance testing to ensure optimal application performance.',
    icon: ChartBarIcon,
  },
  {
    title: 'Security Testing',
    description: 'Rigorous security testing to protect your applications from vulnerabilities.',
    icon: ShieldCheckIcon,
  },
];

const technologies = [
  'Manual Testing',
  'Selenium',
  'Cucumber',
  'Appium',
  'Cypress',
  'Postman',
  'JMeter',
  'Unit Testing',
  'Integration Testing',
  'Functional Testing',
  'Performance Testing',
  'Regression Testing',
  'SMOKE Testing',
  'Security Testing',
  'Test Automation',
];

export default function QAPage() {
  return (
    <ServiceDetails
      title="QA & Testing"
      description="We provide comprehensive quality assurance and testing services to ensure your software meets the highest standards of quality, performance, and security. Our testing methodologies cover all aspects of software quality."
      features={features}
      technologies={technologies}
      cta={{
        label: 'Start Your QA Project',
        href: '/contact',
      }}
    />
  );
} 