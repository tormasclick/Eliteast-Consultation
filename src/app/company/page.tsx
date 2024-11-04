// src/pages/CompanyPage.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CompanyPage: React.FC = () => {
  return (
    <div>
      {/* Title Bar Section with Centered Content */}
      <div className="relative w-full h-80 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/nav.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better image visibility */}

        {/* Centered Content */}
        <div className="relative z-10 text-white text-center px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-2">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link> / <span className="text-white">Company</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl font-bold">Company</h1>
        </div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-center h-96 bg-gray-100">
          <h1 className="text-4xl font-bold">Coming Soon!</h1>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;