"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "@/context/Appcontext";

const Aboutus = () => {
  const { aboutus, loading } = useContext(AppContext);

  if (loading) return <p className="text-center py-10">Loading Home...</p>;
  if (!aboutus) return <p className="text-center py-10">No Home data found</p>;
  return (
    <section className="py-20 bg-gradient-to-t from-[#e8f0ff] to-[#ffffff] flex items-center justify-center  font-[Outfit,sans-serif]">
      <div className="Mycontainer flex flex-col lg:flex-row items-start justify-between gap-20 w-full max-w-7xl">
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-left order-1 lg:order-2">
          <span className="inline-block w-[30%] min-w-fit max-w-[200px] bg-gradient-to-r from-[#2b72ff] to-[#04bdd1] text-white font-medium rounded-tl-[15px] rounded-br-[15px] px-3 py-1.5 text-xl sm:text-xl md:text-xl text-center whitespace-nowrap">
            {aboutus.toptext}
          </span>

          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[46px] font-medium leading-snug sm:leading-normal md:leading-[50px] lg:leading-[55px] text-[#021229]">
            {aboutus.heading}
          </h2>

          <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[17px] leading-6 sm:leading-7 md:leading-8 text-[#2f3d4f] max-w-full lg:max-w-lg">
            {aboutus.paragraph}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 lg:gap-16 pt-0.5">
            <div className="text-left">
              <p className="text-[22px] sm:text-[24px] md:text-[26px] font-medium text-[#2c74ff]">
                {aboutus.smaltext}
              </p>
              <h3 className="text-[46px] sm:text-[50px] md:text-[56px] font-semibold text-[#2c74ff] leading-[50px] md:leading-[56px]">
                {aboutus.number1}
              </h3>
              <p className="text-[18px] sm:text-[19px] md:text-[21px] font-normal text-[#021229]">
                {aboutus.p1}
              </p>
            </div>

            <div className="text-left">
              <h3 className="text-[46px] sm:text-[50px] md:text-[56px] font-semibold text-[#2c74ff] leading-[50px] md:leading-[56px]">
                {aboutus.number2}
              </h3>
              <p className="text-[18px] sm:text-[19px] md:text-[21px] font-normal text-[#021229]">
                {aboutus.p2}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-start order-2 lg:order-1 mt-6 lg:mt-0">
          <div className="overflow-hidden shadow-lg rounded-br-[70px] w-full lg:w-auto h-full">
            <Image
              src={aboutus.mainimg}
              alt="Team of professionals"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-all duration-300 ease-in-out"
              style={{ minHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
