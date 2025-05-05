import { nanoid } from 'nanoid';

export interface Product {
  id: string;
  name: string;
  model: string;
  price: string;
  image: string;
  category: string;
  brand: string;
  specifications?: {
    [key: string]: string;
  };
  colors?: string[];
  warranty?: string[];
}

export const categories = {
  mobile: "گوشی موبایل",
  tablet: "تبلت",
  watch: "ساعت هوشمند",
  headphone: "هدفون و هندزفری",
  laptop: "لپ تاپ",
  console: "کنسول بازی",
  speaker: "اسپیکر",
  appliance: "لوازم خانگی"
};

export const brands = {
  apple: "اپل",
  samsung: "سامسونگ",
  xiaomi: "شیائومی",
  sony: "سونی",
  lenovo: "لنوو",
  dell: "دل",
  asus: "ایسوس",
  hp: "اچ پی",
  huawei: "هواوی",
  fitbit: "فیت‌بیت",
  bose: "بوز",
  jbl: "جی‌بی‌ال"
};

export const products: Product[] = [
  // گوشی‌های موبایل
  {
    id: nanoid(),
    name: "گوشی موبایل سامسونگ",
    model: "Galaxy A54 5G",
    price: "12,499,000",
    image: "/images/mobile1.webp",
    category: "mobile",
    brand: "samsung",
    specifications: {
      "حافظه داخلی": "256 گیگابایت",
      "RAM": "8 گیگابایت",
      "اندازه صفحه نمایش": "6.4 اینچ",
      "رزولوشن": "2340 x 1080",
      "سیستم عامل": "Android 13",
      "پردازنده": "Exynos 1380",
      "دوربین اصلی": "50 مگاپیکسل",
      "دوربین سلفی": "32 مگاپیکسل",
      "باتری": "5000 میلی‌آمپر",
      "وزن": "202 گرم"
    },
    colors: ["مشکی", "سفید", "بنفش"],
    warranty: ["18 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "گوشی موبایل اپل",
    model: "iPhone 15 Pro",
    price: "52,900,000",
    image: "/images/mobile2.webp",
    category: "mobile",
    brand: "apple",
    specifications: {
      "حافظه داخلی": "256 گیگابایت",
      "RAM": "8 گیگابایت",
      "اندازه صفحه نمایش": "6.1 اینچ",
      "رزولوشن": "2556 x 1179",
      "سیستم عامل": "iOS 17",
      "پردازنده": "A17 Pro",
      "دوربین اصلی": "48 مگاپیکسل",
      "دوربین سلفی": "12 مگاپیکسل",
      "باتری": "3650 میلی‌آمپر",
      "وزن": "187 گرم"
    },
    colors: ["مشکی", "نقره‌ای", "طلایی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  
  {
    id: nanoid(),
    name: "گوشی موبایل اپل",
    model: "iPhone 15 Pro",
    price: "52,900,000",
    image: "/images/mobile3.webp",
    category: "mobile",
    brand: "apple",
    specifications: {
      "حافظه داخلی": "256 گیگابایت",
      "RAM": "8 گیگابایت",
      "اندازه صفحه نمایش": "6.1 اینچ",
      "رزولوشن": "2556 x 1179",
      "سیستم عامل": "iOS 17",
      "پردازنده": "A17 Pro",
      "دوربین اصلی": "48 مگاپیکسل",
      "دوربین سلفی": "12 مگاپیکسل",
      "باتری": "3650 میلی‌آمپر",
      "وزن": "187 گرم"
    },
    colors: ["مشکی", "نقره‌ای", "طلایی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "گوشی موبایل اپل",
    model: "iPhone 15 Pro",
    price: "52,900,000",
    image: "/images/mobile4.webp",
    category: "mobile",
    brand: "apple",
    specifications: {
      "حافظه داخلی": "256 گیگابایت",
      "RAM": "8 گیگابایت",
      "اندازه صفحه نمایش": "6.1 اینچ",
      "رزولوشن": "2556 x 1179",
      "سیستم عامل": "iOS 17",
      "پردازنده": "A17 Pro",
      "دوربین اصلی": "48 مگاپیکسل",
      "دوربین سلفی": "12 مگاپیکسل",
      "باتری": "3650 میلی‌آمپر",
      "وزن": "187 گرم"
    },
    colors: ["مشکی", "نقره‌ای", "طلایی"],
    warranty: ["12 ماهه", "24 ماهه"]
  }
  ,
  {
    id: nanoid(),
    name: "گوشی موبایل اپل",
    model: "iPhone 15 Pro",
    price: "52,900,000",
    image: "/images/mobile5.webp",
    category: "mobile",
    brand: "apple",
    specifications: {
      "حافظه داخلی": "256 گیگابایت",
      "RAM": "8 گیگابایت",
      "اندازه صفحه نمایش": "6.1 اینچ",
      "رزولوشن": "2556 x 1179",
      "سیستم عامل": "iOS 17",
      "پردازنده": "A17 Pro",
      "دوربین اصلی": "48 مگاپیکسل",
      "دوربین سلفی": "12 مگاپیکسل",
      "باتری": "3650 میلی‌آمپر",
      "وزن": "187 گرم"
    },
    colors: ["مشکی", "نقره‌ای", "طلایی"],
    warranty: ["12 ماهه", "24 ماهه"]
  }
  ,
  {
    id: nanoid(),
    name: "گوشی موبایل اپل",
    model: "iPhone 15 Pro",
    price: "52,900,000",
    image: "/images/mobile6.webp",
    category: "mobile",
    brand: "apple",
    specifications: {
      "حافظه داخلی": "256 گیگابایت",
      "RAM": "8 گیگابایت",
      "اندازه صفحه نمایش": "6.1 اینچ",
      "رزولوشن": "2556 x 1179",
      "سیستم عامل": "iOS 17",
      "پردازنده": "A17 Pro",
      "دوربین اصلی": "48 مگاپیکسل",
      "دوربین سلفی": "12 مگاپیکسل",
      "باتری": "3650 میلی‌آمپر",
      "وزن": "187 گرم"
    },
    colors: ["مشکی", "نقره‌ای", "طلایی"],
    warranty: ["12 ماهه", "24 ماهه"]
  }
  ,
  {
    id: nanoid(),
    name: "گوشی موبایل اپل",
    model: "iPhone 15 Pro",
    price: "52,900,000",
    image: "/images/mobile7.webp",
    category: "mobile",
    brand: "apple",
    specifications: {
      "حافظه داخلی": "256 گیگابایت",
      "RAM": "8 گیگابایت",
      "اندازه صفحه نمایش": "6.1 اینچ",
      "رزولوشن": "2556 x 1179",
      "سیستم عامل": "iOS 17",
      "پردازنده": "A17 Pro",
      "دوربین اصلی": "48 مگاپیکسل",
      "دوربین سلفی": "12 مگاپیکسل",
      "باتری": "3650 میلی‌آمپر",
      "وزن": "187 گرم"
    },
    colors: ["مشکی", "نقره‌ای", "طلایی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },

  // لپ تاپ‌ها
  {
    id: nanoid(),
    name: "لپ تاپ اپل",
    model: "MacBook Pro M3",
    price: "52,900,000",
    image: "/images/laptop1.webp",
    category: "laptop",
    brand: "apple",
    specifications: {
      "پردازنده": "Apple M3",
      "RAM": "16 گیگابایت",
      "حافظه داخلی": "512 گیگابایت",
      "صفحه نمایش": "14.2 اینچ",
      "گرافیک": "18-core GPU",
      "باتری": "22 ساعت",
      "وزن": "1.6 کیلوگرم"
    },
    colors: ["نقره‌ای", "مشکی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "لپ تاپ لنوو",
    model: "ThinkPad X1 Carbon",
    price: "45,800,000",
    image: "/images/laptop2.webp",
    category: "laptop",
    brand: "lenovo",
    specifications: {
      "پردازنده": "Intel Core i7-1260P",
      "RAM": "16 گیگابایت",
      "حافظه داخلی": "1 ترابایت",
      "صفحه نمایش": "14 اینچ",
      "گرافیک": "Intel Iris Xe",
      "باتری": "15 ساعت",
      "وزن": "1.12 کیلوگرم"
    },
    colors: ["مشکی"],
    warranty: ["12 ماهه", "24 ماهه"]
  }
  ,
  {
    id: nanoid(),
    name: "لپ تاپ لنوو",
    model: "ThinkPad X1 Carbon",
    price: "45,800,000",
    image: "/images/laptop3.webp",
    category: "laptop",
    brand: "lenovo",
    specifications: {
      "پردازنده": "Intel Core i7-1260P",
      "RAM": "16 گیگابایت",
      "حافظه داخلی": "1 ترابایت",
      "صفحه نمایش": "14 اینچ",
      "گرافیک": "Intel Iris Xe",
      "باتری": "15 ساعت",
      "وزن": "1.12 کیلوگرم"
    },
    colors: ["مشکی"],
    warranty: ["12 ماهه", "24 ماهه"]
  }
  ,
  {
    id: nanoid(),
    name: "لپ تاپ لنوو",
    model: "ThinkPad X1 Carbon",
    price: "45,800,000",
    image: "/images/laptop4.webp",
    category: "laptop",
    brand: "lenovo",
    specifications: {
      "پردازنده": "Intel Core i7-1260P",
      "RAM": "16 گیگابایت",
      "حافظه داخلی": "1 ترابایت",
      "صفحه نمایش": "14 اینچ",
      "گرافیک": "Intel Iris Xe",
      "باتری": "15 ساعت",
      "وزن": "1.12 کیلوگرم"
    },
    colors: ["مشکی"],
    warranty: ["12 ماهه", "24 ماهه"]
  }
  ,
  {
    id: nanoid(),
    name: "لپ تاپ لنوو",
    model: "ThinkPad X1 Carbon",
    price: "45,800,000",
    image: "/images/laptop5.webp",
    category: "laptop",
    brand: "lenovo",
    specifications: {
      "پردازنده": "Intel Core i7-1260P",
      "RAM": "16 گیگابایت",
      "حافظه داخلی": "1 ترابایت",
      "صفحه نمایش": "14 اینچ",
      "گرافیک": "Intel Iris Xe",
      "باتری": "15 ساعت",
      "وزن": "1.12 کیلوگرم"
    },
    colors: ["مشکی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },

  // ساعت‌های هوشمند
  {
    id: nanoid(),
    name: "ساعت هوشمند اپل",
    model: "Apple Watch Series 9",
    price: "18,800,000",
    image: "/images/watch1.webp",
    category: "watch",
    brand: "apple",
    specifications: {
      "صفحه نمایش": "1.9 اینچ",
      "باتری": "18 ساعت",
      "مقاوم در برابر آب": "تا 50 متر",
      "سنسورها": "ضربان قلب، اکسیژن خون، شتاب‌سنج",
      "اتصال": "Wi-Fi, Bluetooth 5.3"
    },
    colors: ["مشکی", "نقره‌ای", "طلایی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "ساعت هوشمند سامسونگ",
    model: "Galaxy Watch 6",
    price: "12,500,000",
    image: "/images/watch2.webp",
    category: "watch",
    brand: "samsung",
    specifications: {
      "صفحه نمایش": "1.5 اینچ",
      "باتری": "40 ساعت",
      "مقاوم در برابر آب": "IP68",
      "سنسورها": "ضربان قلب، فشار خون، اکسیژن خون",
      "اتصال": "Wi-Fi, Bluetooth 5.3"
    },
    colors: ["مشکی", "نقره‌ای"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "ساعت هوشمند شیائومی",
    model: "Mi Watch",
    price: "4,800,000",
    image: "/images/watch3.webp",
    category: "watch",
    brand: "xiaomi",
    specifications: {
      "صفحه نمایش": "1.4 اینچ",
      "باتری": "14 روز",
      "مقاوم در برابر آب": "IP68",
      "سنسورها": "ضربان قلب، اکسیژن خون، شتاب‌سنج",
      "اتصال": "Wi-Fi, Bluetooth 5.0"
    },
    colors: ["مشکی", "آبی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "ساعت هوشمند هواوی",
    model: "Watch GT 4",
    price: "8,900,000",
    image: "/images/watch4.webp",
    category: "watch",
    brand: "huawei",
    specifications: {
      "صفحه نمایش": "1.43 اینچ",
      "باتری": "14 روز",
      "مقاوم در برابر آب": "IP68",
      "سنسورها": "ضربان قلب، اکسیژن خون، فشار خون",
      "اتصال": "Wi-Fi, Bluetooth 5.2"
    },
    colors: ["مشکی", "نقره‌ای"],
    warranty: ["12 ماهه", "24 ماهه"]
  },

  // هدفون‌ها
  {
    id: nanoid(),
    name: "ایرپاد پرو",
    model: "AirPods Pro 2",
    price: "8,900,000",
    image: "/images/headphone1.webp",
    category: "headphone",
    brand: "apple",
    specifications: {
      "نوع": "ایرپاد بی‌سیم",
      "اتصال": "Bluetooth 5.3",
      "باتری": "6 ساعت",
      "حذف نویز": "فعال",
      "مقاوم در برابر آب": "IPX4"
    },
    colors: ["سفید"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "هدفون سامسونگ",
    model: "Galaxy Buds2 Pro",
    price: "5,200,000",
    image: "/images/headphone2.webp",
    category: "headphone",
    brand: "samsung",
    specifications: {
      "نوع": "ایرپاد بی‌سیم",
      "اتصال": "Bluetooth 5.3",
      "باتری": "5 ساعت",
      "حذف نویز": "فعال",
      "مقاوم در برابر آب": "IPX7"
    },
    colors: ["مشکی", "سفید", "بنفش"],
    warranty: ["12 ماهه", "24 ماهه"]
  },

  // تبلت‌ها
  {
    id: nanoid(),
    name: "تبلت سامسونگ",
    model: "Galaxy Tab S9 Ultra",
    price: "24,500,000",
    image: "/images/tablet1.webp",
    category: "tablet",
    brand: "samsung",
    specifications: {
      "صفحه نمایش": "14.6 اینچ",
      "پردازنده": "Snapdragon 8 Gen 2",
      "RAM": "12 گیگابایت",
      "حافظه داخلی": "256 گیگابایت",
      "باتری": "11200 میلی‌آمپر",
      "سیستم عامل": "Android 13"
    },
    colors: ["مشکی", "نقره‌ای"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "تبلت اپل",
    model: "iPad Pro M2",
    price: "32,800,000",
    image: "/images/tablet2.webp",
    category: "tablet",
    brand: "apple",
    specifications: {
      "صفحه نمایش": "12.9 اینچ",
      "پردازنده": "Apple M2",
      "RAM": "8 گیگابایت",
      "حافظه داخلی": "256 گیگابایت",
      "باتری": "10 ساعت",
      "سیستم عامل": "iPadOS 16"
    },
    colors: ["نقره‌ای", "مشکی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "تبلت اپل",
    model: "iPad Pro M2",
    price: "32,800,000",
    image: "/images/tablet3.webp",
    category: "tablet",
    brand: "apple",
    specifications: {
      "صفحه نمایش": "12.9 اینچ",
      "پردازنده": "Apple M2",
      "RAM": "8 گیگابایت",
      "حافظه داخلی": "256 گیگابایت",
      "باتری": "10 ساعت",
      "سیستم عامل": "iPadOS 16"
    },
    colors: ["نقره‌ای", "مشکی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "تبلت اپل",
    model: "iPad Pro M2",
    price: "32,800,000",
    image: "/images/tablet4.webp",
    category: "tablet",
    brand: "apple",
    specifications: {
      "صفحه نمایش": "12.9 اینچ",
      "پردازنده": "Apple M2",
      "RAM": "8 گیگابایت",
      "حافظه داخلی": "256 گیگابایت",
      "باتری": "10 ساعت",
      "سیستم عامل": "iPadOS 16"
    },
    colors: ["نقره‌ای", "مشکی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },
  {
    id: nanoid(),
    name: "تبلت اپل",
    model: "iPad Pro M2",
    price: "32,800,000",
    image: "/images/tablet5.webp",
    category: "tablet",
    brand: "apple",
    specifications: {
      "صفحه نمایش": "12.9 اینچ",
      "پردازنده": "Apple M2",
      "RAM": "8 گیگابایت",
      "حافظه داخلی": "256 گیگابایت",
      "باتری": "10 ساعت",
      "سیستم عامل": "iPadOS 16"
    },
    colors: ["نقره‌ای", "مشکی"],
    warranty: ["12 ماهه", "24 ماهه"]
  },

];

// تابع کمکی برای فیلتر کردن محصولات بر اساس دسته‌بندی
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

// تابع کمکی برای فیلتر کردن محصولات بر اساس برند
export const getProductsByBrand = (brand: string) => {
  return products.filter(product => product.brand === brand);
};

// تابع کمکی برای پیدا کردن یک محصول خاص
export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

// تابع کمکی برای پیدا کردن محصول بر اساس دسته‌بندی، برند و آیدی
export const getProductByCategoryBrandAndId = (category: string, brand: string, id: string) => {
  return products.find(
    product => 
    product.category === category && 
    product.brand === brand && 
    product.id === id
  );
}; 