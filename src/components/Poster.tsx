"use client"
import Image from "next/image";
import poster1 from "../../public/images/bigImg1.webp";
import poster2 from "../../public/images/bigImg2.webp";

const Poster = () => {
  return (
    <div className="w-full md:w-[100%] mx-auto p-4 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/2 overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02] relative group">
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image 
          src={poster1} 
          alt="poster1"
          className="w-full h-auto object-cover rounded-xl hover:brightness-105 transition-all duration-300"
          priority
        />
      </div>

      <div className="w-full md:w-1/2 overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02] relative group">
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image 
          src={poster2} 
          alt="poster2"
          className="w-full h-auto object-cover rounded-xl hover:brightness-105 transition-all duration-300"
          priority
        />
      </div>
    </div>
  );
};

export default Poster; 