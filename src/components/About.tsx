import React from 'react';
import { Shield, Leaf, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Bolt AI
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Leading the industry with innovative surface solutions since 1970
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                <Shield size={32} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Quality Assurance</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Every product undergoes rigorous testing to ensure the highest standards of quality and durability.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                <Leaf size={32} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Eco-Friendly</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Committed to sustainable practices and environmentally conscious manufacturing processes.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                <Award size={32} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Industry Leader</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Recognized for innovation and excellence in surface solutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}