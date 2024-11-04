import React from 'react';
import Link from 'next/link';

const ResourcesPage: React.FC = () => {
  return (
    <div>
      {/* Title Bar Section with Background Image and Overlay */}
      <div className="relative w-full h-80 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/nav.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 text-white text-center px-4">
          <nav className="text-sm mb-2">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link> / <span className="text-white">Resources</span>
          </nav>

          <h1 className="text-4xl font-bold">Resources</h1>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="flex items-center justify-center h-96 bg-gray-100">
          <h1 className="text-4xl font-bold">Coming Soon!</h1>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;