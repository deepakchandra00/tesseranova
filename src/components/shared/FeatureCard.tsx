import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) {
  return (
    <Card variant="secondary" className={cn(
      "group relative overflow-hidden transition-all duration-300 hover:shadow-lg",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-transparent before:transition-all before:duration-300",
      "hover:before:bg-gradient-to-r hover:before:from-white/10 hover:before:to-transparent",
      className
    )}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader>
        {Icon && (
          <div className="mb-4">
            <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
          </div>
        )}
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="mt-2 text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
} 