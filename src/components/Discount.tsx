"use client";

import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CARD_WIDTH = 240;

const productsData = [
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
];

const Discount = () => {
  const [products, setProducts] = useState(productsData);

  const rotateLeft = () => {
    setProducts((prev) => {
      const first = prev[0];
      const rest = prev.slice(1);
      return [...rest, first];
    });
  };

  const rotateRight = () => {
    setProducts((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      rotateLeft();
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative mt-8 flex flex-col md:flex-row w-full md:w-[90%] mx-auto items-center bg-purple-700 rounded-none md:rounded-xl overflow-hidden shadow p-4 md:p-6 gap-4">
      <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          پیشنهاد شگفت‌انگیز
        </h2>
      </div>

      <div className="w-full overflow-hidden md:w-2/3 relative">
        <div className="flex gap-3 transform: translate-x transition-all duration-800 ease-in-out">
          {products.slice(0, 4).map((item) => (
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

        <button
          onClick={rotateRight}
          className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 hover:bg-gray-100"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={rotateLeft}
          className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 hover:bg-gray-100"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Discount;
