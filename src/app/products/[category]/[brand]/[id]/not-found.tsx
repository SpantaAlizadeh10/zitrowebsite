import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">محصول یافت نشد</h2>
        <p className="text-gray-600 mb-8">متاسفانه محصول مورد نظر شما یافت نشد.</p>
        <Link 
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
} 