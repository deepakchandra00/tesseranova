'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
  submenu?: NavItem[];
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      {
        name: 'Custom Web Development',
        href: '/services/custom-web-development',
        submenu: [
          { name: 'React', href: '/services/custom-web-development/react' },
          { name: 'Angular', href: '/services/custom-web-development/angular' },
          { name: 'Next.js', href: '/services/custom-web-development/next' },
          { name: 'PHP', href: '/services/custom-web-development/php' },
          { name: 'Cake PHP', href: '/services/custom-web-development/cake-php' },
          { name: 'Laravel', href: '/services/custom-web-development/laravel' },
          { name: 'Code Igniter', href: '/services/custom-web-development/codeigniter' },
          { name: 'YII Development', href: '/services/custom-web-development/yii' },
        ],
      },
      {
        name: 'Microsoft Services',
        href: '/services/microsoft-services',
        submenu: [
          { name: '.NET/.NET Core', href: '/services/microsoft-services/dotnet' },
          { name: 'ASP.NET Development', href: '/services/microsoft-services/aspnet' },
          { name: 'ASP.NET MVC Development', href: '/services/microsoft-services/aspnet-mvc' },
          { name: 'C#', href: '/services/microsoft-services/csharp' },
          { name: 'Azure Development', href: '/services/microsoft-services/azure' },
          { name: 'Azure Integration', href: '/services/microsoft-services/azure-integration' },
          { name: 'SQL Services', href: '/services/microsoft-services/sql' },
        ],
      },
      {
        name: 'Mobile App Development',
        href: '/services/mobile-app-development',
        submenu: [
          { name: 'Android App Development', href: '/services/mobile-app-development/android' },
          { name: 'iOS App Development', href: '/services/mobile-app-development/ios' },
          { name: 'React Native Development', href: '/services/mobile-app-development/react-native' },
          { name: 'Tab App Development', href: '/services/mobile-app-development/tab' },
          { name: 'Flutter', href: '/services/mobile-app-development/flutter' },
          { name: 'Ionic', href: '/services/mobile-app-development/ionic' },
          { name: 'Enterprise Mobile Solutions', href: '/services/mobile-app-development/enterprise' },
          { name: 'Wearable App Development', href: '/services/mobile-app-development/wearable' },
        ],
      },
      {
        name: 'UI/UX Design',
        href: '/services/ui-ux-design',
        submenu: [
          { name: 'High & Low Fidelity Wireframe', href: '/services/ui-ux-design/wireframe' },
          { name: 'Prototypes', href: '/services/ui-ux-design/prototypes' },
          { name: 'Mobile First Design', href: '/services/ui-ux-design/mobile-first' },
          { name: 'SAAS Design', href: '/services/ui-ux-design/saas' },
          { name: 'eCommerce Design', href: '/services/ui-ux-design/ecommerce' },
        ],
      },
      {
        name: 'Full Stack Development',
        href: '/services/full-stack-development',
        submenu: [
          { name: 'MEAN Stack', href: '/services/full-stack-development/mean' },
          { name: 'MERN Stack', href: '/services/full-stack-development/mern' },
          { name: 'LAMP Stack', href: '/services/full-stack-development/lamp' },
          { name: 'Angular/React & .NET', href: '/services/full-stack-development/angular-react-dotnet' },
          { name: 'Ruby on Rails', href: '/services/full-stack-development/ror' },
          { name: 'ASP.NET', href: '/services/full-stack-development/aspnet' },
        ],
      },
      {
        name: 'eCommerce Development',
        href: '/services/ecommerce-development',
        submenu: [
          { name: 'WooCommerce', href: '/services/ecommerce-development/woocommerce' },
          { name: 'Magento', href: '/services/ecommerce-development/magento' },
          { name: 'Shopify', href: '/services/ecommerce-development/shopify' },
          { name: 'Big Commerce', href: '/services/ecommerce-development/bigcommerce' },
          { name: 'OpenCart', href: '/services/ecommerce-development/opencart' },
          { name: 'Custom Development', href: '/services/ecommerce-development/custom' },
        ],
      },
      {
        name: 'CMS Development',
        href: '/services/cms-development',
        submenu: [
          { name: 'WordPress Development', href: '/services/cms-development/wordpress' },
          { name: 'Wix Development', href: '/services/cms-development/wix' },
        ],
      },
      {
        name: 'Digital Marketing',
        href: '/services/digital-marketing',
        submenu: [
          { name: 'SEO', href: '/services/digital-marketing/seo' },
          { name: 'PPC Management', href: '/services/digital-marketing/ppc' },
          { name: 'Social Media Marketing', href: '/services/digital-marketing/social-media' },
          { name: 'Content Marketing', href: '/services/digital-marketing/content' },
          { name: 'Email Marketing', href: '/services/digital-marketing/email' },
        ],
      },
      {
        name: 'QA',
        href: '/services/qa',
        submenu: [
          { name: 'Manual Testing', href: '/services/qa/manual' },
          { name: 'Automation Testing', href: '/services/qa/automation' },
          { name: 'Selenium', href: '/services/qa/selenium' },
          { name: 'Cucumber', href: '/services/qa/cucumber' },
          { name: 'Appium', href: '/services/qa/appium' },
          { name: 'Cypress', href: '/services/qa/cypress' },
          { name: 'Postman', href: '/services/qa/postman' },
          { name: 'Apache JMeter', href: '/services/qa/jmeter' },
          { name: 'Unit Testing', href: '/services/qa/unit' },
          { name: 'Integration Testing', href: '/services/qa/integration' },
          { name: 'Functional Testing', href: '/services/qa/functional' },
          { name: 'Performance Testing', href: '/services/qa/performance' },
          { name: 'Regression Testing', href: '/services/qa/regression' },
          { name: 'SMOKE Testing', href: '/services/qa/smoke' },
          { name: 'White Box & Black Box Testing', href: '/services/qa/white-black-box' },
        ],
      },
      {
        name: 'Additional Services',
        href: '/services/additional',
        submenu: [
          { name: 'SAAS Application Development', href: '/services/saas-application-development' },
          { name: 'Database Technologies', href: '/services/database-technologies' },
          { name: 'Maintenance', href: '/services/maintenance' },
          { name: 'IT Consultation', href: '/services/it-consultation' },
        ],
      },
    ],
  },
  {
    name: 'Hire Developers',
    href: '/hire-developers',
    submenu: [
      { name: '.NET Developers', href: '/hire-dedicated-developer/dotnet' },
      { name: 'Java Developers', href: '/hire-dedicated-developer/java' },
      { name: 'Ruby on Rails Developers', href: '/hire-dedicated-developer/ror' },
      { name: 'PHP Developers', href: '/hire-dedicated-developer/php' },
      { name: 'MERN Stack Developers', href: '/hire-dedicated-developer/mern' },
      { name: 'MEAN Stack Developers', href: '/hire-dedicated-developer/mean' },
      { name: 'QA Engineers', href: '/hire-dedicated-developer/qa' },
    ],
  },
  {
    name: 'Industries',
    href: '/industry',
    submenu: [
      {
        name: 'Transportation',
        href: '/industry/transportation',
      },
      {
        name: 'Healthcare',
        href: '/industry/healthcare',
      },
      {
        name: 'Fintech',
        href: '/industry/fintech',
      },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    );
  };

  const renderMobileSubmenu = (items: NavItem[], parentName: string = '') => {
    return (
      <ul className={`pl-4 space-y-1 ${expandedItems.includes(parentName) ? 'block' : 'hidden'}`}>
        {items.map((item) => (
          <li key={item.name}>
            <div className="flex items-center">
              <Link
                href={item.href}
                className="flex-1 block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => !item.submenu && setIsOpen(false)}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <button
                  onClick={() => toggleExpanded(item.name)}
                  className="p-2 text-gray-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${expandedItems.includes(item.name) ? 'transform rotate-180' : ''}`}
                  />
                </button>
              )}
            </div>
            {item.submenu && renderMobileSubmenu(item.submenu, item.name)}
          </li>
        ))}
      </ul>
    );
  };

  const renderSubmenu = (items: NavItem[], level: number = 1) => {
    return (
      <ul
        className={`absolute z-50 ${level === 1 ? 'left-0 top-full' : 'left-full top-0'} mt-0 w-64 rounded-lg shadow-xl bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm hidden group-hover:block`}
      >
        {items.map((item) => (
          <li 
            key={item.name} 
            className="relative group/nested"
          >
            <Link
              href={item.href}
              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item.name}
              {item.submenu && (
                <ChevronRightIcon className="ml-2 h-4 w-4 text-gray-400" />
              )}
            </Link>
            {item.submenu && (
              <div className="absolute left-full top-0 ml-0 hidden group-hover/nested:block">
                {renderSubmenu(item.submenu, level + 1)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="TesseraNova"
                width={190}
                height={70}
                className="mr-3"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-6 text-sm font-medium transition-colors duration-200 flex items-center group"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDownIcon className="ml-1 h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-150" aria-hidden="true" />
                    )}
                  </Link>
                  
                  {/* Submenu */}
                  {item.submenu && renderSubmenu(item.submenu)}
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navigation.map((item) => (
            <li key={item.name}>
              <div className="flex items-center">
                <Link
                  href={item.href}
                  className="flex-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => !item.submenu && setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <button
                    onClick={() => toggleExpanded(item.name)}
                    className="p-2 text-gray-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-200 ${expandedItems.includes(item.name) ? 'transform rotate-180' : ''}`}
                    />
                  </button>
                )}
              </div>
              {item.submenu && renderMobileSubmenu(item.submenu, item.name)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}