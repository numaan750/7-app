"use client";
import React, { useContext } from "react";
import { AppContext } from "@/context/Appcontext";

const Services = () => {
  const { servies, loading } = useContext(AppContext);

  if (loading) return <p className="text-center py-10">loading servoes....</p>;
  if (!servies)
    return <p className="text-center py-10">No servies Data found</p>;
  return (
    <section className="bg-gradient-to-t from-[#e8f0ff] to-[#ffffff] py-20 px-4 text-center">
      <div className="Mycontainer">
        <div
          className="inline-block bg-blue-600 text-white bg-gradient-to-r from-[#2b72ff] to-[#04bdd1] rounded-tl-[15px] rounded-br-[15px] px-7 py-1 mb-6"
          style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 500,
            fontSize: "22`px",
            lineHeight: "22px",
          }}
        >
          {servies.toptext}
        </div>

        <h2
          className="mb-8 text-center text-[25px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-medium w-[900px] leading-tight"
          style={{
            fontFamily: "Outfit, sans-serif",
            lineHeight: "1.2",
            color: "rgb(2, 18, 40)",
            maxWidth: "90%",
            margin: "0 auto",
          }}
        >
          {servies.heading}
        </h2>

        <p
          className="max-w-2xl mx-auto mb-16"
          style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 300,
            fontSize: "19px",
            lineHeight: "30px",
            color: "rgba(2, 18, 40, 0.82)",
          }}
        >
          {servies.paragraph}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start ">
          <div className="bg-white shadow-lg overflow-hidden w-full max-w-sm mx-auto">
            <div className="overflow-hidden">
              <img
                src={servies.card1img}
                alt="Branding & Creative Services"
                className="w-full h-56 object-cover rounded-br-[50px] transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 500,
                  fontSize: "30px",
                  lineHeight: "36px",
                  color: "rgb(2, 18, 40)",
                }}
              >
                {servies.card1heading}
              </h3>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: "25px",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "20px",
                  color: "rgb(44, 116, 255)",
                }}
                className="uppercase tracking-wide relative pb-2 group"
              >
                {servies.card1paragraph}
                <span className="block absolute left-0 bottom-0 w-full h-[1.5px] bg-[#d1e1ff] transition-colors duration-300 group-hover:bg-[#1a5fff]"></span>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg overflow-hidden w-full max-w-sm mx-auto">
            <div className="overflow-hidden">
              <img
                src={servies.card2img}
                alt="Web Design & Development"
                className="w-full h-56 object-cover rounded-br-[50px] transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 500,
                  fontSize: "30px",
                  lineHeight: "36px",
                  color: "rgb(2, 18, 40)",
                }}
              >
                {servies.card2heading}
              </h3>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: "25px",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "20px",
                  color: "rgb(44, 116, 255)",
                }}
                className="uppercase tracking-wide relative pb-2 group"
              >
                {servies.card2paragraph}
                <span className="block absolute left-0 bottom-0 w-full h-[1.5px] bg-[#d1e1ff] transition-colors duration-300 group-hover:bg-[#1a5fff]"></span>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg overflow-hidden w-full max-w-sm mx-auto flex flex-col h-[395px]">
            <div className="overflow-hidden">
              <img
                src={servies.card3img}
                alt="Digital Marketing"
                className="w-full h-56 object-cover rounded-br-[50px] transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-10 flex-grow">
              <h3
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 500,
                  fontSize: "30px",
                  lineHeight: "36px",
                  color: "rgb(2, 18, 40)",
                }}
              >
                {servies.card3heading}
              </h3>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: "30px",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "20px",
                  color: "rgb(44, 116, 255)",
                }}
                className="uppercase tracking-wide relative pb-2 group"
              >
                {servies.card3paragraph}
                <span className="block absolute left-0 bottom-0 w-full h-[1.5px] bg-[#d1e1ff] transition-colors duration-300 group-hover:bg-[#1a5fff]"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
