"use client";
import { AppContext } from "@/context/Appcontext";
import React, { useContext } from "react";

const Companies = () => {
  const { componeies, loading } = useContext(AppContext);

  if (loading) return <p className="text-center py-10">Loading companies...</p>;
  if (!componeies)
    return <p className="text-center py-10">No company data found</p>;

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
          {componeies.img1 && (
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={componeies.img1}
                alt="Company 1"
                className="object-contain opacity-100 hover:opacity-70 transition-all duration-300 
                   h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[220px] 
                   w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]"
              />
            </div>
          )}

          {componeies.img2 && (
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={componeies.img2}
                alt="Company 2"
                className="object-contain opacity-100 hover:opacity-70 transition-all duration-300 
                   h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[220px] 
                   w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]"
              />
            </div>
          )}

          {componeies.img3 && (
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={componeies.img3}
                alt="Company 3"
                className="object-contain opacity-100 hover:opacity-70 transition-all duration-300 
                   h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[220px] 
                   w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]"
              />
            </div>
          )}
          {componeies.img4 && (
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={componeies.img4}
                alt="Company 4"
                className="object-contain opacity-100 hover:opacity-70 transition-all duration-300 
                   h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[220px] 
                   w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]"
              />
            </div>
          )}

          {componeies.img5 && (
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={componeies.img5}
                alt="Company 5"
                className="object-contain opacity-100 hover:opacity-70 transition-all duration-300 
                   h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[220px] 
                   w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]"
              />
            </div>
          )}

          {componeies.img6 && (
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={componeies.img6}
                alt="Company 6"
                className="object-contain opacity-100 hover:opacity-70 transition-all duration-300 
                   h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[220px] 
                   w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Companies;
