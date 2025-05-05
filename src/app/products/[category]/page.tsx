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
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "گوشی موبایل اپل",
    model: "iPhone 16 Pro Max",
    price: 89000000,
    image: "/images/newP1.webp",
    brand: "apple",
    category: "mobile"
  },
  {
    id: 2,
    name: "لپ تاپ اپل",
    model: "MacBook Air M2",
    price: 52900000,
    image: "/images/newP2.webp",
    brand: "apple",
    category: "laptop"
  },
  {
    id: 3,
    name: "ساعت هوشمند اپل",
    model: "Apple Watch Series 8",
    price: 18800000,
    image: "/images/newP3.webp",
    brand: "apple",
    category: "watch"
  },
  {
    id: 4,
    name: "ایرپاد پرو",
    model: "AirPods Pro 2",
    price: 8900000,
    image: "/images/newP4.webp",
    brand: "apple",
    category: "headphone"
  }
];

const categories = {
  mobile: "گوشی موبایل",
  tablet: "تبلت",
  watch: "ساعت هوشمند",
  headphone: "هدفون و هندزفری"
};

const brands = {
  apple: "اپل",
  samsung: "سامسونگ",
  xiaomi: "شیائومی"
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = product.category === params.category;
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesBrand && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-orange-500">صفحه اصلی</Link>
        <span>/</span>
        <span>{categories[params.category as keyof typeof categories]}</span>
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
                max="100000000"
                step="1000000"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.category}/${product.brand}/${product.id}`}
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
                <div className="flex justify-between items-center">
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