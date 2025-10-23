"use client";

import React, { useContext, useState } from "react";
import { Outfit } from "next/font/google";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { AppContext } from "@/context/Appcontext";

const outfit = Outfit({ subsets: ["latin"] });

const Reviewa = () => {
  const { reviews, loading } = useContext(AppContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  if (loading) return <p className="text-center py-10">loading reviews.....</p>;
  if (!reviews)
    return <p className="text-center py-10">No reviews data found</p>;

  return (
    <div
      className={`${outfit.className} h-full w-full bg-gradient-to-t from-blue-50 to-white py-10`}
    >
      <h2 className="text-[26px] leading-[33px] font-medium text-[#2c74ff] text-center mb-12">
        {reviews.mainheading}
      </h2>

      <div ref={sliderRef} className="keen-slider cursor-grab px-5">
        <div className="keen-slider__slide min-w-[400px] font-[Outfit,sans-serif]">
          <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.08)] p-4 duration-300">
            <p className="text-[#2c74ff] text-7xl leading-none mb-3 font-serif">
              “
            </p>
            <h3
              className="text-[23px] leading-[30px] font-[400] text-[rgb(2,18,40)] mb-3"
              style={{ fontFamily: "Outfit, sans-serif", fontWeight: 400 }}
            >
              {reviews.cardheading1}
            </h3>
            <p
              className="text-[19px] leading-[30px] font-[300] text-[rgba(2,18,40,0.82)]"
              style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300 }}
            >
              {reviews.carddescription1}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src={reviews.userimg1}
              alt="Christina Franklin"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[19px] font-[400] text-[rgb(2,18,40)]">
                {reviews.username1}
              </p>
              <p className="text-[15px] text-[rgba(2,18,40,0.57)]">
                {reviews.usertitle1}
              </p>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide min-w-[400px]">
          <div className="bg-white shadow-2xl p-4 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              {reviews.cardheading2}
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              {reviews.carddescription2}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src={reviews.userimg2}
              alt="Gregory Brown"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                {reviews.username2}
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                {reviews.usertitle2}
              </p>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide min-w-[400px]">
          <div className="bg-white shadow-2xl p-8 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              {reviews.cardheading3}
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              {reviews.carddescription3}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src={reviews.userimg3}
              alt="Alexander Bright"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                {reviews.username3}
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                {reviews.usertitle3}
              </p>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide min-w-[400px]">
          <div className="bg-white shadow-2xl p-4 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              {reviews.cardheading4}
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              {reviews.carddescription4}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src={reviews.userimg4}
              alt="Emma Khan"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                {reviews.username4}
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                {reviews.usertitle4}
              </p>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide min-w-[400px]">
          <div className="bg-white shadow-2xl p-7 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              {reviews.cardheading5}
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              {reviews.carddescription5}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src={reviews.userimg5}
              alt="Liam Brown"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                {reviews.username5}
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                {reviews.usertitle5}
              </p>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide min-w-[400px]">
          <div className="bg-white shadow-2xl p-7 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              {reviews.cardheading6}
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              {reviews.carddescription6}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src={reviews.userimg6}
              alt="Sophia Lee"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                {reviews.username6}
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                {reviews.usertitle6}
              </p>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide min-w-[400px]">
          <div className="bg-white shadow-2xl p-7 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              {reviews.cardheading7}
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              {reviews.carddescription7}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src={reviews.userimg7}
              alt="Olivia Green"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                {reviews.username7}
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                {reviews.usertitle7}
              </p>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide min-w-[400px]">
          <div className="bg-white shadow-2xl p-7 duration-300">
            <p className="text-[#2c74ff] text-7xl mb-3 leading-none font-serif">
              “
            </p>
            <h3 className="text-[20px] font-semibold text-[#021228] mb-3 text-left">
              {reviews.cardheading8}
            </h3>
            <p className="text-[16px] text-[rgba(2,18,40,0.75)] text-left">
              {reviews.carddescription8}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 ml-2">
            <img
              src={reviews.userimg8}
              alt="Noah Davis"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[17px] font-medium text-[#021228]">
                {reviews.username8}
              </p>
              <p className="text-[14px] text-[rgba(2,18,40,0.6)]">
                {reviews.usertitle8}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {[0, 1, 2, 3, 4].map((idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`h-1 w-12 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "bg-[#2c74ff]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Reviewa;
