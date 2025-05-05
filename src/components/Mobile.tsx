import NewProducts from "./NewProducts";

const Mobile = () => {
  const mobileProducts = [
    {
      id: 1,
      name: "موبایل پرو اپل",
      model: "AirPods Pro 2",
      price: "8,900,000",
      image: "/images/Mobile1.webp",
      category: "mobile",
      brand: "apple"
    },
    {
      id: 2,
      name: "موبایل سامسونگ",
      model: "Galaxy Buds2 Pro",
      price: "5,200,000",
      image: "/images/Mobile2.webp",
      category: "mobile",
      brand: "samsung"
    },
    {
      id: 3,
      name: "موبایل سونی",
      model: "WH-1000XM4",
      price: "9,800,000",
      image: "/images/Mobile3.webp",
      category: "mobile",
      brand: "sony"
    },
    {
      id: 4,
      name: "موبایل مکس",
      model: "AirPods Max",
      price: "16,500,000",
      image: "/images/Mobile4.webp",
      category: "mobile",
      brand: "apple"
    },
    {
      id: 5,
      name: "موبایل شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/Mobile5.webp",
      category: "mobile",
      brand: "xiaomi"
    },
    {
      id: 6,
      name: "موبایل شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/Mobile6.webp",
      category: "mobile",
      brand: "xiaomi"
    },
    {
      id: 7,
      name: "موبایل شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/Mobile7.webp",
      category: "mobile",
      brand: "xiaomi"
    },
    {
      id: 8,
      name: "موبایل شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/Mobile8.webp",
      category: "mobile",
      brand: "xiaomi"
    },
    {
      id: 9,
      name: "موبایل شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/Mobile9.webp",
      category: "mobile",
      brand: "xiaomi"
    }
  ];

  return (
    <NewProducts 
      title=" موبایل "
      products={mobileProducts}
    />
  );
};

export default Mobile;