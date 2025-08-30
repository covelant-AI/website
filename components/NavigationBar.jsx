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
        <Link href="/" className="hover:text-[#42B6B1] transition">About us</Link>
        <Link href="/approach" className="hover:text-[#42B6B1] transition">How it works</Link>
        <Link href="/whyCovelant" className="hover:text-[#42B6B1] transition">Why Covelant</Link>
        <Link href="/faq" className="hover:text-[#42B6B1] transition">FAQ</Link>

        <Link
          href="https://chat.whatsapp.com/BbLNETgnyOj4vmYpxEB5Gk" // ← your WhatsApp group link
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join our WhatsApp group"
        >
          <button className="inline-block px-6 py-2 border-2 border-[#42B6B1] text-black font-normal rounded-xl shadow-md hover:bg-teal-600 hover:text-white hover:cursor-pointer transition">
            <span className="flex items-center space-x-2 gap-2">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5" role="img">
                <path
                  d="M16.003 3.2c-7.05 0-12.8 5.65-12.8 12.6 0 2.222.6 4.3 1.65 6.095L3.2 28.8l7.112-1.61c1.73.95 3.695 1.45 5.69 1.45 7.05 0 12.8-5.65 12.8-12.6s-5.75-12.84-12.8-12.84Zm7.457 18.26c-.312.88-1.827 1.69-2.54 1.73-.65.04-1.48.06-2.39-.15-.55-.12-1.26-.41-2.17-.85-3.81-1.84-6.28-6-6.47-6.28-.2-.28-1.55-2.06-1.55-3.93 0-1.86.98-2.78 1.33-3.16.35-.38.77-.47 1.02-.47.25 0 .51 0 .73.01.24.01.55-.09.86.66.31.75 1.06 2.58 1.16 2.77.09.19.15.41.03.65-.12.24-.18.39-.36.61-.18.22-.38.49-.54.66-.18.18-.37.38-.16.75.21.38.95 1.56 2.06 2.53 1.41 1.22 2.6 1.61 2.98 1.8.38.19.6.16.83-.09.23-.25.96-1.11 1.22-1.49.26-.38.52-.31.86-.19.35.12 2.23 1.05 2.62 1.24.39.19.65.28.75.44.09.16.09.91-.22 1.79Z"
                  fill="#25D366"
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
          <Link href="/" className="hover:text-[#42B6B1] transition" onClick={() => setIsOpen(false)}>About us</Link>
          <Link href="/approach" className="hover:text-[#42B6B1] transition" onClick={() => setIsOpen(false)}>How it works</Link>
          <Link href="/whyCovelant" className="hover:text-[#42B6B1] transition" onClick={() => setIsOpen(false)}>Why Covelant</Link>
          <Link href="/faq" className="hover:text-[#42B6B1] transition">FAQ</Link>
          <Link
            href="https://chat.whatsapp.com/BbLNETgnyOj4vmYpxEB5Gk" // ← your WhatsApp group link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our WhatsApp group"
          >
          <button className="inline-block px-6 py-2 border-2 border-[#42B6B1] text-black font-normal rounded-xl shadow-md hover:bg-teal-600 hover:text-white hover:cursor-pointer transition">
            <span className="flex items-center space-x-2 gap-2">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5" role="img">
                <path
                  d="M16.003 3.2c-7.05 0-12.8 5.65-12.8 12.6 0 2.222.6 4.3 1.65 6.095L3.2 28.8l7.112-1.61c1.73.95 3.695 1.45 5.69 1.45 7.05 0 12.8-5.65 12.8-12.6s-5.75-12.84-12.8-12.84Zm7.457 18.26c-.312.88-1.827 1.69-2.54 1.73-.65.04-1.48.06-2.39-.15-.55-.12-1.26-.41-2.17-.85-3.81-1.84-6.28-6-6.47-6.28-.2-.28-1.55-2.06-1.55-3.93 0-1.86.98-2.78 1.33-3.16.35-.38.77-.47 1.02-.47.25 0 .51 0 .73.01.24.01.55-.09.86.66.31.75 1.06 2.58 1.16 2.77.09.19.15.41.03.65-.12.24-.18.39-.36.61-.18.22-.38.49-.54.66-.18.18-.37.38-.16.75.21.38.95 1.56 2.06 2.53 1.41 1.22 2.6 1.61 2.98 1.8.38.19.6.16.83-.09.23-.25.96-1.11 1.22-1.49.26-.38.52-.31.86-.19.35.12 2.23 1.05 2.62 1.24.39.19.65.28.75.44.09.16.09.91-.22 1.79Z"
                  fill="#25D366"
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
