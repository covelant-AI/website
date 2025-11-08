"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-2 flex items-center justify-between 
    backdrop-blur-lg border border-[#F9F9F9]/20 rounded-b-xl">

      {/* Logo */}
      <Link href="/">
        <Image src="/images/logoBlack.png" alt="Covalent Logo" width={170} height={40} className="cursor-pointer" />
      </Link>

      {/* Desktop Navigation Links (Hidden on Small Screens) */}
      <div className="hidden lg:flex items-center space-x-8 text-lg font-medium text-black">
        <Link href="/product" className="hover:text-[#42B6B1] transition">Products</Link>
        <Link href="/About-Us" className="hover:text-[#42B6B1] transition">About Us</Link>
        <Link href="/faq" className="hover:text-[#42B6B1] transition">FAQ</Link>

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

        {/* Contact Us Button */}
        <Link href="https://calendly.com/raul-cuza-covelant/30min?month=2025-07">
          <button className="px-9 py-2 bg-[#42B6B1] text-white font-normal rounded-xl shadow-md hover:bg-teal-600 transition hover:cursor-pointer">
            Book a call
          </button>
        </Link>
      </div>

      {/* Hamburger Menu (Visible on Small Screens) */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(true)} className="text-black text-3xl focus:outline-none">
          <FiMenu />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
        
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
          <Link href="/faq" className="hover:text-[#42B6B1] transition">FAQ</Link>
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

          {/* Contact Us Button */}
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
