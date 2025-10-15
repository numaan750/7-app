"use client";
import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <section className="bg-white py-20 font-[Outfit]">
      <div className="Mycontainer mx-auto  text-center">
        <div className="inline-block mb-3 px-4 py-1.5 rounded-tl-[15px] rounded-br-[15px] bg-gradient-to-r from-[#2b72ff] to-[#04bdd1] text-white text-[16px] sm:text-[17px] leading-[22px] font-medium uppercase">
          From the Blog
        </div>

        <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[46px] leading-[40px] sm:leading-[48px] md:leading-[55px] font-medium text-[#021228] mb-14">
          Latest News & Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-14 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl  overflow-hidden transition-transform duration-500 ">
            <div className="relative w-full md:w-1/2 xl:w-[40%] h-[230px] sm:h-[260px] md:h-[280px] xl:h-[320px] overflow-hidden rounded-br-[60px] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/0 opacity-0 group-hover:opacity-100 transition duration-700 z-10"></div>
              <Image
                src="/blog1.jpg"
                alt="AI Impact"
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="flex-1 p-6 lg:p-8 text-left">
              <h3 className="relative text-[22px] sm:text-[24px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-medium text-[#021228] mb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-500 hover:after:w-full">
                AI Impact on Ipsum Nulla Glavrida Amet for the Future
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-[13px] sm:text-[14px] font-medium">
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">COMPANY</span>
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">EVENTS</span>
                <span className="text-[#2C74FF] text-[15px] font-normal">January 16, 2025</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl  overflow-hidden transition-transform duration-500 ">
            <div className="relative w-full md:w-1/2 xl:w-[40%] h-[230px] sm:h-[260px] md:h-[280px] xl:h-[320px] overflow-hidden rounded-br-[60px] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/0 opacity-0 group-hover:opacity-100 transition duration-700 z-10"></div>
              <Image
                src="/blog2.jpg"
                alt="VPN Blog"
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 p-6 lg:p-8 text-left">
              <h3 className="relative text-[22px] sm:text-[24px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-medium text-[#021228] mb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-500 hover:after:w-full">
                Lorem Ipsum VPN: Dolor Nulla & Amet Glavrida Morbi
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">
                  TIPS & TRICKS
                </span>
                <span className="text-[#2C74FF] text-[15px] font-normal">
                  January 2, 2025
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl  overflow-hidden transition-transform duration-500 ">
            <div className="relative w-full md:w-1/2 xl:w-[40%] h-[230px] sm:h-[260px] md:h-[280px] xl:h-[320px] overflow-hidden rounded-br-[60px] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/0 opacity-0 group-hover:opacity-100 transition duration-700 z-10"></div>
              <Image
                src="/blog3.jpg"
                alt="Better Lorem"
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 p-6 lg:p-8 text-left">
              <h3 className="relative text-[22px] sm:text-[24px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-medium text-[#021228] mb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-500 hover:after:w-full">
                Better Lorem Ipsum Dolor Condimentum Metus
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">
                  TIPS & TRICKS
                </span>
                <span className="text-[#2C74FF] text-[15px] font-normal">
                  July 30, 2024
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl  overflow-hidden transition-transform duration-500 ">
            <div className="relative w-full md:w-1/2 xl:w-[40%] h-[230px] sm:h-[260px] md:h-[280px] xl:h-[320px] overflow-hidden rounded-br-[60px] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/0 opacity-0 group-hover:opacity-100 transition duration-700 z-10"></div>
              <Image
                src="/blog4.jpg"
                alt="Crypto Blog"
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 p-6 lg:p-8 text-left">
              <h3 className="relative text-[22px] sm:text-[24px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-medium text-[#021228] mb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-500 hover:after:w-full">
                Crypto Lorem Ipsum Dolor Nulla Tellus Interdum
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">
                  EVENTS
                </span>
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">
                  INDUSTRY
                </span>
                <span className="text-[#2C74FF] text-[15px] font-normal">
                  May 13, 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
