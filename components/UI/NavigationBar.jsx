"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenu, setLangMenu] = useState(false);
  const [mobileLangMenu, setMobileLangMenu] = useState(false);
  const pathname = usePathname();

  const handleLocaleChange = (locale) => {
    const newPath = pathname.replace(/^\/(en|de)/, "");
    window.location.href = `/${locale}${newPath}`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-2 flex items-center justify-between 
      backdrop-blur-lg border border-[#F9F9F9]/20 rounded-b-xl">

      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logoBlack.png"
          alt="Covalent Logo"
          width={170}
          height={40}
          className="cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8 text-lg font-medium text-black relative">
        <Link href="/product" className="hover:text-[#42B6B1] transition">Products</Link>
        <Link href="/About-Us" className="hover:text-[#42B6B1] transition">About Us</Link>
        <Link href="/faq" className="hover:text-[#42B6B1] transition">FAQ</Link>

        {/* Join Community */}
        <Link
          href="https://www.facebook.com/groups/1880614142534033/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join our Facebook group"
        >
          <button className="inline-block px-6 py-2 border-2 border-[#42B6B1] text-black font-normal rounded-xl shadow-md hover:bg-teal-600 hover:text-white hover:cursor-pointer transition">
            <span className="flex items-center space-x-2 gap-2">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5" role="img">
                <path
                  fill="#1877F2"
                  d="M32 16C32 7.163 24.837 0 16 0S0 7.163 0 16c0 7.987 5.852 14.61 13.5 15.854V20.75h-4.06V16h4.06v-3.62c0-4.017 2.392-6.244 6.052-6.244 1.754 0 3.59.313 3.59.313v3.94h-2.022c-1.994 0-2.616 1.237-2.616 2.505V16h4.45l-.712 4.75h-3.738v11.104C26.148 30.61 32 23.987 32 16z"
                />
              </svg>
              Join Community
            </span>
          </button>
        </Link>

        {/* Contact Button */}
        <Link href="https://calendly.com/raul-cuza-covelant/30min?month=2025-07">
          <button className="px-9 py-2 bg-[#42B6B1] text-white font-normal rounded-xl shadow-md hover:bg-teal-600 transition hover:cursor-pointer">
            Book a call
          </button>
        </Link>

        {/* 🌐 Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setLangMenu(!langMenu)}
            className="flex items-center gap-2 px-2 py-1 hover:text-[#42B6B1] transition"
          >
            <FiGlobe className="text-2xl" />
            <span className="text-sm">▼</span>
          </button>

          {langMenu && (
            <div className="absolute right-0 mt-2 w-28 bg-white shadow-md rounded-xl border border-gray-200 z-50">
              <button
                onClick={() => handleLocaleChange("en")}
                className="flex items-center w-full px-3 py-2 hover:bg-gray-100 text-left"
              >
                🇬🇧 <span className="ml-2">EN</span>
              </button>
              <button
                onClick={() => handleLocaleChange("de")}
                className="flex items-center w-full px-3 py-2 hover:bg-gray-100 text-left"
              >
                🇩🇪 <span className="ml-2">DE</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(true)} className="text-black text-3xl focus:outline-none">
          <FiMenu />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-black text-3xl focus:outline-none">
            <FiX />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center space-y-6 text-lg font-medium text-black mt-10">
          <Link href="/product" className="hover:text-[#42B6B1] transition" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/About-Us" className="hover:text-[#42B6B1] transition" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/faq" className="hover:text-[#42B6B1] transition" onClick={() => setIsOpen(false)}>FAQ</Link>

          {/* Join Community (same as desktop) */}
          <Link
            href="https://www.facebook.com/groups/1880614142534033/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our Facebook group"
          >
            <button className="inline-block px-6 py-2 border-2 border-[#42B6B1] text-black font-normal rounded-xl shadow-md hover:bg-teal-600 hover:text-white hover:cursor-pointer transition">
              <span className="flex items-center space-x-2 gap-2">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5" role="img">
                  <path
                    fill="#1877F2"
                    d="M32 16C32 7.163 24.837 0 16 0S0 7.163 0 16c0 7.987 5.852 14.61 13.5 15.854V20.75h-4.06V16h4.06v-3.62c0-4.017 2.392-6.244 6.052-6.244 1.754 0 3.59.313 3.59.313v3.94h-2.022c-1.994 0-2.616 1.237-2.616 2.505V16h4.45l-.712 4.75h-3.738v11.104C26.148 30.61 32 23.987 32 16z"
                  />
                </svg>
                Join Community
              </span>
            </button>
          </Link>

          {/* 🌐 Language Dropdown (inside sidebar) */}
          <div className="relative">
            <button
              onClick={() => setMobileLangMenu(!mobileLangMenu)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
            >
              <FiGlobe className="text-2xl" />
              <span>Language</span>
            </button>

            {mobileLangMenu && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white shadow-md rounded-xl border border-gray-200 z-50">
                <button
                  onClick={() => handleLocaleChange("en")}
                  className="flex items-center w-full px-3 py-2 hover:bg-gray-100 text-left"
                >
                  🇬🇧 <span className="ml-2">English</span>
                </button>
                <button
                  onClick={() => handleLocaleChange("de")}
                  className="flex items-center w-full px-3 py-2 hover:bg-gray-100 text-left"
                >
                  🇩🇪 <span className="ml-2">Deutsch</span>
                </button>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <Link href="https://calendly.com/omar-badawy/covelant-call">
            <button className="px-9 py-2 bg-[#42B6B1] text-white font-normal rounded-xl shadow-md hover:bg-teal-600 transition hover:cursor-pointer">
              Book a call
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
