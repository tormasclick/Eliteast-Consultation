// app/layout.tsx

import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'; // Importing the font
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const openSans = Open_Sans({ subsets: ['latin'] }); // Set the font options

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
        {/* No need to add the link here; the next/font package takes care of it */}
      </head>
      <body className={openSans.className}> {/* Apply the font class here */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}