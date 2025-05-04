"use client";
import { FaBars, FaHouse, FaBagShopping, FaUser, FaXmark, FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { FaMobileAlt, FaHeadphones, FaClock, FaLaptop, FaGamepad, FaTablet, FaHeadset, FaVolumeUp, FaHome, FaUserShield, FaGift, FaMobile, FaCreditCard } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const menuItems = [
    {
      title: "گوشی موبایل",
      icon: <FaMobileAlt className="text-primary text-xl" />,
      items: ["گوشی‌های جدید", "گوشی‌های دست دوم", "لوازم جانبی موبایل"]
    },
    {
      title: "هدفون و هندزفری",
      icon: <FaHeadphones className="text-primary text-xl" />,
      items: ["هدفون بی‌سیم", "هدفون با سیم", "هندزفری"]
    },
    {
      title: "ساعت هوشمند",
      icon: <FaClock className="text-primary text-xl" />,
      items: ["ساعت هوشمند", "بند ساعت", "لوازم جانبی"]
    },
    {
      title: "لپ تاپ",
      icon: <FaLaptop className="text-primary text-xl" />,
      items: ["لپ‌تاپ", "تبلت", "لوازم جانبی"]
    },
    {
      title: "کنسول‌های بازی",
      icon: <FaGamepad className="text-primary text-xl" />,
      items: ["پلی‌استیشن", "اکس‌باکس", "نینتندو"]
    },
    {
      title: "تبلت",
      icon: <FaTablet className="text-primary text-xl" />,
      items: ["تبلت", "لوازم جانبی تبلت"]
    },
    {
      title: "لوازم جانبی",
      icon: <FaHeadset className="text-primary text-xl" />,
      items: ["کیبورد", "ماوس", "پد ماوس"]
    },
    {
      title: "اسپیکر و بلندگو",
      icon: <FaVolumeUp className="text-primary text-xl" />,
      items: ["اسپیکر", "بلندگو", "سیستم صوتی"]
    },
    {
      title: "لوازم خانگی",
      icon: <FaHome className="text-primary text-xl" />,
      items: ["تلویزیون", "یخچال", "ماشین لباسشویی"]
    },
    {
      title: "لوازم شخصی و سلامت محیط",
      icon: <FaUserShield className="text-primary text-xl" />,
      items: ["ماسک", "ضدعفونی‌کننده", "ترازو"]
    },
    {
      title: "پیشنهاد شگفت‌انگیز",
      icon: <FaGift className="text-primary text-xl" />,
      items: ["تخفیف‌های ویژه", "پیشنهادات روز"]
    },
    {
      title: "گوشی‌های دست دوم",
      icon: <FaMobile className="text-primary text-xl" />,
      items: ["گوشی‌های کارکرده", "گارانتی"]
    },
    {
      title: "خرید اقساطی",
      icon: <FaCreditCard className="text-primary text-xl" />,
      items: ["شرایط خرید اقساطی", "مدارک مورد نیاز"]
    }
  ];

  const toggleSection = (title: string) => {
    setActiveSection(activeSection === title ? null : title);
  };

  return (
    <>
      {/* منوی پایین */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-3">
          <div className="flex flex-col items-center" onClick={() => setIsMenuOpen(true)}>
            <FaBars className="text-2xl text-gray-600" />
            <span className="text-xs mt-1">منو</span>
          </div>

          <div className="flex flex-col items-center">
            <FaHouse className="text-2xl text-gray-600" />
            <span className="text-xs mt-1">خانه</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <FaBagShopping className="text-2xl text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">۰</span>
            </div>
            <span className="text-xs mt-1">سبد خرید</span>
          </div>

          <div className="flex flex-col items-center">
            <FaUser className="text-2xl text-gray-600" />
            <span className="text-xs mt-1">پروفایل</span>
          </div>
        </div>
      </div>

      {/* منوی کشویی */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-90 bg-white z-50">
          {/* هدر منو */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Image
              src="/images/logo.png"
              alt="Zitro Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            <button onClick={() => setIsMenuOpen(false)}>
              <FaXmark className="text-2xl text-gray-600" />
            </button>
          </div>

          {/* محتوای منو */}
          <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-2">
                <div
                  className={`flex justify-between items-center p-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200 ${
                    activeSection === item.title ? "text-orange-500" : ""
                  }`}
                  onClick={() => toggleSection(item.title)}
                >
                  <div className="flex items-center gap-2">
                    {activeSection === item.title ? (
                      <div className="text-orange-500">{item.icon}</div>
                    ) : (
                      item.icon
                    )}
                    <span className="font-medium">{item.title}</span>
                  </div>
                  {activeSection === item.title ? (
                    <FaChevronUp className="text-orange-500 text-xs" />
                  ) : (
                    <FaChevronDown className="text-primary text-xs" />
                  )}
                </div>
                <div
                  className={`overflow-hidden transition-all duration-800 ease-in-out ${
                    activeSection === item.title ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {activeSection === item.title && (
                    <div className="mt-2 pl-4 space-y-2 bg-gray-50 rounded-lg p-3">
                      {item.items.map((subItem, subIndex) => (
                        <div key={subIndex} className="py-2 text-gray-600 hover:text-orange-500 transition-colors duration-100">
                          {subItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu; 