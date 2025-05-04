import NewProducts from "./NewProducts";

const Watch = () => {
  const handsfreeProducts = [
    {
      id: 1,
      name: "ایرپاد پرو اپل",
      model: "AirPods Pro 2",
      price: "8,900,000",
      image: "/images/watch1.webp"
    },
    {
      id: 2,
      name: "هندزفری سامسونگ",
      model: "Galaxy Buds2 Pro",
      price: "5,200,000",
      image: "/images/watch2.webp"
    },
    {
      id: 3,
      name: "هدفون سونی",
      model: "WH-1000XM4",
      price: "9,800,000",
      image: "/images/watch3.webp"
    },
    {
      id: 4,
      name: "ایرپاد مکس",
      model: "AirPods Max",
      price: "16,500,000",
      image: "/images/watch4.webp"
    },
    {
      id: 5,
      name: "هندزفری شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/watch5.webp"
    }
    ,
    {
      id: 6,
      name: "هندزفری شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/watch6.webp"
    }
    ,
    {
      id: 7,
      name: "هندزفری شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/watch7.webp"
    }
    ,
    {
      id: 8,
      name: "هندزفری شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/watch8.webp"
    }
    ,
    {
      id: 9,
      name: "هندزفری شیائومی",
      model: "Redmi Buds 4 Pro",
      price: "2,800,000",
      image: "/images/watch9.webp"
    }
  ];

  return (
    <NewProducts 
      title="هندزفری و هدفون"
      products={handsfreeProducts}
    />
  );
};

export default Watch;