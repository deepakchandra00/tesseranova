import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Container } from './Container';

const sectionVariants = cva('w-full relative', {
  variants: {
    variant: {
      default: 'bg-white dark:bg-gray-900',
      primary: 'bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900',
      secondary: 'bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900',
    },
    spacing: {
      default: 'py-12 sm:py-16 lg:py-20',
      sm: 'py-8 sm:py-12',
      lg: 'py-16 sm:py-24 lg:py-32',
      xl: 'py-20 sm:py-32 lg:py-40',
    },
  },
  defaultVariants: {
    variant: 'default',
    spacing: 'default',
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  containerSize?: 'default' | 'sm' | 'lg' | 'xl' | '2xl' | 'full';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, spacing, containerSize = 'default', children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ variant, spacing, className }))}
        {...props}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]" />
          {variant === 'primary' && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
          )}
          {variant === 'secondary' && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-transparent to-gray-500/5" />
          )}
        </div>
        <Container size={containerSize}>{children}</Container>
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section, sectionVariants }; 