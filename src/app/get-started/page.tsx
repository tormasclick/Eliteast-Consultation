// src/app/get-started/page.tsx
import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm'; // Adjust import if necessary

const GetStartedPage: React.FC = () => {
  return (
    <div>
      {/* Title Bar Section with Background Image and Overlay */}
      <div className="relative w-full h-80 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/nav.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white text-center px-4">
          <nav className="text-sm mb-2">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link> / <span className="text-white">Get Started</span>
          </nav>
          <h1 className="text-4xl font-bold">Get Started</h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto p-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default GetStartedPage;