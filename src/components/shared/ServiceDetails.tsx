import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ServiceDetailsProps {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  technologies?: string[];
  cta?: {
    label: string;
    href: string;
  };
}

export default function ServiceDetails({
  title,
  description,
  features,
  technologies,
  cta,
}: ServiceDetailsProps) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Section variant="primary" spacing="sm">
        <div className="mx-auto max-w-2xl lg:text-center mt-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </Section>

      <Section variant="default" spacing="sm">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {features.map((feature) => (
            <Card key={feature.title} className="h-full">
              <CardHeader>
                {feature.icon && (
                  <div className="mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                )}
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {technologies && technologies.length > 0 && (
        <Section variant="primary" spacing="sm">
          <div className="mx-auto max-w-2xl lg:text-center mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Technologies We Use
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Section>
      )}

      {cta && (
        <Section variant="default" spacing="sm">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <Button size="lg" asChild>
              <Link href={cta.href}>
                {cta.label} <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Section>
      )}
    </div>
  );
} 