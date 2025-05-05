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
  id: number;
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
const products: Record<number, Product> = {
  1: {
    title: "ایرپاد پرو اپل",
    specifications: [
      { title: "نوع", value: "ایرپاد پرو" },
      { title: "نسخه", value: "نسخه 2" },
      { title: "رابط اتصال", value: "بلوتوث 5.3" },
      { title: "مقاومت در برابر آب", value: "IPX4" },
      { title: "مدت زمان پخش", value: "6 ساعت" },
      { title: "مدت زمان شارژ", value: "30 دقیقه" },
      { title: "وزن", value: "5.3 گرم" },
      { title: "رنگ", value: "سفید" }
    ],
    colors: ["سفید"],
    warranty: ["12 ماهه", "18 ماهه"],
    image: "/images/newP4.webp",
    similarProducts: [
      { id: 2, title: "هندزفری سامسونگ", price: 5200000, discount: 15, image: "/images/Mobile2.webp" },
      { id: 3, title: "هدفون سونی", price: 9800000, discount: 10, image: "/images/Mobile3.webp" },
      { id: 4, title: "ایرپاد مکس", price: 16500000, discount: 5, image: "/images/Mobile4.webp" }
    ]
  },
  2: {
    title: "هندزفری سامسونگ",
    specifications: [
      { title: "نوع", value: "گالکسی بادز 2 پرو" },
      { title: "رابط اتصال", value: "بلوتوث 5.3" },
      { title: "مقاومت در برابر آب", value: "IPX7" },
      { title: "مدت زمان پخش", value: "5 ساعت" },
      { title: "مدت زمان شارژ", value: "40 دقیقه" },
      { title: "وزن", value: "5.5 گرم" },
      { title: "رنگ", value: "مشکی" }
    ],
    colors: ["مشکی", "سفید"],
    warranty: ["12 ماهه", "18 ماهه"],
    image: "/images/Mobile2.webp",
    similarProducts: [
      { id: 1, title: "ایرپاد پرو اپل", price: 8900000, discount: 0, image: "/images/newP4.webp" },
      { id: 3, title: "هدفون سونی", price: 9800000, discount: 10, image: "/images/Mobile3.webp" },
      { id: 4, title: "ایرپاد مکس", price: 16500000, discount: 5, image: "/images/Mobile4.webp" }
    ]
  },
  3: {
    title: "هدفون سونی",
    specifications: [
      { title: "نوع", value: "WH-1000XM4" },
      { title: "رابط اتصال", value: "بلوتوث 5.0" },
      { title: "مقاومت در برابر آب", value: "IPX4" },
      { title: "مدت زمان پخش", value: "30 ساعت" },
      { title: "مدت زمان شارژ", value: "3 ساعت" },
      { title: "وزن", value: "254 گرم" },
      { title: "رنگ", value: "مشکی" }
    ],
    colors: ["مشکی", "نقره‌ای"],
    warranty: ["12 ماهه", "24 ماهه"],
    image: "/images/Mobile3.webp",
    similarProducts: [
      { id: 1, title: "ایرپاد پرو اپل", price: 8900000, discount: 0, image: "/images/newP4.webp" },
      { id: 2, title: "هندزفری سامسونگ", price: 5200000, discount: 15, image: "/images/Mobile2.webp" },
      { id: 4, title: "ایرپاد مکس", price: 16500000, discount: 5, image: "/images/Mobile4.webp" }
    ]
  },
  4: {
    title: "ایرپاد مکس",
    specifications: [
      { title: "نوع", value: "ایرپاد مکس" },
      { title: "رابط اتصال", value: "بلوتوث 5.0" },
      { title: "مقاومت در برابر آب", value: "IPX4" },
      { title: "مدت زمان پخش", value: "20 ساعت" },
      { title: "مدت زمان شارژ", value: "2 ساعت" },
      { title: "وزن", value: "384 گرم" },
      { title: "رنگ", value: "نقره‌ای" }
    ],
    colors: ["نقره‌ای", "سبز", "آبی"],
    warranty: ["12 ماهه", "24 ماهه"],
    image: "/images/Mobile4.webp",
    similarProducts: [
      { id: 1, title: "ایرپاد پرو اپل", price: 8900000, discount: 0, image: "/images/newP4.webp" },
      { id: 2, title: "هندزفری سامسونگ", price: 5200000, discount: 15, image: "/images/Mobile2.webp" },
      { id: 3, title: "هدفون سونی", price: 9800000, discount: 10, image: "/images/Mobile3.webp" }
    ]
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products[productId];
  
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