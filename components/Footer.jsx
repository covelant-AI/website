import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full h-[300px] flex items-end overflow-hidden">
      {/* Gradient Overlay */}
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
    </footer>
  );
}
