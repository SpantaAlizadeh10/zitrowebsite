"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  model: string;
  price: number;
  image: string;
  brand: string;
  specifications: {
    type: string;
    power: string;
    connectivity: string;
    battery: string;
    waterproof: boolean;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "اسپیکر سونی",
    model: "SRS-XB43",
    price: 4500000,
    image: "/images/newP1.webp",
    brand: "sony",
    specifications: {
      type: "بلوتوثی",
      power: "30 وات",
      connectivity: "بلوتوث 5.0",
      battery: "24 ساعت",
      waterproof: true
    }
  },
  {
    id: 2,
    name: "اسپیکر جی‌بی‌ال",
    model: "Charge 5",
    price: 3800000,
    image: "/images/newP1.webp",
    brand: "jbl",
    specifications: {
      type: "بلوتوثی",
      power: "40 وات",
      connectivity: "بلوتوث 5.1",
      battery: "20 ساعت",
      waterproof: true
    }
  }
];

const brands = {
  sony: "سونی",
  jbl: "جی‌بی‌ال",
  bose: "بوز",
  marshall: "مارشال",
  harman: "هارمن"
};

export default function SpeakerPage() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "newest">("newest");

  const filteredProducts = products
    .filter(product => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesBrand && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return b.id - a.id;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-orange-500">صفحه اصلی</Link>
        <span>/</span>
        <span>اسپیکرها</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="md:col-span-1 space-y-6">
          {/* Brand Filter */}
          <div>
            <h3 className="font-bold mb-4">برند</h3>
            <div className="space-y-2">
              {Object.entries(brands).map(([key, value]) => (
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
                    className="rounded text-orange-500"
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="font-bold mb-4">محدوده قیمت</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="10000000"
                step="100000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
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
            <h2 className="text-xl font-bold">اسپیکرها</h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="newest">جدیدترین</option>
              <option value="price-asc">قیمت: کم به زیاد</option>
              <option value="price-desc">قیمت: زیاد به کم</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/speaker/${product.brand}/${product.id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.model}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>نوع: {product.specifications.type}</p>
                  <p>توان: {product.specifications.power}</p>
                  <p>باتری: {product.specifications.battery}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price.toLocaleString()} تومان
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 