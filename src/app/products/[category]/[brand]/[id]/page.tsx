import Image from "next/image";
import Link from "next/link";
import { FaShare, FaShoppingCart, FaHeadphones, FaShieldAlt, FaTruck } from "react-icons/fa";
import { notFound } from 'next/navigation';
import { categories, brands, getProductByCategoryBrandAndId } from '@/data/data';

type Props = {
  params: {
    category: string;
    brand: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: Props) {
  const { category, brand, id } = params;
  
  const product = getProductByCategoryBrandAndId(category, brand, id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">صفحه اصلی</Link>
        <span>/</span>
        <Link href={`/products/${category}`} className="hover:text-blue-600">
          {categories[category as keyof typeof categories]}
        </Link>
        <span>/</span>
        <Link href={`/products/${category}/${brand}`} className="hover:text-blue-600">
          {brands[brand as keyof typeof brands]}
        </Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* تصویر محصول */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* اطلاعات محصول */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.model}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
            <span className="text-sm text-gray-500">تومان</span>
          </div>

          {/* مشخصات فنی */}
          {product.specifications && (
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-4">مشخصات فنی</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* رنگ‌ها */}
          {product.colors && (
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-4">رنگ‌های موجود</h2>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* گارانتی */}
          {product.warranty && (
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-4">گارانتی</h2>
              <div className="flex gap-2">
                {product.warranty.map((w) => (
                  <button
                    key={w}
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* دکمه افزودن به سبد خرید */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // این تابع برای تولید صفحات استاتیک استفاده می‌شود
  // در حال حاضر خالی است چون ما صفحات را به صورت داینامیک تولید می‌کنیم
  return [];
}