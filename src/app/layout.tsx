import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';

export const metadata: Metadata = {
  title: {
    default: 'Space Node Architects | Connecting Spaces, Functions, and Experiences',
    template: '%s | Space Node Architects',
  },
  description:
    'Space Node Architects is a multidisciplinary architectural and design practice based in Cochin, Kerala, delivering innovative and context-driven projects across India, UAE, and USA.',
  keywords: [
    'architecture firm Kerala',
    'architects Cochin',
    'luxury architecture India',
    'interior design Kerala',
    'landscape architecture',
    'Space Node Architects',
    'contemporary architecture',
    'residential architecture India',
    'commercial architecture UAE',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://spacenode.com',
    siteName: 'Space Node Architects',
    title: 'Space Node Architects | Connecting Spaces, Functions, and Experiences',
    description:
      'A multidisciplinary architectural and design practice based in Cochin, Kerala, delivering innovative and context-driven projects across India, UAE, and USA.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Node Architects',
    description: 'Connecting Spaces, Functions, and Experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F9FA] text-[#161616] antialiased overflow-x-clip">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
