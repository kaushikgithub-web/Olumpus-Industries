import React from 'react';
import { CheckCircle, Clock, Sparkles, Heart, Shield, Leaf } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Premium Quality',
    description: 'Superior materials and craftsmanship in every product'
  },
  {
    icon: Clock,
    title: 'Long-lasting Durability',
    description: 'Built to withstand the test of time'
  },
  {
    icon: Sparkles,
    title: 'Modern Designs',
    description: 'Contemporary patterns and textures'
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description: 'Dedicated support and service excellence'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous testing and quality control'
  },
  {
    icon: Leaf,
    title: 'Eco-friendly',
    description: 'Sustainable manufacturing practices'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Experience the difference with our premium surface solutions
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="relative group bg-white p-6 rounded-lg shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                  <div className="relative bg-white p-6 rounded-lg">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}