import React from 'react';
import ContactForm from './UI/ContactForm'

export default function ContactSection(props) {
  return (
    <section className="relative w-full flex justify-center py-16 overflow-hidden font-Figtree">
      {/* Background Gradient */}
      <div
        className="absolute"
        style={{
          width: "1206.207px",
          height: "448.3px",
          transform: "rotate(-22.12deg)",
          flexShrink: 0,
          borderRadius: "1206.207px",
          background: "radial-gradient(50% 50% at 50% 50%, rgba(123, 161, 255, 0.24) 56%, rgba(0, 180, 173, 0.14) 78%, rgba(176, 199, 255, 0.00) 100%)",
          filter: "blur(50px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-22.12deg)",
        }}
      ></div>

      {/* Content Container */}
      <div className="w-full my-40 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Left Side - Text */}
        <div className="flex flex-col justify-top text-black">
          <p className="text-2xl font-bold leading-tight max-lg:text-xl max-lg:px-4">
          Covalent can elevate an athlete's performance by providing insights into their strengths and areas for improvement, 
          Our goal is to make this technology accessible at an affordable price, enabling athletes and coaches to strive for excellence and reach their full potential.
          </p>
          <p className="text-2xl font-bold mt-4 max-lg:text-xl max-lg:px-4">
            Let’s talk about how we can elevate your athletes performance.
          </p>
           {/* Signature Image */}
           <img 
            src="/images/signature.png" 
            alt="Signature" 
            className="mt-6 max-w-xs max-lg:px-4"
          />
         {/* Profile Bubbles */}
          <div className="flex mt-6 max-lg:px-4">
            {["member4.png", "member3.png", "member2.png", "member1.jpeg"].map((member, index) => (
              <div
                key={index}
                className={`w-14 h-14 border-2 border-[#E7E7E7] rounded-full bg-gray-300 ${index !== 0 ? "-ml-7" : ""}`}
                style={{
                  backgroundImage: `url('/images/${member}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            ))}
          </div>
          </div>
        {/* Right Side - Form in Card */}
        <ContactForm/>
      </div>
    </section>
  );
}





