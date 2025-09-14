import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ServiceHeroProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  cta?: {
    label: string;
    href: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function ServiceHero({
  title,
  description,
  icon: Icon,
  cta,
  stats,
}: ServiceHeroProps) {
  return (
    <Section variant="primary" spacing="lg" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {Icon && (
              <div className="mb-8">
                <Icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {description}
            </p>
            {cta && (
              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href={cta.href}>
                    {cta.label} <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
          {stats && (
            <div className="mx-auto max-w-2xl lg:mx-0">
              <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/50 p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-800/50 dark:ring-white/10"
                  >
                    <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
} 