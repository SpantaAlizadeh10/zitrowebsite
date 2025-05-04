"use client";
import Image from "next/image";
import { FaChevronDown, FaInstagram, FaTelegram, FaUndo, FaHeadset, FaShieldAlt, FaCreditCard, FaTruck, FaMoneyBillWave } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const topServices = [
    { icon: <FaUndo className="text-2xl" />, title: "بازگشت کالا" },
    { icon: <FaHeadset className="text-2xl" />, title: "پشتیبانی" },
    { icon: <FaShieldAlt className="text-2xl" />, title: "شرایط گارانتی" },
    { icon: <FaCreditCard className="text-2xl" />, title: "روش‌های پرداخت" },
    { icon: <FaTruck className="text-2xl" />, title: "روش‌های ارسال" },
    { icon: <FaMoneyBillWave className="text-2xl" />, title: "خرید اقساطی" }
  ];

  const footerLinks = {
    "بازگشت کالا": ["شرایط بازگشت کالا", "فرم درخواست بازگشت"],
    "پشتیبانی": ["تماس با ما", "پشتیبانی آنلاین"],
    "شرایط گارانتی": ["شرایط گارانتی", "مراکز گارانتی"],
    "روش‌های پرداخت": ["پرداخت آنلاین", "پرداخت در محل"],
    "روش‌های ارسال": ["ارسال رایگان", "ارسال سریع"],
    "خرید اقساطی": ["شرایط خرید اقساطی", "فرم درخواست"]
  };

  const footerSections = [
    {
      title: "فروشگاه",
      links: ["گوشی موبایل", "تبلت", "ساعت هوشمند", "هدفون و هندزفری", "لوازم خانگی", "اسپیکر و بلندگو", "کنسول بازی"]
    },
    {
      title: "راهنما",
      links: ["سوالات متداول", "روش‌های حمل و ارسال", "راهنمای خرید"]
    },
    {
      title: "زیترو",
      links: ["تماس با ما", "درباره زیترو", "بلاگ"]
    },
    {
      title: "خدمات مشتریان",
      links: ["سیاست حریم خصوصی", "قوانین و شرایط", "شرایط گارانتی", "شرایط بازگشت کالا", "درخواست نمایندگی", "گواهی جبران خسارت موبایل", "درخواست تسهیلات", "خرید اقساطی"]
    }
  ];

  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* بخش بالایی با آیکون‌ها */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-6 rounded-2xl  bg-white gap-4">
          {topServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4  rounded-lg hover:text-orange-500 transition-colors duration-300">
              <div className="text-gray-600 hover:text-orange-500 mb-2">{service.icon}</div>
              <span className="text-sm text-center">{service.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* بخش اصلی فوتر */}
      <div className="bg-gray-100 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* بخش موبایل */}
          <div className="md:hidden">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title} className="border-b border-gray-700">
                <button
                  onClick={() => toggleSection(title)}
                  className="w-full flex justify-between items-center py-4 text-right"
                >
                  <span>{title}</span>
                  <FaChevronDown className={`transition-transform ${openSections[title] ? 'rotate-180' : ''}`} />
                </button>
                {openSections[title] && (
                  <div className="pb-4 space-y-2">
                    {items.map((item) => (
                      <a key={item} href="#" className="block text-gray-800 hover:text-white">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* بخش دسکتاپ */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-800 hover:gray-900">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* اطلاعات تماس */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">تماس با ما</h3>
                <div className="space-y-2 text-gray-400">
                  <p>نشانی: خیابان جمهوری، تقاطع حافظ، پاساژ چارسو، طبقه منفی یک، غرفه A62</p>
                  <p>شماره تلفن: 02172509</p>
                  <p>دفتر مرکزی: تهران، کاوسیه، چهاراه جهان کودک، خ شهیدی، کوچه سپر، پلاک ۱۷، طبقه پنجم</p>
                  <p>خدمات پس از فروش: خیابان جمهوری، تقاطع حافظ، پاساژ چارسو، طبقه منفی یک، پلاک A33</p>
                  <p>کد پستی: 1516745402</p>
                  <p>ایمیل: info@zitro.ir</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="mb-4">
                  <Image src="/images/zitrologo.svg" alt="Zitro Logo" width={150} height={50} />
                </div>
                <p className="text-gray-800 mb-4 text-right">
                  فروشگاه اینترنتی زیترو فروش کالای دیجیتال و لوازم خانگی
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-800 hover:gray-900">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="text-gray-800 hover:gray-900">
                    <FaTelegram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 