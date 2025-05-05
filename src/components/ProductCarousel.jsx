"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, image: "/images/Category1.webp", title: "گوشی موبایل", path: "/products/mobile" },
  { id: 2, image: "/images/Category2.webp", title: "تبلت", path: "/products/tablet" },
  { id: 3, image: "/images/Category3.webp", title: "لپ‌تاپ", path: "/products/laptop" },
  { id: 4, image: "/images/Category4.webp", title: "ساعت هوشمند", path: "/products/watch" },
  { id: 5, image: "/images/Category5.webp", title: "کنسول‌های بازی", path: "/products/console" },
  { id: 6, image: "/images/Category6.webp", title: "هدفون و هندزفری", path: "/products/headphone" },
  { id: 7, image: "/images/Category7.webp", title: "اسپیکر و بلندگو", path: "/products/speaker" },
  { id: 8, image: "/images/Category8.webp", title: "لوازم خانگی", path: "/products/appliance" },
];

const ProductCarousel = () => {
  return (
    <section className="mt-4 md:mt-22 px-4">
      <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-2 md:pb-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.path}
            className="flex-none w-[120px] md:w-[calc(100%/8-1rem)] flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 md:w-28 md:h-28 rounded-full object-cover mb-2 md:mb-4 shadow-xl transition-all duration-300 transform hover:scale-110"
            />
            <h3 className="text-xs md:text-lg text-gray-800 whitespace-nowrap">{product.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
