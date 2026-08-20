
import { PORTFOLIO_DATA } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-900 text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.personalInfo.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
