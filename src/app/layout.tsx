import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import StickyMobileCta from '@/components/StickyMobileCta/StickyMobileCta';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Compass Roofing | South Florida\'s Clear-Direction Roofer',
  description: 'Compass Roofing helps South Florida homeowners and property owners understand their roof condition with clear inspections, honest recommendations, and professional repairs and replacements.',
  keywords: 'roofing company Fort Lauderdale, roof repair South Florida, commercial roofing Broward County, residential roofing Broward, flat roof coating Florida',
  openGraph: {
    title: 'Compass Roofing | South Florida\'s Clear-Direction Roofer',
    description: 'Compass Roofing helps South Florida homeowners and property owners understand their roof condition with clear inspections, honest recommendations, and professional repairs and replacements.',
    url: 'https://compassroofing.com',
    siteName: 'Compass Roofing',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
