"use client";

import React, { useRef, useEffect, useState } from "react";

const products = [
  {
    id: 1,
    title: "جارو رباتیک هوشمند Ecovacs",
    model: "T30S Combo",
    oldPrice: 99176600,
    newPrice: 87540730,
    discount: "11.7%",
    image: "/images/p1.webp",
  },
  {
    id: 2,
    title: "گوشی سامسونگ GALAXY A56",
    model: "با ظرفیت حافظه...",
    oldPrice: 44800000,
    newPrice: 41489250,
    discount: "8.1%",
    image: "/images/p2.webp",
  },
  {
    id: 3,
    title: "لپ تاپ اپل 15.3 اینچی",
    model: "ACBOOK Air MRYR3 2024 LLA",
    oldPrice: 110000000,
    newPrice: 100122440,
    discount: "9.1%",
    image: "/images/p3.webp",
  },
  {
    id: 4,
    title: "مچ بند هوشمند شیائومی",
    model: "mi Band 9 گلوبال",
    oldPrice: 2678000,
    newPrice: 2372240,
    discount: "11.3%",
    image: "/images/p4.webp",
  },
  {
    id: 5,
    title: "آیپد اپل 8.3 اینچی",
    model: "iPad Mini 2024 WIFI",
    oldPrice: 64877500,
    newPrice: 5896330,
    discount: "9.8%",
    image: "/images/p5.webp",
  },
  // تکرار برای اسکرول بیشتر
  {
    id: 6,
    title: "جارو رباتیک هوشمند Ecovacs",
    model: "T30S Combo",
    oldPrice: 99176600,
    newPrice: 87540730,
    discount: "11.7%",
    image: "/images/p1.webp",
  },
  {
    id: 7,
    title: "گوشی سامسونگ GALAXY A56",
    model: "با ظرفیت حافظه...",
    oldPrice: 44800000,
    newPrice: 41489250,
    discount: "8.1%",
    image: "/images/p2.webp",
  },
  {
    id: 8,
    title: "لپ تاپ اپل 15.3 اینچی",
    model: "ACBOOK Air MRYR3 2024 LLA",
    oldPrice: 110000000,
    newPrice: 100122440,
    discount: "9.1%",
    image: "/images/p3.webp",
  },
  {
    id: 9,
    title: "مچ بند هوشمند شیائومی",
    model: "mi Band 9 گلوبال",
    oldPrice: 2678000,
    newPrice: 2372240,
    discount: "11.3%",
    image: "/images/p4.webp",
  },
  {
    id: 10,
    title: "آیپد اپل 8.3 اینچی",
    model: "iPad Mini 2024 WIFI",
    oldPrice: 64877500,
    newPrice: 5896330,
    discount: "9.8%",
    image: "/images/p5.webp",
  },
];

const Discount = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(sliderId);
  }, [currentIndex]);

  return (
    <div className="relative mt-8 flex flex-col md:flex-row w-full md:w-[90%] mx-auto items-center bg-purple-700 rounded-none md:rounded-xl overflow-hidden shadow p-4 md:p-6 gap-4">
      {/* عنوان پیشنهاد شگفت‌انگیز */}
      <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          پیشنهاد شگفت‌انگیز
        </h2>
      </div>

      {/* اسلایدر محصولات */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div 
          className="flex gap-3 pb-2"
          style={{
            msOverflowStyle: 'none',  // برای IE و Edge
            scrollbarWidth: 'none',    // برای Firefox
            WebkitOverflowScrolling: 'touch'  // برای iOS
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="min-w-[200px] md:min-w-[240px] flex-shrink-0 bg-white rounded-lg shadow p-3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-37 md:h-42 object-contain mb-3"
              />
              <h3 className="text-sm font-bold truncate">{item.title}</h3>
              <p className="text-xs text-gray-500 truncate">{item.model}</p>
              <div className="flex justify-between text-xs mt-2">
                <span className="bg-red-300 text-1xl text-green-700 px-2 py-0.5 rounded">
                  {item.discount}
                </span>
                <span className="line-through text-sm md:text-base text-red-500">
                  {item.oldPrice.toLocaleString()} تومان
                </span>
              </div>
              <div className="text-base md:text-xl mt-1 text-black-600 font-bold text-right">
                {item.newPrice.toLocaleString()} تومان
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* دکمه‌ها فقط در دسکتاپ نمایش داده می‌شوند */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-9 bg-white top-1/2 -translate-y-1/2 rounded-full p-2 shadow z-10 hover:bg-gray-100"
      >
        {">"}
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-5 bg-white top-1/2 -translate-y-1/2 rounded-full p-2 shadow z-10 hover:bg-gray-100"
      >
        {"<"}
      </button>
    </div>
  );
};

export default Discount;