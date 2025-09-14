import { Inter, Orbitron } from 'next/font/google';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CosmicBackground from '@/components/shared/CosmicBackground';
import CursorTrail from '@/components/shared/CursorTrail';
import './globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-cosmic' });

export const metadata: Metadata = {
  title: 'TesseraNova - Navigating the Infinite Possibilities of Technology',
  description: 'TesseraNova guides enterprises through the wormhole of challenges to the galaxies of innovation. Cosmic-scale technology solutions for the digital universe.',
  keywords: 'web development, mobile app development, UI/UX design, digital marketing, technology solutions',
  openGraph: {
    title: 'TesseraNova - Navigating the Infinite Possibilities of Technology',
    description: 'TesseraNova guides enterprises through the wormhole of challenges to the galaxies of innovation. Cosmic-scale technology solutions for the digital universe.',
    url: 'https://tesseranova.com',
    siteName: 'TesseraNova',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TesseraNova',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TesseraNova - Innovative Technology Solutions',
    description: 'TesseraNova provides cutting-edge technology solutions including web development, mobile app development, UI/UX design, and digital marketing services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body 
        className={cn(
          inter.className,
          orbitron.variable,
          "antialiased min-h-screen flex flex-col overflow-x-hidden",
          "text-space-900 bg-gradient-to-b from-cosmic-100 to-nebula-300",
          "dark:text-cosmic-100 dark:from-space-950 dark:to-space-900",
          "transition-colors duration-500"
        )}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <CosmicBackground variant="starfield" intensity="medium" />
            <CursorTrail />
            <Navbar />
            <main className="flex-1 relative z-10">
              <div className="relative">
                <div className="absolute inset-0 -z-10 h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-nebula-300/20 via-transparent to-aurora-500/20 dark:from-starlight-500/10 dark:via-transparent dark:to-aurora-500/10" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(167,199,231,0.3),transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,rgba(123,97,255,0.2),transparent)]" />
                </div>
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
