"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShare, FaShoppingCart, FaHeadphones, FaShieldAlt, FaTruck } from "react-icons/fa";
import { notFound } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  model: string;
  price: string;
  image: string;
  category: string;
  brand: string;
  specifications?: {
    [key: string]: string;
  };
  colors?: string[];
  warranty?: string[];
}

// دیتای محصولات
const products: Product[] = [
  {
    id: 1,
    name: "گوشی موبایل سامسونگ",
    model: "Galaxy A54 5G",
    price: "12,499,000",
    image: "/images/newP1.webp",
    category: "mobile",
    brand: "samsung",
    specifications: {
      "حافظه داخلی": "256 گیگابایت",
      "RAM": "8 گیگابایت",
      "اندازه صفحه نمایش": "6.4 اینچ",
      "رزولوشن": "2340 x 1080",
      "سیستم عامل": "Android 13",
      "پردازنده": "Exynos 1380",
      "دوربین اصلی": "50 مگاپیکسل",
      "دوربین سلفی": "32 مگاپیکسل",
      "باتری": "5000 میلی‌آمپر",
      "وزن": "202 گرم"
    },
    colors: ["مشکی", "سفید", "بنفش"],
    warranty: ["18 ماهه", "24 ماهه"]
  },
  {
    id: 2,
    name: "لپ تاپ اپل",
    model: "MacBook Pro M3",
    price: "52,900,000",
    image: "/images/newP2.webp",
    category: "laptop",
    brand: "apple",
    specifications: {
      "پردازنده": "Apple M3",
      "RAM": "16 گیگابایت",
      "حافظه داخلی": "512 گیگابایت",
      "صفحه نمایش": "14.2 اینچ",
      "گرافیک": "18-core GPU",
      "باتری": "22 ساعت",
      "وزن": "1.6 کیلوگرم"
    },
    colors: ["نقره‌ای", "مشکی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: 3,
    name: "ساعت هوشمند اپل",
    model: "Apple Watch Series 9",
    price: "18,800,000",
    image: "/images/newP3.webp",
    category: "watch",
    brand: "apple",
    specifications: {
      "صفحه نمایش": "1.9 اینچ",
      "باتری": "18 ساعت",
      "مقاوم در برابر آب": "تا 50 متر",
      "سنسورها": "ضربان قلب، اکسیژن خون، شتاب‌سنج",
      "اتصال": "Wi-Fi, Bluetooth 5.3"
    },
    colors: ["مشکی", "نقره‌ای", "طلایی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: 4,
    name: "ایرپاد پرو",
    model: "AirPods Pro 2",
    price: "8,900,000",
    image: "/images/newP4.webp",
    category: "headphone",
    brand: "apple",
    specifications: {
      "نوع": "ایرپاد بی‌سیم",
      "اتصال": "Bluetooth 5.3",
      "باتری": "6 ساعت",
      "حذف نویز": "فعال",
      "مقاوم در برابر آب": "IPX4"
    },
    colors: ["سفید"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: 5,
    name: "تبلت سامسونگ",
    model: "Galaxy Tab S9 Ultra",
    price: "24,500,000",
    image: "/images/newP5.webp",
    category: "tablet",
    brand: "samsung",
    specifications: {
      "صفحه نمایش": "14.6 اینچ",
      "پردازنده": "Snapdragon 8 Gen 2",
      "RAM": "12 گیگابایت",
      "حافظه داخلی": "256 گیگابایت",
      "باتری": "11200 میلی‌آمپر",
      "سیستم عامل": "Android 13"
    },
    colors: ["مشکی", "نقره‌ای"],
    warranty: ["12 ماهه", "24 ماهه"]
  }
];

const categories = {
  mobile: "گوشی موبایل",
  tablet: "تبلت",
  watch: "ساعت هوشمند",
  headphone: "هدفون و هندزفری",
  laptop: "لپ تاپ"
};

const brands = {
  apple: "اپل",
  samsung: "سامسونگ",
  xiaomi: "شیائومی",
  sony: "سونی"
};

export default function ProductPage({ params }: { params: { category: string; brand: string; id: string } }) {
  const product = products.find(
    p => p.id === parseInt(params.id) && 
    p.category === params.category && 
    p.brand === params.brand
  );

  if (!product) {
    notFound();
  }

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [selectedWarranty, setSelectedWarranty] = useState(product.warranty?.[0] || "");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">صفحه اصلی</Link>
        <span>/</span>
        <Link href={`/products/${params.category}`} className="hover:text-blue-600">
          {categories[params.category as keyof typeof categories]}
        </Link>
        <span>/</span>
        <Link href={`/products/${params.category}/${params.brand}`} className="hover:text-blue-600">
          {brands[params.brand as keyof typeof brands]}
        </Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* تصویر محصول */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* اطلاعات محصول */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.model}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
            <span className="text-sm text-gray-500">تومان</span>
          </div>

          {/* مشخصات فنی */}
          {product.specifications && (
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-4">مشخصات فنی</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* رنگ‌ها */}
          {product.colors && (
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-4">رنگ‌های موجود</h2>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedColor === color
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* گارانتی */}
          {product.warranty && (
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-4">گارانتی</h2>
              <div className="flex gap-2">
                {product.warranty.map((w) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWarranty(w)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedWarranty === w
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* دکمه افزودن به سبد خرید */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}