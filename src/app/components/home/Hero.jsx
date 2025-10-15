"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center text-white overflow-hidden">
      <Image
        src="/hero-background.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center brightness-[0.6]"
      />

      <div className="absolute inset-0">
        <Image
          src="/hero-img-overlay.png"
          alt="Overlay Design"
          fill
          className="object-top object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent mix-blend-overlay"></div>

      <div
        className="
          Mycontainer
          relative 
          flex flex-col justify-center 
          items-center text-center
          font-[Outfit,sans-serif]
          md:items-start md:text-left
        "
      >
        <h1
          className="
            text-[38px] sm:text-[48px] md:text-[62px] lg:text-[74px] 
            leading-[50px] sm:leading-[65px] md:leading-[78px] lg:leading-[89px]
            font-light text-white max-w-[900px]
          "
        >
          <span className="font-bold text-[rgb(1,194,206)]">The </span>
          <span className="font-bold text-white">
            Seven<span className="text-[rgb(1,194,206)]">.</span>
          </span>{" "}
          <span className="font-light text-white">
            Ultimate Website Builder
          </span>
        </h1>

        <p
          className="
            text-[16px] sm:text-[19px] md:text-[22px] lg:text-[25px] 
            leading-[26px] sm:leading-[32px] md:leading-[38px] lg:leading-[40px] 
            font-light text-white max-w-2xl
            mt-2
          "
        >
          Elementor 2025 full-feature demo: lots of unique page layouts,
          templates, loop items, online store & much more.
        </p>

        <div
          className="
            flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 
            w-full sm:w-auto
            justify-center md:justify-start
          "
        >
          <button
            className="
              border-2 border-white 
              text-white 
              px-6 sm:px-8 md:px-10 
              py-3 md:py-4 rounded-full 
              text-[16px] sm:text-[18px] md:text-[20px] 
              font-normal 
              transition-all duration-300 
              hover:border-[#00c1cf]
              hover:text-[#00c1cf]
              w-full sm:w-auto
            "
          >
            Discover All Elements
          </button>

          <button
            className="
              bg-[#00c1cf] 
              text-white 
              px-6 sm:px-8 md:px-10 
              py-3 md:py-4 rounded-full 
              text-[16px] sm:text-[18px] md:text-[20px] 
              font-normal
              hover:bg-[#00c1cf]/80
              transition-all duration-300 
              w-full sm:w-auto
            "
          >
            Buy The7 – $39
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
