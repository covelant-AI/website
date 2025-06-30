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
      <div className="hidden md:flex items-center space-x-8 text-lg font-medium text-black">
        <Link href="/" className="hover:text-[#42B6B1] transition">About us</Link>
        <Link href="/approach" className="hover:text-[#42B6B1] transition">How it works</Link>
        <Link href="/whyCovelant" className="hover:text-[#42B6B1] transition">Why Covelant</Link>

        {/* Contact Us Button */}
        <Link href="https://calendly.com/raul-cuza-covelant/30min?month=2025-07">
          <button className="px-9 py-2 bg-[#42B6B1] text-white font-normal rounded-xl shadow-md hover:bg-teal-600 transition">
            Book a call
          </button>
        </Link>
      </div>

      {/* Hamburger Menu (Visible on Small Screens) */}
      <div className="md:hidden">
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
          <Link href="/" className="hover:text-[#42B6B1] transition" onClick={() => setIsOpen(false)}>About us</Link>
          <Link href="/approach" className="hover:text-[#42B6B1] transition" onClick={() => setIsOpen(false)}>How it works</Link>
          <Link href="/whyCovelant" className="hover:text-[#42B6B1] transition" onClick={() => setIsOpen(false)}>Why Covelant</Link>

          {/* Contact Us Button */}
          <Link href="https://calendly.com/omar-badawy/covelant-call">
          <button className="px-9 py-2 bg-[#42B6B1] text-white font-normal rounded-xl shadow-md hover:bg-teal-600 transition">
            Book a call
          </button>
        </Link>
        </div>
      </div>
    </nav>
  );
}
