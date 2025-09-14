'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Development', href: '/services/mobile-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
  ],
  industries: [
    { name: 'Transportation', href: '/industry/transportation' },
    { name: 'Healthcare', href: '/industry/healthcare' },
    { name: 'Fintech', href: '/industry/fintech' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-100 to-blue-200 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
      {/* Nebula background effect */}
      <div className="absolute inset-0 blue-bg opacity-20" />
      
      {/* Twinkling stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold font-mono bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              TesseraNova
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Guiding enterprises through the wormhole of challenges to the galaxies of innovation.
            </p>
            <div className="flex gray-x-4">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-mono text-gray-900 dark:text-gray-100 mb-6">Company</h3>
            <ul className="gray-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-mono text-gray-900 dark:text-gray-100 mb-6">Services</h3>
            <ul className="gray-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold font-mono text-gray-900 dark:text-gray-100 mb-6">Industries</h3>
            <ul className="gray-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/50 dark:border-gray-700/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
              © {new Date().getFullYear()} TesseraNova. All rights reserved.
            </p>
            <div className="flex gray-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Cosmic quote */}
          <div className="text-center mt-8 pt-8 border-t border-gray-200/30 dark:border-gray-700/30">
            <p className="text-lg italic text-gray-600 dark:text-gray-400 font-mono">
              "In the vast universe of technology, TesseraNova is your guiding star."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 