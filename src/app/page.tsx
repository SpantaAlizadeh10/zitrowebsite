import Hero from "@/components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <MobileMenu />
      <Hero />
      <main className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mt-8">به فروشگاه زیترو خوش آمدید!</h2>
      </main>
      <Footer />
    </main>
  );
}
