import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Modern Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Innovating Spaces with</span>
            <span className="block text-blue-400">Elegance and Strength</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your spaces with our premium collection of laminates, mica, and glass solutions.
            Crafted for durability, designed for beauty.
          </p>
          <div className="mt-10">
            <a
              href="#products"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Explore Products
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}