import NewProducts from "./NewProducts";

const Tablet = () => {
  const tabletProducts = [
    {
      id: 1,
      name: "تبلت پرو اپل",
      model: "AirPods Pro 2",
      price: "8,900,000",
      image: "/images/tablet1.webp",
      category: "tablet",
      brand: "apple"
    },
    {
      id: 2,
      name: "تبلت سامسونگ",
      model: "Galaxy Buds2 Pro",
      price: "5,200,000",
      image: "/images/tablet2.webp",
      category: "tablet",
      brand: "samsung"
    },
    {
      id: 3,
      name: "تبلت سونی",
      model: "WH-1000XM4",
      price: "9,800,000",
      image: "/images/tablet3.webp",
      category: "tablet",
      brand: "sony"
    },
    {
      id: 4,
      name: "تبلت مکس",
      model: "AirPods Max",
      price: "16,500,000",
      image: "/images/tablet4.webp",
      category: "tablet",
      brand: "apple"
    },
    {
      id: 5,
      name: "تبلت شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/tablet5.webp",
      category: "tablet",
      brand: "xiaomi"
    },
    {
      id: 6,
      name: "تبلت شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/tablet6.webp",
      category: "tablet",
      brand: "xiaomi"
    },
    {
      id: 7,
      name: "تبلت شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/tablet7.webp",
      category: "tablet",
      brand: "xiaomi"
    },
    {
      id: 8,
      name: "تبلت شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/tablet8.webp",
      category: "tablet",
      brand: "xiaomi"
    }
  ];

  return (
    <NewProducts 
      title=" تبلت "
      products={tabletProducts}
    />
  );
};

export default Tablet;
