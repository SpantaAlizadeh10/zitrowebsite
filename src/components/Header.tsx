"use client";
import Image from "next/image";
import top from "../../public/top.gif";
import logo from "../../public/zitrologo.svg";
import {
  FaBoxes,
  FaBolt,
  FaRecycle,
  FaNewspaper,
  FaCreditCard,
  FaStore,
  FaSearch,
  FaBars,
  FaTag,
  FaMobile,
  FaBook,
} from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { useState } from "react";

const categories = [
  {
    title: "گوشی موبایل",
    icon: "📱",
    brands: [
      { name: "اپل", logo: "🍎", products: "همه محصولات" },
      { name: "سامسونگ", logo: "📱", products: "همه محصولات" },
      { name: "شیائومی", logo: "📱", products: "همه محصولات" },
      { name: "جی بی ال", logo: "📱", products: "همه محصولات" },
      { name: "هایلو", logo: "📱", products: "همه محصولات" },
      { name: "انکر", logo: "📱", products: "همه محصولات" },
      { name: "ناتینگ فون", logo: "📱", products: "همه محصولات" }
    ],
  },
  {
    title: "هدفون و هندزفری",
    icon: "🎧",
    brands: [
      { name: "اپل", logo: "🍎", products: "همه محصولات" },
      { name: "سامسونگ", logo: "📱", products: "همه محصولات" },
      { name: "شیائومی", logo: "📱", products: "همه محصولات" },
      { name: "جی بی ال", logo: "📱", products: "همه محصولات" },
      { name: "هایلو", logo: "📱", products: "همه محصولات" },
      { name: "انکر", logo: "📱", products: "همه محصولات" },
      { name: "ناتینگ فون", logo: "📱", products: "همه محصولات" }
    ],
  },
  {
    title: "ساعت هوشمند",
    icon: "⌚",
    brands: [
      { name: "اپل", logo: "🍎", products: "همه محصولات" },
      { name: "سامسونگ", logo: "📱", products: "همه محصولات" },
      { name: "شیائومی", logo: "📱", products: "همه محصولات" },
      { name: "جی بی ال", logo: "📱", products: "همه محصولات" },
      { name: "هایلو", logo: "📱", products: "همه محصولات" },
      { name: "انکر", logo: "📱", products: "همه محصولات" },
      { name: "ناتینگ فون", logo: "📱", products: "همه محصولات" }
    ],
  },
  {
    title: "لپ تاپ",
    icon: "💻",
    brands: [
      { name: "اپل", logo: "🍎", products: "همه محصولات" },
      { name: "مایکروسافت", logo: "💻", products: "همه محصولات" },
      { name: "شیائومی", logo: "📱", products: "همه محصولات" },
      { name: "جی بی ال", logo: "📱", products: "همه محصولات" },
      { name: "هایلو", logo: "📱", products: "همه محصولات" },
      { name: "انکر", logo: "📱", products: "همه محصولات" },
      { name: "ناتینگ فون", logo: "📱", products: "همه محصولات" }
    ],
  },
  {
    title: "کنسول های بازی",
    icon: "🎮",
    brands: [
      { name: "مایکروسافت", logo: "🎮", products: "همه محصولات" },
      { name: "سونی", logo: "🎮", products: "همه محصولات" },
      { name: "شیائومی", logo: "📱", products: "همه محصولات" },
      { name: "جی بی ال", logo: "📱", products: "همه محصولات" },
      { name: "هایلو", logo: "📱", products: "همه محصولات" },
      { name: "انکر", logo: "📱", products: "همه محصولات" },
      { name: "ناتینگ فون", logo: "📱", products: "همه محصولات" }
    ],
  },
  {
    title: "تبلت",
    icon: "📱",
    brands: [
      { name: "اپل", logo: "🍎", products: "همه محصولات" },
      { name: "سامسونگ", logo: "📱", products: "همه محصولات" },
      { name: "شیائومی", logo: "📱", products: "همه محصولات" },
      { name: "جی بی ال", logo: "📱", products: "همه محصولات" },
      { name: "هایلو", logo: "📱", products: "همه محصولات" },
      { name: "انکر", logo: "📱", products: "همه محصولات" },
      { name: "ناتینگ فون", logo: "📱", products: "همه محصولات" }
    ],
  },
  {
    title: "لوازم جانبی",
    icon: "🔌",
    brands: [
      { name: "لوازم جانبی موبایل و تبلت", logo: "🔌", products: "همه محصولات" },
      { name: "لوازم جانبی", logo: "🔌", products: "همه محصولات" },
      { name: "شیائومی", logo: "📱", products: "همه محصولات" },
      { name: "جی بی ال", logo: "📱", products: "همه محصولات" },
      { name: "هایلو", logo: "📱", products: "همه محصولات" },
      { name: "انکر", logo: "📱", products: "همه محصولات" },
      { name: "ناتینگ فون", logo: "📱", products: "همه محصولات" }
    ],
  },
];

let logoName = "زیترو";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Image src={top} alt="top" className="md:h-12 h-8 w-full sm:w-full md:w-full" />
      <header className="bg-white shadow-md sticky top-0 z-50 text-sm">
        {/* بخش جستجه */}
        <div className="max-w-[99%] mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* لوگو-*/}
          <div className="hidden sm:block">
            <Image
              src={logo}
              alt="zitroLogo"
              className="w-28 h-auto object-contain"
            />
          </div>

          {/* input   آیکون ذره‌بین */}
          <div className="flex items-center relative w-full sm:w-auto">
            <input
              type="text"
              placeholder={`جستجو در `}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full sm:w-xl text-black border border-gray-300 rounded-lg py-4 pr-4 pl-10 text-right focus:outline-none hover:border-orange-500 transition-colors"
            />
            <span className={`absolute right-17 top-1/2 transform -translate-y-1/2 text-orange-600 ${searchValue ? 'hidden' : ''}`}>زیترو</span>
            <FaSearch className="absolute left-3 text-gray-500" />
          </div>

          {/* آیکون‌ها - فقط در دسکتاپ */}
          <div className="hidden sm:flex sm:items-center gap-4 text-gray-600 text-lg">
            <span
              className="border border-gray-300 rounded-lg px-4 py-2 hover:bg-orange-100 hover:border-orange-500 hover:text-orange-500"
              title="ورود ثبت نام "
            >
              ورود / ثبت نام
            </span>

            <div className="relative">
              <FaBasketShopping className="text-2xl" />
              <span className="absolute -top-3 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
            </div>
          </div>
        </div>

        {/* منوی آیکون‌دار پایین */}
        <div className="hidden md:block">
          <div className="max-w-[90%] mx-auto px-8 py-4 flex flex-row gap-4 text-gray-700">
            {[
              { icon: <FaBars />, label: "دسته‌بندی کالاها" },
              { icon: <FaTag />, label: "پیشنهاد شگفت‌انگیز" },
              { icon: <FaMobile />, label: "گوشی‌های کارکرده" },
              { icon: <FaBook />, label: "مجله زیترو" },
              { icon: <FaCreditCard />, label: "خرید اقساطی" },
              { icon: <FaStore />, label: "درخواست نمایندگی" },
            ].map(({ icon, label }, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => idx === 0 && setIsMenuOpen(true)}
                onMouseLeave={() => idx === 0 && setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2 justify-start cursor-pointer hover:text-orange-500">
                  <span className="text-base">{icon}</span>
                  <span className="text-xs">{label}</span>
                </div>

                {/* منوی کشویی بزرگ برای دسته‌بندی کالاها */}
                {idx === 0 && isMenuOpen && (
                  <div 
                    className="absolute top-full right-0 w-[80vw] bg-gray-100 shadow-lg rounded-lg py-4 mt-1"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                  >
                    <div className="flex">
                      {/* لیست دسته‌بندی‌ها */}
                      <div className="bg-white md:w-50 rounded-lg mx-4 p-4">
                        <div className="flex flex-col gap-4">
                          {categories.map((category, index) => (
                            <div 
                              key={index} 
                              className="group relative"
                              onMouseEnter={() => setHoveredCategory(category.title)}
                            >
                              <div className="flex items-center gap-2 px-4 py-2 hover:rounded-lg hover:bg-gray-100 cursor-pointer">
                                <span className="text-lg">{category.icon}</span>
                                <span className="text-sm">{category.title}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* زیرمنوی ثابت برندها */}
                      <div className="flex flex-col  bg-white rounded-lg mx-4 p-4">
                        {hoveredCategory && (
                          <div className="grid grid-cols-2 gap-4">
                            {categories
                              .find(cat => cat.title === hoveredCategory)
                              ?.brands.map((brand, brandIndex) => (
                                <div
                                  key={brandIndex}
                                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer"
                                >
                                  <span className="text-lg">{brand.logo}</span>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-bold">{brand.name}</span>
                                    <span className="text-xs text-gray-500">{brand.products}</span>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
