"use client";
import Blogs from "./Blogs";
import Company from "./Company";
import Discount from "./Discount";
import Handsfree from "./Handsfree";
import HeroSlider from "./HeroSlider";
import HomeProduct from "./HomeProduct";
import Mobile from "./Mobile";
import NewProducts from "./NewProducts";
import Poster from "./Poster";
import Poster2 from "./Poster2";
import Poster3 from "./Poster3";
import Poster4 from "./Poster4";
import ProductCarousel from "./ProductCarousel";
import Tablet from "./Tablet";
import Watch from "./Watch";

const Hero = () => {
  return (
    <div>
      <HeroSlider />
      <ProductCarousel />
      <Discount />
      <NewProducts />
      <Poster />
      <Mobile />
      <Poster3/>
      <Handsfree />
      <Watch />
      <Poster2 />
      <Tablet />
      <HomeProduct />
      <Poster4/>
      <Company />
      <Blogs/>
     
    </div>
  );
};

export default Hero;
