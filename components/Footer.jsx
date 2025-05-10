import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full h-[300px] flex items-end overflow-hidden mt-10 ">
      {/* Imprint nad privacy policy */}
      <div className='flex flew-col justify-around items-center w-full max-sm:h-[350px] sm:h-[400px] lg:h-[590px] bg-[#F9F9F9] pt-10 max-sm:px-2'>
        <div>
        <Link href="/">
          <button className="text-md px-10 py-2 bg-[#F9F9F9] 
            text-gray-300 font-normal border-2 rounded-4xl max-lg:text-sm max-sm:px-1 max-sm:py-1">
            Covelant • © 2025 All rights reserved
          </button>
          </Link>
        </div>
        <div className='flex flex-col md:flex-row md:gap-3 my-10 items-end gap-2'>
        <Link href="/">
          <button className="text-md px-10 py-2 bg-[#F9F9F9]
            text-gray-300 font-normal border-2 rounded-4xl hover:text-gray-500 max-md:px-4 max-lg:text-sm max-sm:px-1 max-sm:py-1">
            Imprint
          </button>
          </Link>
          <Link href="/">
          <button className="text-md px-10 py-2 bg-[#F9F9F9] 
            text-gray-300 font-normal border-2 rounded-4xl hover:text-gray-500 max-md:px-4 max-lg:text-sm max-sm:px-1 max-sm:py-1">
            Privacy Policy
          </button>
          </Link>
          <Link href="/">
          <button className="text-md px-10 py-2 bg-[#F9F9F9] 
            text-gray-300 font-normal border-2 rounded-4xl  hover:text-gray-500 max-md:px-4 max-lg:text-sm max-sm:px-1 max-sm:py-1">
            Terms of Service
          </button>
          </Link>
        </div>
      </div>
      {/* Gradient Overlay */}
      <div>
      <div 
        className="absolute bottom-0 left-0 w-full h-[120px]" 
        style={{
          background: "linear-gradient(to top, rgba(200, 200, 200, 1) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      ></div>

      {/* Logo - Positioned Half Below the Viewport */}
      <div className="absolute xl:bottom-[-60px] max-xl:bottom-[-5%] max-sm:bottom-[5%] bottom-[0px] w-full left-1/2 transform -translate-x-1/2 w-[70%] max-md:w-[100%] px-20">
        <img 
          src="/images/logoGray.png" 
          alt="Covalent Logo" 
          className="w-full object-contain"
        />
      </div>
      </div>
    </footer>
  );
}
