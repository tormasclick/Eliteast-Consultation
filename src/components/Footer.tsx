import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold">Solutions</h3>
          <ul>
            <li>Payments Orchestration</li>
            <li>Hosted Payment Page</li>
            <li>Reporting & Analytics</li>
            <li>Intelligent Routing</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Embedded Finance</h3>
          <ul>
            <li>Alternative Payment Methods</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Payment Optimisation</h3>
          <ul>
            <li>Fraud Management</li>
            <li>Payment Reconciliation</li>
          </ul>
        </div>
      </div>
      <hr className="border-white my-4" />
      <div className="flex justify-between items-center">
        <p>Privacy Policy</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
            <FaInstagram />
          </a>
        </div>
      </div>
      <p className="text-center mt-4">© 2024 Eliteast Consultation</p>
    </footer>
  );
};

export default Footer;