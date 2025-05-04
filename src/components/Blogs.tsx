import Image from "next/image";
import { FaShare, FaShareAlt, FaShareAltSquare } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "/images/Blog1.webp",
    title: "نکات مهم در خرید گوشی موبایل",
    time: "۲ ساعت پیش",
    share: "اشتراک گذاری"
  },
  {
    id: 2,
    image: "/images/Blog2.webp",
    title: "مقایسه لپ‌تاپ‌های جدید ۲۰۲۴",
    time: "۵ ساعت پیش",
    share: "اشتراک گذاری"
  },
  {
    id: 3,
    image: "/images/Blog3.webp",
    title: "راهنمای خرید هدفون بی‌سیم",
    time: "۱ روز پیش",
    share: "اشتراک گذاری"
  },
  {
    id: 4,
    image: "/images/Blog4.webp",
    title: "بهترین تبلت‌های بازار",
    time: "۲ روز پیش",
    share: "اشتراک گذاری"
  }
  ,
  {
    id: 5,
    image: "/images/Blog5.webp",
    title: "بهترین تبلت‌های بازار",
    time: "۲ روز پیش",
    share: "اشتراک گذاری"
  }
  ,
  {
    id: 6,
    image: "/images/Blog6.webp",
    title: "بهترین تبلت‌های بازار",
    time: "۲ روز پیش",
    share: "اشتراک گذاری"
  }
];

const Blogs = () => {
  return (
    <div className="w-full px-4 md:px-8 mt-8">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-lg md:text-xl font-bold whitespace-nowrap">
          آخرین مطالب وبلاگ
        </h2>
        <div className="h-[2px] w-full bg-gray-200/70"></div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-4" 
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch'
          }}>
          {blogs.map((blog) => (
            <div key={blog.id} className="min-w-[280px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                  {blog.title}
                </h2>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{blog.time}</span>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-800">
                    <FaShareAlt className="text-sm" />
                    <span>{blog.share}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;