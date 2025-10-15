"use client";

import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const Reviewa = () => {
  return (
    <div
      className={`${outfit.className} h-full w-full bg-gradient-to-t from-blue-50 to-white  py-4`}
    >
      <h2 className="text-[26px] leading-[33px] font-medium text-[#2c74ff] text-center mb-12">
        What Clients Say About Us
      </h2>

      <div className="flex flex-nowrap justify-start gap-10 overflow-x-auto px-4 scrollbar-hidden">
        <div className="min-w-[400px] font-[Outfit,sans-serif]">
          <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.08)] p-4  transition-all duration-300">
            <p className="text-[#2c74ff] text-7xl leading-none mb-3 font-serif">
              “
            </p>

            <h3
              className="text-[23px] leading-[30px] font-[400] text-[rgb(2,18,40)] mb-3"
              style={{ fontFamily: "Outfit, sans-serif", fontWeight: 400 }}
            >
              Top quality & service
            </h3>

            <p
              className="text-[19px] leading-[30px] font-[300] text-[rgba(2,18,40,0.82)]"
              style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300 }}
            >
              Nullam tincidunt – dignissim augue, eu condimentum rutrum lorem
              ipsum eu condimentum libero orci dapibus dignissim velit vitae
              fermentum.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src="/avatar1.jpg"
              alt="Christina Franklin"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p
                className="text-[19px] leading-[25px] font-[400] text-[rgb(2,18,40)]"
                style={{ fontFamily: "Outfit, sans-serif", fontWeight: 400 }}
              >
                Christina Franklin
              </p>
              <p
                className="text-[15px] leading-[20px] font-[400] text-[rgba(2,18,40,0.57)]"
                style={{ fontFamily: "Outfit, sans-serif", fontWeight: 400 }}
              >
                Seven Studio – Artist
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-[400px]">
          <div className="bg-white shadow-2xl p-4  duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              Exceptional service
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              Ipsum dolor sit amet – consectetur adipiscing elit molestie
              consectetuer luctus nec ullamcorper mattis nibh.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src="/avatar2.jpg"
              alt="Gregory Brown"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                Gregory Brown
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                Seven Shop – Owner
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-[400px]">
          <div className="bg-white shadow-2xl p-8 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              They took web design to the next level
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc
              consectetur feugiat rutrum. Sed lorem ipsum sapien! Thank you!
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src="/avatar3.jpg"
              alt="Alexander Bright"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                Alexander Bright
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                Seven Consulting – CEO
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-[400px]">
          <div className="bg-white shadow-2xl p-4 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              Professional and reliable
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              The entire process was smooth and professional. I’m really
              impressed with their dedication and creativity.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src="/avatar4.jpg"
              alt="Emma Khan"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                Emma Khan
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                Design Studio – Founder
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-[400px]">
          <div className="bg-white shadow-2xl p-7 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              Amazing service!
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              From start to finish, they provided excellent communication and
              outstanding results. Highly recommend!
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src="/avatar5.jpg"
              alt="Liam Brown"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                Liam Brown
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">Developer</p>
            </div>
          </div>
        </div>

        <div className="min-w-[400px]">
          <div className="bg-white shadow-2xl p-7 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              Superb results
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              Their attention to detail is remarkable. The final product
              exceeded all our expectations.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src="/avatar6.jpg"
              alt="Ava Sheikh"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                Ava Sheikh
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                Brand Manager
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-[400px]">
          <div className="bg-white shadow-2xl p-9 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              Loved working with them
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              Everything turned out even better than I imagined. I’ll definitely
              work with them again.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src="/avatar7.jpg"
              alt="Noah Ali"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">Noah Ali</p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                Entrepreneur
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-[400px]">
          <div className="bg-white shadow-2xl p-6 transition-all duration-300">
            <p className="text-[#2c74ff] text-7xl leading-none mb-2 font-serif">
              “
            </p>
            <h3 className="text-[18px] font-semibold text-[#021228] mb-2 text-left">
              Top-notch creativity
            </h3>
            <p className="text-[15px] text-[rgba(2,18,40,0.75)] leading-relaxed text-left">
              They brought our vision to life beautifully. The design and
              execution were flawless.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src="/avatar8.jpg"
              alt="Oliver Iqbal"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                Oliver Iqbal
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                Photographer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewa;
