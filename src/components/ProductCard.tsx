"use client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  discount: number;
  image: string;
}

export default function ProductCard({ id, title, price, discount, image }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} passHref>
      <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative h-48 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-bold">{price.toLocaleString()} تومان</span>
          {discount > 0 && (
            <span className="text-green-500">{discount}% تخفیف</span>
          )}
        </div>
      </div>
    </Link>
  );
} 