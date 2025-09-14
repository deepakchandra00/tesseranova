import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const containerVariants = cva('mx-auto w-full', {
  variants: {
    size: {
      default: 'max-w-7xl px-4 sm:px-6 lg:px-8',
      sm: 'max-w-3xl px-4 sm:px-6',
      lg: 'max-w-5xl px-4 sm:px-6 lg:px-8',
      xl: 'max-w-7xl px-4 sm:px-6 lg:px-8',
      '2xl': 'max-w-[1400px] px-4 sm:px-6 lg:px-8',
      full: 'px-4 sm:px-6 lg:px-8',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size, className }))}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container, containerVariants }; 