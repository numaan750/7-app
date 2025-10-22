"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "@/context/Appcontext";

const Joinsection = () => {

  const {joinus, loading} = useContext(AppContext);
  if(loading) return <p className="text-center py-10">loading joinus.....</p>;
  if(!joinus) return <p className="text bg-center py-10">No joinus data Found</p>
  return (
    <section className="w-full bg-white py-20 font-[Outfit]">
      <div className="Mycontainer mx-auto  flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <div className="overflow-hidden rounded-br-[60px]">
            <Image
              src={joinus.img}
              alt="Business person on phone"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex-1 max-w-xl">
          <div className="inline-block mb-5 text-[19px] leading-[34px] px-4 py-1.5 rounded-tl-[15px] rounded-br-[15px] bg-gradient-to-r from-[#2b72ff] to-[#04bdd1] text-white font-medium">
            {joinus.toptext}
          </div>

          <h2 className="text-[46px] leading-[55px] font-medium text-[#021228] mb-8">
            {joinus.heading}
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-[#1A56FF] hover:bg-[#2362d9] text-white text-[20px] leading-[20px] font-normal px-10 py-5 rounded-full transition-all">
              {joinus.buttontext}
            </button>

            <p className="text-[26px] leading-[33px] font-medium text-[#021228]">
              <span className="text-[#2b72ff] font-medium">{joinus.text1}</span> {joinus.text2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Joinsection;
