'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import HeroSection from '@/components/shared/HeroSection';
import ServiceCard from '@/components/shared/ServiceCard';
import FeatureCard from '@/components/shared/FeatureCard';
import CosmicBackground from '@/components/shared/CosmicBackground';
import { generateMetadata } from '@/components/shared/SEO';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

// Metadata moved to layout.tsx

const services = [
  {
    title: 'IT Consulting',
    description: 'Navigate the familiar territories of technology with our grounded, reliable consulting services.',
    href: '/services/it-consultation',
    icon: CodeBracketIcon,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Software Development',
    description: 'Building new frontiers in the digital landscape with innovative software solutions.',
    href: '/services/custom-web-development',
    icon: RocketLaunchIcon,
    gradient: 'from-red-500 to-orange-500',
  },
  {
    title: 'Cloud & AI Solutions',
    description: 'Connected ecosystems that orbit around your business needs with intelligent automation.',
    href: '/services/microsoft-services/azure',
    icon: SparklesIcon,
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'Custom Solutions',
    description: 'Explore uncharted possibilities with bespoke technology solutions tailored to your unique vision.',
    href: '/services/additional',
    icon: DevicePhoneMobileIcon,
    gradient: 'from-purple-500 to-violet-500',
  },
];

const features = [
  {
    title: 'Cosmic Expertise',
    description: 'Our stellar team navigates the vast universe of technology with unparalleled expertise.',
    icon: UserGroupIcon,
  },
  {
    title: 'Quantum Quality',
    description: 'We maintain galactic standards through rigorous testing across multiple dimensions of excellence.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Warp Speed Delivery',
    description: 'Projects delivered at light speed while maintaining the highest cosmic quality standards.',
    icon: ClockIcon,
  },
  {
    title: 'Universal Support',
    description: 'Round-the-clock support that spans across all time zones and dimensions.',
    icon: PhoneIcon,
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection
        title="TesseraNova"
        description="Navigating the Infinite Possibilities of Technology"
      />

      {/* Services Section - Planets */}
      <Section variant="default" spacing="lg" className="relative">
        <CosmicBackground variant="nebula" intensity="low" className="opacity-30" />
        <AnimatedSection className="mx-auto max-w-2xl lg:text-center relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-lg font-semibold leading-7 text-purple-600 dark:text-purple-400 font-mono">Our Cosmic Services</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl font-mono">
              Explore Our Service Galaxy
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Each planet in our service constellation offers unique solutions to propel your business into the digital cosmos.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-12 sm:mt-24 lg:grid-cols-2 xl:grid-cols-4 px-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
              gradient={service.gradient}
            />
          ))}
        </AnimatedSection>
      </Section>

      {/* Features Section - Whitehole */}
      <Section variant="primary" spacing="lg" className="relative">
        <CosmicBackground variant="wormhole" intensity="medium" className="opacity-40" />
        <AnimatedSection className="mx-auto max-w-2xl lg:text-center relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-lg font-semibold leading-7 text-cyan-600 dark:text-cyan-400 font-mono">Why Choose TesseraNova</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl font-mono">
              Energy Bursting from Innovation
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Like a whitehole radiating pure energy, our team channels creativity and expertise into every project.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 sm:mt-24 lg:grid-cols-2 px-6">
          {features.map((feature, index) => (
            <div key={feature.title} className="shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 p-8 group">
              <div className="flex items-center gray-x-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:animate-pulse">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-mono text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </AnimatedSection>
      </Section>

      {/* CTA Section - Galaxy Map */}
      <Section variant="default" spacing="lg" className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 opacity-90" />
        <CosmicBackground variant="starfield" intensity="high" className="opacity-60" />
        
        {/* Galactic nodes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="25%" y1="25%" x2="50%" y2="66%" stroke="rgba(123, 97, 255, 0.3)" strokeWidth="2" />
            <line x1="66%" y1="33%" x2="50%" y2="66%" stroke="rgba(77, 238, 234, 0.3)" strokeWidth="2" />
          </svg>
        </div>
        
        <AnimatedSection className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl font-mono mb-8">
            Ready to Navigate the Digital Universe?
          </h2>
          <p className="text-xl leading-8 text-gray-200 mb-12 max-w-3xl mx-auto">
            Join us on a journey through the cosmos of technology. Let TesseraNova be your guiding star in the vast universe of digital possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg text-lg px-10 py-4 group"
            >
              <span className="relative z-10 flex items-center">
                Launch Your Project
                <ArrowRightIcon className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm px-10 py-4 rounded-lg text-lg font-medium text-gray-100 hover:bg-white/10 transition-all duration-300 border border-gray-200/30"
            >
              Explore Services
            </Link>
          </div>
        </AnimatedSection>
      </Section>
      
      {/* Footer quote */}
      <div className="text-center py-16 relative z-10">
        <p className="text-lg italic text-gray-600 dark:text-gray-400 font-mono">
          "In the vast universe of technology, TesseraNova is your guiding star."
        </p>
      </div>
    </div>
  );
}
