"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShare, FaShoppingCart, FaHeadphones, FaShieldAlt, FaTruck } from "react-icons/fa";

interface ProductSpec {
  title: string;
  value: string;
}

interface SimilarProduct {
  id: string;
  title: string;
  price: number;
  discount: number;
  image: string;
}

interface Product {
  title: string;
  specifications: Array<{ title: string; value: string }>;
  colors: string[];
  warranty: string[];
  image: string;
  similarProducts: SimilarProduct[];
}

// این داده‌ها باید از API یا دیتابیس دریافت شوند
const products: Record<string, Product> = {
  "1": {
    title: "تبلت شیائومی مدل Redmi Pad SE ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    specifications: [
      { title: "حافظه داخلی", value: "256 گیگابایت" },
      { title: "حافظه RAM", value: "8 گیگابایت" },
      { title: "اندازه صفحه نمایش", value: "11 اینچ" },
      { title: "رزولوشن تصویر", value: "1920 × 1200 پیکسل" },
      { title: "سیستم عامل", value: "Android 13" },
      { title: "پردازنده", value: "Qualcomm Snapdragon 680" },
      { title: "دوربین پشت", value: "8 مگاپیکسل" },
      { title: "دوربین جلو", value: "5 مگاپیکسل" },
      { title: "باتری", value: "8000 میلی‌آمپر ساعت" },
      { title: "وزن", value: "478 گرم" }
    ],
    colors: ["مشکی", "نقره‌ای", "سبز"],
    warranty: ["18 ماهه", "24 ماهه"],
    image: "/images/tablet1.webp",
    similarProducts: [
      { id: "2", title: "تبلت پوکو مدل Poco Pad", price: 21149000, discount: 8, image: "/images/tablet2.webp" },
      { id: "3", title: "تبلت شیائومی مدل Pad 6s Pro", price: 45951000, discount: 28, image: "/images/tablet3.webp" },
      { id: "4", title: "تبلت هوشمند شیائومی مدل REDMI PAD PRO", price: 23095700, discount: 32, image: "/images/tablet4.webp" }
    ]
  },
  "2": {
    title: "تبلت پوکو مدل Poco Pad ظرفیت 256 گیگابایت رم 8 گیگابایت",
    specifications: [
      { title: "حافظه داخلی", value: "256 گیگابایت" },
      { title: "حافظه RAM", value: "8 گیگابایت" },
      { title: "اندازه صفحه نمایش", value: "12.1 اینچ" },
      { title: "رزولوشن تصویر", value: "2560 × 1600 پیکسل" },
      { title: "سیستم عامل", value: "Android 14" },
      { title: "پردازنده", value: "Qualcomm Snapdragon 7s Gen 2" },
      { title: "دوربین پشت", value: "8 مگاپیکسل" },
      { title: "دوربین جلو", value: "8 مگاپیکسل" },
      { title: "باتری", value: "10000 میلی‌آمپر ساعت" },
      { title: "وزن", value: "571 گرم" }
    ],
    colors: ["مشکی", "نقره‌ای"],
    warranty: ["18 ماهه", "24 ماهه"],
    image: "/images/tablet2.webp",
    similarProducts: [
      { id: "1", title: "تبلت شیائومی مدل Redmi Pad SE", price: 42500000, discount: 28, image: "/images/tablet1.webp" },
      { id: "3", title: "تبلت شیائومی مدل Pad 6s Pro", price: 45951000, discount: 28, image: "/images/tablet3.webp" },
      { id: "4", title: "تبلت هوشمند شیائومی مدل REDMI PAD PRO", price: 23095700, discount: 32, image: "/images/tablet4.webp" }
    ]
  },
  "3": {
    title: "تبلت شیائومی مدل Pad 6s Pro ظرفیت 512 گیگابایت رم 12 گیگابایت",
    specifications: [
      { title: "حافظه داخلی", value: "512 گیگابایت" },
      { title: "حافظه RAM", value: "12 گیگابایت" },
      { title: "اندازه صفحه نمایش", value: "12.4 اینچ" },
      { title: "رزولوشن تصویر", value: "3048 × 2032 پیکسل" },
      { title: "سیستم عامل", value: "Android 14" },
      { title: "پردازنده", value: "Qualcomm Snapdragon 8 Gen 2" },
      { title: "دوربین پشت", value: "50 مگاپیکسل" },
      { title: "دوربین جلو", value: "32 مگاپیکسل" },
      { title: "باتری", value: "10000 میلی‌آمپر ساعت" },
      { title: "وزن", value: "590 گرم" }
    ],
    colors: ["مشکی", "نقره‌ای"],
    warranty: ["18 ماهه", "24 ماهه"],
    image: "/images/tablet3.webp",
    similarProducts: [
      { id: "1", title: "تبلت شیائومی مدل Redmi Pad SE", price: 42500000, discount: 28, image: "/images/tablet1.webp" },
      { id: "2", title: "تبلت پوکو مدل Poco Pad", price: 21149000, discount: 8, image: "/images/tablet2.webp" },
      { id: "4", title: "تبلت هوشمند شیائومی مدل REDMI PAD PRO", price: 23095700, discount: 32, image: "/images/tablet4.webp" }
    ]
  },
  "4": {
    title: "تبلت هوشمند شیائومی مدل REDMI PAD PRO",
    specifications: [
      { title: "حافظه داخلی", value: "128 گیگابایت" },
      { title: "حافظه RAM", value: "6 گیگابایت" },
      { title: "اندازه صفحه نمایش", value: "11 اینچ" },
      { title: "رزولوشن تصویر", value: "2560 × 1600 پیکسل" },
      { title: "سیستم عامل", value: "Android 13" },
      { title: "پردازنده", value: "Qualcomm Snapdragon 7s Gen 2" },
      { title: "دوربین پشت", value: "8 مگاپیکسل" },
      { title: "دوربین جلو", value: "8 مگاپیکسل" },
      { title: "باتری", value: "8000 میلی‌آمپر ساعت" },
      { title: "وزن", value: "478 گرم" }
    ],
    colors: ["مشکی", "نقره‌ای"],
    warranty: ["18 ماهه", "24 ماهه"],
    image: "/images/tablet4.webp",
    similarProducts: [
      { id: "1", title: "تبلت شیائومی مدل Redmi Pad SE", price: 42500000, discount: 28, image: "/images/tablet1.webp" },
      { id: "2", title: "تبلت پوکو مدل Poco Pad", price: 21149000, discount: 8, image: "/images/tablet2.webp" },
      { id: "3", title: "تبلت شیائومی مدل Pad 6s Pro", price: 45951000, discount: 28, image: "/images/tablet3.webp" }
    ]
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id];
  
  if (!product) {
    return <div>محصول یافت نشد</div>;
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedWarranty, setSelectedWarranty] = useState(product.warranty[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* هدر محصول */}
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-orange-500">
            <FaShare />
          </button>
          <button className="text-gray-600 hover:text-orange-500">
            <FaShare />
          </button>
          <button className="text-gray-600 hover:text-orange-500">
            <FaShare />
          </button>
        </div>
      </div>

      {/* اطلاعات اصلی محصول */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* تصویر محصول */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="relative w-full h-[400px]">
            <Image 
              src={product.image} 
              alt={product.title} 
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        {/* اطلاعات محصول */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <span className="text-gray-500">(0) نظر</span>
          </div>

          {/* انتخاب رنگ */}
          <div className="space-y-2">
            <span className="text-gray-700">رنگ:</span>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button 
                  key={color}
                  className={`px-4 py-2 rounded-lg ${selectedColor === color ? "bg-orange-500 text-white" : "bg-gray-100"}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* گارانتی */}
          <div className="space-y-2">
            <span className="text-gray-700">گارانتی:</span>
            <div className="flex gap-2">
              {product.warranty.map((warranty) => (
                <button 
                  key={warranty}
                  className={`px-4 py-2 rounded-lg ${selectedWarranty === warranty ? "bg-orange-500 text-white" : "bg-gray-100"}`}
                  onClick={() => setSelectedWarranty(warranty)}
                >
                  {warranty}
                </button>
              ))}
            </div>
          </div>

          {/* اطلاعات فروشنده */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FaShoppingCart className="text-orange-500" />
              <span>خرید حضوری</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeadphones className="text-orange-500" />
              <span>پشتیبانی 10.30 تا 17</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-orange-500" />
              <span>تضمین اصالت کالا</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTruck className="text-orange-500" />
              <span>تامین حرفه‌ای کالا</span>
            </div>
          </div>
        </div>
      </div>

      {/* ویژگی‌های کالا */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">ویژگی کالا</h3>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <tbody>
              {product.specifications.map((spec, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-3 text-gray-700">{spec.title}</td>
                  <td className="px-4 py-3">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* کالاهای مشابه */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">کالاهای مشابه</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {product.similarProducts.map((similarProduct) => (
            <Link 
              key={similarProduct.id} 
              href={`/products/${similarProduct.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
                <div className="relative h-48 mb-4">
                  <Image 
                    src={similarProduct.image} 
                    alt={similarProduct.title} 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2 line-clamp-2">{similarProduct.title}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-orange-500 font-bold">{similarProduct.price.toLocaleString()} تومان</span>
                  <span className="text-green-500">{similarProduct.discount}% تخفیف</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* نظرات */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">نظرات</h3>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="mb-4">چطور می‌توانم در مورد این کالا نظر بدهم؟</p>
          <p className="mb-6">اگر این محصول را از خریداری کرده‌اید و یا تجربه استفاده از آن را دارید، می‌توانید با زدن بر روی دکمه زیر، نظر خود ثبت کنید.</p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            افزودن نظر جدید
          </button>
        </div>
      </div>
    </div>
  );
} 