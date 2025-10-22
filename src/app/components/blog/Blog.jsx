"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "@/context/Appcontext";

const Blog = () => {
  const {blog, loading} = useContext(AppContext);

  if(loading) return <p className="text-center py-10">loading blog.....</p>
  if(!blog) return <p className="text-center py-10">No blog data found</p>

  return (
    <section className="bg-white py-20 font-[Outfit]">
      <div className="Mycontainer mx-auto  text-center">
        <div className="inline-block mb-3 px-4 py-1.5 rounded-tl-[15px] rounded-br-[15px] bg-gradient-to-r from-[#2b72ff] to-[#04bdd1] text-white text-[16px] sm:text-[17px] leading-[22px] font-medium uppercase">
          {blog.toptext}
        </div>

        <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[46px] leading-[40px] sm:leading-[48px] md:leading-[55px] font-medium text-[#021228] mb-14">
          {blog.mainheading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-14 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl  overflow-hidden transition-transform duration-500 ">
            <div className="relative w-full md:w-1/2 xl:w-[40%] h-[230px] sm:h-[260px] md:h-[280px] xl:h-[320px] overflow-hidden rounded-br-[60px] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/0 opacity-0 group-hover:opacity-100 transition duration-700 z-10"></div>
              <Image
                src={blog.card1img}
                alt="AI Impact"
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="flex-1 p-6 lg:p-8 text-left">
              <h3 className="relative text-[22px] sm:text-[24px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-medium text-[#021228] mb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-500 hover:after:w-full">
                {blog. card1heading}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-[13px] sm:text-[14px] font-medium">
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">{blog.card1button1}</span>
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">{blog.card1button2}</span>
                <span className="text-[#2C74FF] text-[15px] font-normal">{blog.card1date}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl  overflow-hidden transition-transform duration-500 ">
            <div className="relative w-full md:w-1/2 xl:w-[40%] h-[230px] sm:h-[260px] md:h-[280px] xl:h-[320px] overflow-hidden rounded-br-[60px] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/0 opacity-0 group-hover:opacity-100 transition duration-700 z-10"></div>
              <Image
                src={blog.card2img}
                alt="VPN Blog"
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 p-6 lg:p-8 text-left">
              <h3 className="relative text-[22px] sm:text-[24px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-medium text-[#021228] mb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-500 hover:after:w-full">
               {blog.card2heading}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">
                  {blog.card2button}
                </span>
                <span className="text-[#2C74FF] text-[15px] font-normal">
                  {blog.card2date}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl  overflow-hidden transition-transform duration-500 ">
            <div className="relative w-full md:w-1/2 xl:w-[40%] h-[230px] sm:h-[260px] md:h-[280px] xl:h-[320px] overflow-hidden rounded-br-[60px] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/0 opacity-0 group-hover:opacity-100 transition duration-700 z-10"></div>
              <Image
                src={blog.card3img}
                alt="Better Lorem"
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 p-6 lg:p-8 text-left">
              <h3 className="relative text-[22px] sm:text-[24px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-medium text-[#021228] mb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-500 hover:after:w-full">
                {blog.card3heading}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">
                  {blog.card3button}
                </span>
                <span className="text-[#2C74FF] text-[15px] font-normal">
                  {blog.card3date}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl  overflow-hidden transition-transform duration-500 ">
            <div className="relative w-full md:w-1/2 xl:w-[40%] h-[230px] sm:h-[260px] md:h-[280px] xl:h-[320px] overflow-hidden rounded-br-[60px] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/0 opacity-0 group-hover:opacity-100 transition duration-700 z-10"></div>
              <Image
                src={blog.card4img}
                alt="Crypto Blog"
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 p-6 lg:p-8 text-left">
              <h3 className="relative text-[22px] sm:text-[24px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-medium text-[#021228] mb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-500 hover:after:w-full">
               {blog.card4heading}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">
                 {blog.card4button1}
                </span>
                <span className="text-white bg-[#2b72ff] hover:bg-[#2362d9] px-3 py-0.5 rounded-2xl">
                  {blog.card4button2}
                </span>
                <span className="text-[#2C74FF] text-[15px] font-normal">
                  {blog.card4date}
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
