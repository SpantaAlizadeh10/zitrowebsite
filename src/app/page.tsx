"use client";
import Hero from "@/components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "@/components/MobileMenu";
import ProductCard from "@/components/ProductCard";



export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <MobileMenu />
      <Hero />
      
      <Footer />
    </main>
  );
}
