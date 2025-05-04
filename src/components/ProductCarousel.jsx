"use client";

const ProductCarousel = () => {
  const products = [
    { id: 1, image: "/images/Category1.webp", title: " گوشی موبایل" },
    { id: 2, image: "/images/Category2.webp", title: " تبلت" },
    { id: 3, image: "/images/Category3.webp", title: "لب تاپ " },
    { id: 4, image: "/images/Category4.webp", title: "ساعت هوشمند " },
    { id: 5, image: "/images/Category5.webp", title: "کنسول های بازی " },
    { id: 6, image: "/images/Category6.webp", title: "هدفون و هندزفری " },
    { id: 7, image: "/images/Category7.webp", title: "اسپیکر و بلندگو" },
    { id: 8, image: "/images/Category8.webp", title: "لوازم خانگی" },
  ];

  return (
    <section className="mt-4 md:mt-22 px-4">
      <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-2 md:pb-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-none w-[120px] md:w-[calc(100%/8-1rem)] flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 md:w-28 md:h-28 rounded-full object-cover mb-2 md:mb-4 shadow-xl transition-all duration-300 transform hover:scale-110"
            />
            <h3 className="text-xs md:text-lg text-gray-800 whitespace-nowrap">{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
