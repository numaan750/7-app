"use client";
import { AppContext } from "@/context/Appcontext";
import React, { useContext } from "react";

const Companies = () => {
  const { componeies, loading } = useContext(AppContext);

  if (loading) return <p className="text-center py-10">Loading companies...</p>;
  if (!componeies)
    return <p className="text-center py-10">No company data found</p>;

  const logos = [
    componeies.img1,
    componeies.img2,
    componeies.img3,
    componeies.img4,
    componeies.img5,
    componeies.img6,
  ].filter(Boolean);

  return (
    <section
      className="w-full py-12 text-center px-6 sm:px-10 lg:px-20 bg-white"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <div className="Mycontainer max-w-8xl mx-auto w-full">
        <h2 className="text-[22px] sm:text-[24px] md:text-[26px] font-medium leading-[32px] text-[#2b72ff] mb-10">
          {componeies.heading}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-10 items-center justify-items-center transition-all duration-300">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <img
                src={logo}
                alt={`Company ${index + 1}`}
                className="object-contain opacity-100 hover:opacity-70 transition-all duration-300 h-[100px] sm:h-[100px] md:h-[110px] lg:h-[130px] xl:h-[140px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
