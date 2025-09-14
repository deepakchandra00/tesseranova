import { Section } from '@/components/ui/Section';

interface ProcessStep {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface ServiceProcessProps {
  title: string;
  description: string;
  steps: ProcessStep[];
}

export default function ServiceProcess({
  title,
  description,
  steps,
}: ServiceProcessProps) {
  return (
    <Section variant="default" spacing="lg" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-50 dark:bg-purple-900/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl lg:text-center">
        <div className="inline-block rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
          Our Process
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="mx-auto mt-20 max-w-7xl">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200 dark:border-gray-700" />
          </div>
          <div className="relative flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center group transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 transition-all duration-300 group-hover:shadow-xl">
                    {step.icon ? (
                      <step.icon className="h-10 w-10 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                    ) : (
                      <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                        {index + 1}
                      </span>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                    {index + 1}
                  </div>
                </div>
                <div className="mt-8 max-w-xs text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </Section>
  );
} 