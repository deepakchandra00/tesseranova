import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

interface Schema {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export function generateMetadata({ title, description, keywords }: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function JsonLd({ schema }: { schema: Schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 