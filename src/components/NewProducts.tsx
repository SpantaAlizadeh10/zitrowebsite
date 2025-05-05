import Link from "next/link";

// اول تعریف تایپ برای محصول
type Product = {
    id: number;
    name: string;
    model: string;
    price: string;
    image: string;
    category: string;
    brand: string;
  }
  

  type NewProductsProps = {
    title?: string; 
    products?: Product[]; 
  }
  
  const NewProducts = ({ title = "جدیدترین محصولات", products = [] }: NewProductsProps) => {
   
    const defaultProducts = [
      {
        id: 1,
        name: "گوشی سامسونگ A54",
        model: "Galaxy A54 5G",
        price: "12,499,000",
        image: "/images/newP1.webp",
        category: "mobile",
        brand: "samsung"
      },
      {
        id: 2,
        name: "لپ تاپ اپل مک‌بوک",
        model: "MacBook Air M2",
        price: "52,900,000",
        image: "/images/newP2.webp",
        category: "laptop",
        brand: "apple"
      },
      {
        id: 3,
        name: "ساعت هوشمند اپل",
        model: "Apple Watch Series 8",
        price: "18,800,000",
        image: "/images/newP3.webp",
        category: "watch",
        brand: "apple"
      },
      {
        id: 4,
        name: "ایرپاد پرو",
        model: "AirPods Pro 2",
        price: "8,900,000",
        image: "/images/newP4.webp",
        category: "headphone",
        brand: "apple"
      },
      {
        id: 5,
        name: "تبلت سامسونگ",
        model: "Galaxy Tab S9",
        price: "24,500,000",
        image: "/images/newP5.webp",
        category: "tablet",
        brand: "samsung"
      }
    ];
  
    const displayProducts = products?.length ? products : defaultProducts;
  
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
            {displayProducts.map((product) => (
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