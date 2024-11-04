// app/layout.tsx

import type { Metadata } from "next";
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';

export const metadata: Metadata = {
  title: 'Eliteast Consultation',
  description: 'Headless WordPress and Next.js project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'Open Sans, sans-serif' }}>
        <Header />
        <Hero /> 
        <main>{children}</main>
        <ServiceCards />
        <Footer />
      </body>
    </html>
  );
}