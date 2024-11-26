import React from 'react';

const products = [
  {
    category: 'Laminates',
    items: [
      {
        name: 'Premium Wood Grain',
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88',
        description: 'Natural wood textures for elegant interiors'
      },
      {
        name: 'Solid Colors',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
        description: 'Bold and versatile solid color options'
      }
    ]
  },
  {
    category: 'Mica',
    items: [
      {
        name: 'Designer Mica',
        image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099',
        description: 'Stunning patterns for modern spaces'
      },
      {
        name: 'Metallic Series',
        image: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908',
        description: 'Luxurious metallic finishes'
      }
    ]
  },
  {
    category: 'Glass',
    items: [
      {
        name: 'Tempered Glass',
        image: 'https://images.unsplash.com/photo-1600573472591-ee6c8e695473',
        description: 'Safety and style combined'
      },
      {
        name: 'Decorative Glass',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
        description: 'Artistic patterns and textures'
      }
    ]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our extensive range of premium surface solutions
          </p>
        </div>

        <div className="mt-20">
          {products.map((category) => (
            <div key={category.category} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-80 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <p className="mt-2 text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}