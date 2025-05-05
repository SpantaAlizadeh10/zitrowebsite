import NewProducts from "./NewProducts";

const HomeProduct = () => {
  const homeProducts = [
    {
      id: 1,
      name: "لوازم خانگی پرو اپل",
      model: "AirPods Pro 2",
      price: "8,900,000",
      image: "/images/home1.webp",
      category: "appliance",
      brand: "apple"
    },
    {
      id: 2,
      name: "لوازم خانگی سامسونگ",
      model: "Galaxy Buds2 Pro",
      price: "5,200,000",
      image: "/images/home2.webp",
      category: "appliance",
      brand: "samsung"
    },
    {
      id: 3,
      name: "لوازم خانگی سونی",
      model: "WH-1000XM4",
      price: "9,800,000",
      image: "/images/home3.webp",
      category: "appliance",
      brand: "sony"
    },
    {
      id: 4,
      name: "لوازم خانگی مکس",
      model: "AirPods Max",
      price: "16,500,000",
      image: "/images/home4.webp",
      category: "appliance",
      brand: "apple"
    },
    {
      id: 5,
      name: "لوازم خانگی شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/home5.webp",
      category: "appliance",
      brand: "xiaomi"
    },
    {
      id: 6,
      name: "لوازم خانگی شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/home6.webp",
      category: "appliance",
      brand: "xiaomi"
    },
    {
      id: 7,
      name: "لوازم خانگی شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/home7.webp",
      category: "appliance",
      brand: "xiaomi"
    },
    {
      id: 8,
      name: "لوازم خانگی شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/home8.webp",
      category: "appliance",
      brand: "xiaomi"
    }
  ];

  return (
    <NewProducts 
      title=" لوازم خانگی "
      products={homeProducts}
    />
  );
};

export default HomeProduct;
