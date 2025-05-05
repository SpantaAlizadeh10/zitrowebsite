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
    display: string;
    processor: string;
    ram: string;
    storage: string;
    battery: string;
    os: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "تبلت اپل",
    model: "iPad Pro M2",
    price: 45000000,
    image: "/images/newP1.webp",
    brand: "apple",
    specifications: {
      display: "12.9 اینچ",
      processor: "Apple M2",
      ram: "8 گیگابایت",
      storage: "256 گیگابایت",
      battery: "40.88 وات ساعت",
      os: "iPadOS"
    }
  },
  {
    id: 2,
    name: "تبلت سامسونگ",
    model: "Galaxy Tab S9 Ultra",
    price: 35000000,
    image: "/images/newP1.webp",
    brand: "samsung",
    specifications: {
      display: "14.6 اینچ",
      processor: "Snapdragon 8 Gen 2",
      ram: "12 گیگابایت",
      storage: "256 گیگابایت",
      battery: "11200 میلی‌آمپر",
      os: "Android 13"
    }
  }
];

const brands = {
  apple: "اپل",
  samsung: "سامسونگ",
  xiaomi: "شیائومی",
  lenovo: "لنوو",
  huawei: "هواوی"
};

export default function TabletPage() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000]);
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
        <span>تبلت</span>
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
                max="50000000"
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
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">تبلت</h2>
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
                href={`/products/tablet/${product.brand}/${product.id}`}
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
                  <p>صفحه نمایش: {product.specifications.display}</p>
                  <p>پردازنده: {product.specifications.processor}</p>
                  <p>رم: {product.specifications.ram}</p>
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