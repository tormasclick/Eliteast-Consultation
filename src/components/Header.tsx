"use client";

import { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger icon
import { AiOutlineClose } from 'react-icons/ai'; // Close icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev); // Toggle menu state
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false); // Close menu on link click
    }
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Eliteast Consultation</Link>
        </h1>

        {/* Hamburger icon */}
        <div 
          className="md:hidden cursor-pointer" 
          onClick={toggleMenu} 
          tabIndex={0} // Make it keyboard accessible
          onKeyPress={(e) => e.key === 'Enter' && toggleMenu()} // Toggle on Enter key press
          role="button"
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
        </div>

        {/* Navigation links */}
        <nav className={`md:flex md:items-center md:space-x-4 transition-transform duration-300 ease-in-out ${isOpen ? 'absolute top-16 left-0 w-full bg-gray-800 z-50' : 'hidden md:static'}`}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Link href="/solutions" className="hover:underline py-2 px-4" onClick={handleLinkClick}>Solutions</Link>
            <Link href="/industry" className="hover:underline py-2 px-4" onClick={handleLinkClick}>Industry</Link>
            <Link href="/resources" className="hover:underline py-2 px-4" onClick={handleLinkClick}>Resources</Link>
            <Link href="/company" className="hover:underline py-2 px-4" onClick={handleLinkClick}>Company</Link>
            <Link href="/get-started" className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-600" onClick={handleLinkClick}>Get Started</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;