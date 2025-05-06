"use client";
import Link from "next/link";
import { FaShare, FaShoppingCart, FaHeadphones, FaShieldAlt, FaTruck } from "react-icons/fa";
import { useState } from 'react';
import Image from 'next/image';
import { categories, brands } from '@/data/data';
import { Product } from '@/data/data';

interface ProductDetailsProps {
  product: Product;
  similarProducts: Product[];
}

export default function ProductDetails({ product, similarProducts }: ProductDetailsProps) {
  const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0] || '');
  const [selectedWarranty, setSelectedWarranty] = useState<string>(product.warranty?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">صفحه اصلی</Link>
        <span>/</span>
        <Link href={`/products/${product.category}`} className="hover:text-blue-600">
          {categories[product.category as keyof typeof categories]}
        </Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg p-4">
          <div className="relative h-96">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600">{product.model}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-blue-600">{product.price} تومان</span>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              <FaShoppingCart />
              <span>افزودن به سبد خرید</span>
            </button>
          </div>

          {/* Colors */}
          {product.colors && (
            <div>
              <h3 className="font-semibold mb-2">رنگ</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedColor === color
                        ? 'border-blue-600 text-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Warranty */}
          {product.warranty && (
            <div>
              <h3 className="font-semibold mb-2">گارانتی</h3>
              <div className="flex gap-2">
                {product.warranty.map((warranty) => (
                  <button
                    key={warranty}
                    onClick={() => setSelectedWarranty(warranty)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedWarranty === warranty
                        ? 'border-blue-600 text-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {warranty}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-2">تعداد</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-lg"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FaTruck className="text-blue-600" />
              <span>ارسال سریع</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-600" />
              <span>ضمانت اصالت کالا</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeadphones className="text-blue-600" />
              <span>پشتیبانی ۲۴/۷</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="bg-white rounded-lg p-6 mb-12">
        <h2 className="text-xl font-bold mb-4">مشخصات فنی</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.specifications &&
            Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b">
                <span className="text-gray-600">{key}</span>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Similar Products */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-6">محصولات مشابه</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map((similarProduct) => (
            <Link
              key={similarProduct.id}
              href={`/products/${similarProduct.category}/${similarProduct.brand}/${similarProduct.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={similarProduct.image}
                  alt={similarProduct.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{similarProduct.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{similarProduct.model}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{similarProduct.price} تومان</span>
                  <span className="text-sm text-gray-500">
                    {brands[similarProduct.brand as keyof typeof brands]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6">نظرات کاربران</h2>
        <div className="space-y-6">
          {/* Comment Form */}
          <div className="border rounded-lg p-4">
            <textarea
              className="w-full p-2 border rounded-lg mb-4"
              rows={4}
              placeholder="نظر خود را بنویسید..."
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              ارسال نظر
            </button>
          </div>

          {/* Sample Comments */}
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">علی محمدی</span>
                <span className="text-sm text-gray-500">۱۴۰۲/۱۲/۱۵</span>
              </div>
              <p className="text-gray-600">
                کیفیت محصول عالیه. بسته‌بندی هم خیلی خوب بود. پیشنهاد می‌کنم.
              </p>
            </div>
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">رضا احمدی</span>
                <span className="text-sm text-gray-500">۱۴۰۲/۱۲/۱۰</span>
              </div>
              <p className="text-gray-600">
                قیمت مناسبی داره و کیفیتش هم خوبه. راضی هستم از خریدم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 