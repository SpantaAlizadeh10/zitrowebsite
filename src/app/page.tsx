"use client";
import Hero from "@/components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "@/components/MobileMenu";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    title: "تبلت شیائومی مدل Redmi Pad SE ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    price: 42500000,
    discount: 28,
    image: "/images/tablet1.webp"
  },
  {
    id: "2",
    title: "تبلت پوکو مدل Poco Pad ظرفیت 256 گیگابایت رم 8 گیگابایت",
    price: 21149000,
    discount: 8,
    image: "/images/tablet2.webp"
  },
  {
    id: "3",
    title: "تبلت شیائومی مدل Pad 6s Pro ظرفیت 512 گیگابایت رم 12 گیگابایت",
    price: 45951000,
    discount: 28,
    image: "/images/tablet3.webp"
  },
  {
    id: "4",
    title: "تبلت هوشمند شیائومی مدل REDMI PAD PRO",
    price: 23095700,
    discount: 32,
    image: "/images/tablet4.webp"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <MobileMenu />
      <Hero />
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mt-8 mb-6">محصولات پرفروش</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              discount={product.discount}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
