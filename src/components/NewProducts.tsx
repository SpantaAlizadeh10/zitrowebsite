import Link from "next/link";
import { Product } from "@/data/data";

interface NewProductsProps {
  title: string;
  products: Product[];
}

const NewProducts = ({ title = "جدیدترین محصولات", products = [] }: NewProductsProps) => {
  return (
    <div className="w-full px-4 md:px-8 mt-8">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-lg md:text-xl font-bold whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[2px] w-full bg-gray-200/70"></div>
      </div>

      {/* اسکرول محصولات */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-4" 
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch'
          }}>
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.category}/${product.brand}/${product.id}`}
              className="min-w-[calc(20%-16px)] flex-shrink-0 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-49 h-40 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {product.model}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  <span className="text-sm font-bold italic text-shadow-yellow-700">تومان</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;