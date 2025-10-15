import React from "react";

const Services = () => {
  return (
    <section className="bg-gradient-to-t from-[#e8f0ff] to-[#ffffff] py-20 px-4 text-center">
      <div className="Mycontainer">
        <div
          className="inline-block bg-blue-600 text-white bg-gradient-to-r from-[#2b72ff] to-[#04bdd1] rounded-tl-[15px] rounded-br-[15px] px-4 py-1 mb-6"
          style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 500,
            fontSize: "17px",
            lineHeight: "22px",
          }}
        >
          WHAT WE DO
        </div>

        <h2
          className="mb-6"
          style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 500,
            fontSize: "46px",
            lineHeight: "55px",
            color: "rgb(2, 18, 40)",
          }}
        >
          A Full Range of Modern Marketing & <br />
          Creative Services for Your Business
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
          Etiam non dui felis. Proin posuere dapibus magna laoreet posuere.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit magna,
          molestie iaculis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
          <div className="bg-white shadow-lg overflow-hidden w-full max-w-sm mx-auto">
            <div className="overflow-hidden">
              <img
                src="/serv1.jpg"
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
                Branding & Creative Services
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
                View Details
                <span
                  className="block absolute left-0 bottom-0 w-full h-[1.5px] bg-[#d1e1ff] transition-colors duration-300 group-hover:bg-[#1a5fff]"
                ></span>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg overflow-hidden w-full max-w-sm mx-auto">
            <div className="overflow-hidden">
              <img
                src="/serv2.jpg"
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
                Web Design & Development
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
                View Details
                <span
                  className="block absolute left-0 bottom-0 w-full h-[1.5px] bg-[#d1e1ff] transition-colors duration-300 group-hover:bg-[#1a5fff]"
                ></span>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg overflow-hidden w-full max-w-sm mx-auto flex flex-col h-[395px]">
            <div className="overflow-hidden">
              <img
                src="/serv3.jpg"
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
                Digital Marketing
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
                View Details
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
