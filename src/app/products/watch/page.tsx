"use client";
import { useState } from "react";
import Link from "next/link";
import { categories, brands, getProductsByCategory } from '@/data/data';

export default function WatchPage() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("newest");

  const products = getProductsByCategory("watch");

  const filteredProducts = products.filter(product => {
    const price = parseInt(product.price.replace(/,/g, ""));
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const priceMatch = price >= priceRange[0] && price <= priceRange[1];
    return brandMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/,/g, ""));
    const priceB = parseInt(b.price.replace(/,/g, ""));
    
    switch (sortBy) {
      case "price-asc":
        return priceA - priceB;
      case "price-desc":
        return priceB - priceA;
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">صفحه اصلی</Link>
        <span>/</span>
        <span>{categories.watch}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="md:col-span-1 space-y-6">
          {/* Brand Filter */}
          <div>
            <h3 className="font-semibold mb-4">برند</h3>
            <div className="space-y-2">
              {Object.entries(brands).map(([key, name]) => (
                <label key={key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(key)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedBrands([...selectedBrands, key]);
                      } else {
                        setSelectedBrands(selectedBrands.filter(brand => brand !== key));
                      }
                    }}
                    className="rounded text-blue-600"
                  />
                  <span>{name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="font-semibold mb-4">محدوده قیمت</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="100000000"
                step="1000000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{priceRange[0].toLocaleString()} تومان</span>
                <span>{priceRange[1].toLocaleString()} تومان</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{categories.watch}</h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="newest">جدیدترین</option>
              <option value="price-asc">قیمت: کم به زیاد</option>
              <option value="price-desc">قیمت: زیاد به کم</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.category}/${product.brand}/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.model}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">{product.price} تومان</span>
                    <span className="text-sm text-gray-500">{brands[product.brand as keyof typeof brands]}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 