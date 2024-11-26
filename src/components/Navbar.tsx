import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Bolt AI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#products" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#features" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">Contact Us</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="block hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#products" className="block hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="#features" className="block hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#contact" className="block bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}