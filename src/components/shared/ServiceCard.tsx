'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  gradient?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  className,
  gradient = 'from-purple-500 to-cyan-500',
}: ServiceCardProps) {
  return (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={cn(
        "shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 relative flex flex-col overflow-hidden h-full",
        className
      )}>
        <div className={cn(
          "absolute inset-0 -z-10 bg-gradient-to-br",
          gradient,
          "opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        )} />
        
        <CardHeader className="text-center">
          {Icon && (
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <Icon className="h-10 w-10 text-white" />
            </div>
          )}
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardFooter className="mt-auto text-center">
          <motion.div
            className="w-full"
            whileHover={{ x: 5 }}
          >
            <Link 
              href={href} 
              className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:text-cyan-500 transition-colors duration-300"
            >
              Explore Service
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 