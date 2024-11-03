// src/components/ServiceCards.tsx
import React from 'react';

const services = [
  {
    icon: '/images/globalcurrency.png',
    title: 'Global Expansion',
    description: 'Accelerate international growth without the complexity.',
  },
  {
    icon: '/images/transaction.png',
    title: 'Optimise Transaction Costs',
    description: 'Transform payments from a cost center to a profit driver.',
  },
  {
    icon: '/images/customer-experience.png',
    title: 'Enhance Customer Experience',
    description: 'Boost conversion rates and cultivate customer loyalty.',
  },
  {
    icon: '/images/continuous-improvement.png',
    title: 'Ensure Business Continuity',
    description: 'Eliminate single points of failure and maximise uptime.',
  },
  {
    icon: '/images/streamline-finance.png',
    title: 'Streamline Financial Operations',
    description: 'Free up resources and gain unprecedented financial clarity.',
  },
  {
    icon: '/images/prevention.png',
    title: 'Fraud Prevention and Risk Management',
    description: 'Minimise fraud losses while maximising legitimate transactions.',
  },
];

const ServiceCards: React.FC = () => {
  return (
    <div
      className="relative w-screen h-auto py-12"
      style={{
        backgroundImage: "url('/images/nairobi.jpg')", // Change the background image to nairobi.jpg
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6"> {/* Ensure 6 columns in one row */}
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;