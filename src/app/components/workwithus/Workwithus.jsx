"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "@/context/Appcontext";

const Workwithus = () => {
  const { workwithus} = useContext(AppContext);


  if (!workwithus)
    return <p className="text-center py-10"></p>;

  return (
    <section className="relative bg-[#031520] text-white overflow-hidden py-20 font-[Outfit]">
      <div className="absolute inset-0">
        <Image
          src="/hero-img-overlay.png"
          alt="Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="Mycontainer relative container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="mb-4">
            <span
              className="text-[17px] leading-[22px] font-medium text-white bg-gradient-to-r from-[#2b72ff] to-[#04bdd1] px-4 py-1 rounded-tl-[15px] rounded-br-[15px]"
              style={{ fontFamily: "Outfit, sans-serif", fontWeight: 500 }}
            >
              {workwithus.toptext}
            </span>
          </div>

          <h2
            className="
             text-white font-medium mb-6
                text-[31px] leading-[34px]
                sm:text-[32px] sm:leading-[40px] sm:text-left sm:max-w-full
                md:text-[40px] md:leading-[50px] md:text-left md:max-w-[75%]
                lg:text-[46px] lg:leading-[55px] lg:text-start lg:max-w-[700px]
                "
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 500,
              margin: "0 auto",
            }}
          >
            {workwithus.heading}
          </h2>

          <p
            className="text-[19px] leading-[30px] font-light text-[#babbbf] mb-8 max-w-xl"
            style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300 }}
          >
            {workwithus.paragraph}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[21px] leading-[27px] font-normal text-white">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> {workwithus.check1}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> {workwithus.check2}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> {workwithus.check3}
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> {workwithus.check4}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> {workwithus.check5}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> {workwithus.check6}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-bl-[80px]">
            <Image
              src={workwithus.mainimg}
              alt="Team Working"
              width={800}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workwithus;
