"use client";

import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative h-[75vh] bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/hero.jpg")',
      }}
    >
      {/* Retro grid overlay */}
      <div className="absolute inset-0 grid-background"></div>

      {/* Hero content with black transparent background */}
      <div className="relative z-10 text-center hero-text-container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Eliteast Consultation</span>, Transparent, Scalable Payment Solutions
        </h1>
        <p className="text-lg md:text-1xl animate-fadeIn delay-200">
          A leading payments technology provider, Stax is committed to empowering you and your business. With our unique capabilities, we craft an exceptional, tailor-made, frictionless experience for our merchants.
        </p>
      </div>
    </div>
  );
};

export default Hero;