"use client";

import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";


import hero1 from "../../public/images/hero1.webp";
import hero2 from "../../public/images/hero2.webp";
import hero3 from "../../public/images/hero3.webp";
import hero4 from "../../public/images/hero4.webp";

const images = [hero1, hero2, hero3, hero4];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(slider);
  }, [currentIndex]);

  return (
    <div className="relative mt-15 w-full md:w-[99%] h-[200px] sm:h-[300px] md:h-[400px] mx-auto overflow-hidden rounded-none md:rounded-xl">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500`}
          style={{
            transform: `translateX(${(index - currentIndex) * 100}%)`,
            zIndex: index === currentIndex ? 1 : 0
          }}
        >
          <Image
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
            priority={index === 0}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            quality={90}
          />
        </div>
      ))}

      {/* دکمه‌ها */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 rounded-full p-2 z-20"
        onClick={prevSlide}
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 rounded-full p-2 z-20"
        onClick={nextSlide}
      >
        <FiChevronRight size={24} />
      </button>

      {/* نشانگرهای اسلاید */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;