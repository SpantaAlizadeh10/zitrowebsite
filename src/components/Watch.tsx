import NewProducts from "./NewProducts";

const Watch = () => {
  const watchProducts = [
    {
      id: 1,
      name: "ساعت پرو اپل",
      model: "AirPods Pro 2",
      price: "8,900,000",
      image: "/images/watch1.webp",
      category: "watch",
      brand: "apple"
    },
    {
      id: 2,
      name: "ساعت سامسونگ",
      model: "Galaxy Buds2 Pro",
      price: "5,200,000",
      image: "/images/watch2.webp",
      category: "watch",
      brand: "samsung"
    },
    {
      id: 3,
      name: "ساعت سونی",
      model: "WH-1000XM4",
      price: "9,800,000",
      image: "/images/watch3.webp",
      category: "watch",
      brand: "sony"
    },
    {
      id: 4,
      name: "ساعت مکس",
      model: "AirPods Max",
      price: "16,500,000",
      image: "/images/watch4.webp",
      category: "watch",
      brand: "apple"
    },
    {
      id: 5,
      name: "ساعت شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/watch5.webp",
      category: "watch",
      brand: "xiaomi"
    },
    {
      id: 6,
      name: "ساعت شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/watch6.webp",
      category: "watch",
      brand: "xiaomi"
    },
    {
      id: 7,
      name: "ساعت شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/watch7.webp",
      category: "watch",
      brand: "xiaomi"
    },
    {
      id: 8,
      name: "ساعت شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/watch8.webp",
      category: "watch",
      brand: "xiaomi"
    },
    {
      id: 9,
      name: "ساعت شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/watch9.webp",
      category: "watch",
      brand: "xiaomi"
    }
  ];

  return (
    <NewProducts 
      title="ساعت هوشمند"
      products={watchProducts}
    />
  );
};

export default Watch;