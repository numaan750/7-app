"use client";
import React from "react";

const Companies = () => {
  const logos = [
    { src: "/logo1.png", alt: "" },
    { src: "/logo2.png", alt: "" },
    { src: "/logo3.png", alt: "" },
    { src: "/logo4.png", alt: "" },
    { src: "/logo5.png", alt: "" },
    { src: "/logo6.png", alt: "" },
  ];

  return (
    <section
      className="w-full py-12 text-center px-6 sm:px-10 lg:px-20 bg-white"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <div className="Mycontainer max-w-8xl mx-auto w-full">
        <h2 className="text-[22px] sm:text-[24px] md:text-[26px] font-medium leading-[32px] text-[#2b72ff] mb-10">
          We are Proud to Work with These Companies
        </h2>

        <div
          className="
            grid
            grid-cols-2          
            md:grid-cols-3         
            lg:grid-cols-6        
            gap-x-10 gap-y-10
            items-center justify-items-center
            transition-all duration-300
          "
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="
                  object-contain
                  opacity-100 hover:opacity-70
                  transition-all duration-300
                  h-[80px] sm:h-[100px] md:h-[110px] lg:h-[130px] xl:h-[140px]
                "
              />
              <p className="text-[#021229] mt-3 text-[15px] sm:text-[16px] font-light">
                {logo.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
