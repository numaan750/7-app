"use client";
import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-[#e8f0ff] to-[#ffffff] flex items-center justify-center  font-[Outfit,sans-serif]">
      <div className="Mycontainer flex flex-col lg:flex-row items-start justify-between gap-20 w-full max-w-7xl">
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-left order-1 lg:order-2">
          <span className="inline-block w-[30%] min-w-fit max-w-[200px] bg-gradient-to-r from-[#2b72ff] to-[#04bdd1] text-white font-medium rounded-tl-[15px] rounded-br-[15px] px-3 py-1.5 text-xs sm:text-sm md:text-base text-center whitespace-nowrap">
            WHO WE ARE
          </span>

          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[46px] font-medium leading-snug sm:leading-normal md:leading-[50px] lg:leading-[55px] text-[#021229]">
            A Team of Professionals, <br /> Passionate About New Technologies &
            Progress
          </h2>

          <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[17px] leading-6 sm:leading-7 md:leading-8 text-[#2f3d4f] max-w-full lg:max-w-lg">
            Etiam non dui felis. Proin posuere dapibus magna laoreet posuere.
            Lorem ipsum dolor sit amet, adipiscing elit. Maecenas commodo –
            tellus consectetur dolor amet gravida elit tellus nibh tellus
            dapibus magna laoreet posuere lorem ipsum dolor.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 lg:gap-16 pt-0.5">
            <div className="text-left">
              <p className="text-[22px] sm:text-[24px] md:text-[26px] font-medium text-[#2c74ff]">
                est.
              </p>
              <h3 className="text-[46px] sm:text-[50px] md:text-[56px] font-semibold text-[#2c74ff] leading-[50px] md:leading-[56px]">
                2012
              </h3>
              <p className="text-[18px] sm:text-[19px] md:text-[21px] font-normal text-[#021229]">
                A decade of expertise
              </p>
            </div>

            <div className="text-left">
              <p className="text-[22px] sm:text-[24px] md:text-[26px] font-medium text-[#2c74ff]">
                est.
              </p>
              <h3 className="text-[46px] sm:text-[50px] md:text-[56px] font-semibold text-[#2c74ff] leading-[50px] md:leading-[56px]">
                94,5%
              </h3>
              <p className="text-[18px] sm:text-[19px] md:text-[21px] font-normal text-[#021229]">
                Satisfied customers
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-start order-2 lg:order-1 mt-6 lg:mt-0">
          <div className="overflow-hidden shadow-lg rounded-br-[70px] w-full lg:w-auto">
            <Image
              src="/about-img.jpg"
              alt="Team of professionals"
              width={600}
              height={400}
              className="object-cover w-full sm:w-full md:w-[90%] lg:w-auto xl:w-auto h-[280px] sm:h-[340px] md:h-[380px] lg:h-[430px] xl:h-[560px] transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
