"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram, FaSearch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AppContext } from "@/context/Appcontext";

const Footer = () => {
  const { footer, loading } = useContext(AppContext);

  if (loading)
    return <p className="text-center py-10">Loading footer...</p>;
  if (!footer)
    return <p className="text-center py-10">No footer data found</p>;

  return (
    <footer className="bg-[#f5f6f7] text-gray-700 pt-16 pb-10 border-t border-gray-200">
      <div className="Mycontainer flex flex-col items-center text-center gap-12 min-[1020px]:grid min-[1020px]:grid-cols-4 min-[1020px]:text-left min-[1020px]:items-start">

        <div className="flex flex-col items-center min-[1020px]:items-start">
          <div className="mb-10">
            {footer.section1?.logo && (
              <Image
                src={footer.section1.logo}
                alt="Company Logo"
                width={140}
                height={50}
                className="object-contain mx-auto min-[1020px]:mx-0"
              />
            )}
          </div>

          <div className="space-y-3">
            <p className="text-xl font-semibold text-[#021229]">
              {footer.section1?.text1}
            </p>
            <p className="text-[#505b6b]">
              {footer.section1?.text2}
            </p>
          </div>

          <button className="mt-6 bg-[#2b72ff] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#2362d9] transition-all">
            {footer.section1?.buttontext}
          </button>
        </div>

        <div className="flex flex-col justify-end px-4">
          <h3 className="text-[#2b72ff] font-semibold mb-6">
            {footer.section2?.title}
          </h3>
          <ul className="space-y-2 text-[#364354]">
            {footer.section2?.items?.map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:text-[#6a9bfc] transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-end text-left px-6 min-[1020px]:px-20">
          <h3 className="text-[#2b72ff] font-semibold mb-3">
            {footer.section3?.title}
          </h3>
          <ul className="space-y-2 text-[#364354]">
            {footer.section3?.items?.map((item, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-[#6a9bfc] transition-colors">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center min-[1020px]:items-start">
          <h3 className="text-[#2b72ff] font-semibold mb-6">
            {footer.section4?.title}
          </h3>

          <div className="flex justify-center min-[1020px]:justify-start space-x-6 mb-6">
            <Link href="#"><FaFacebookF className="text-xl hover:text-[#6a9bfc] transition-colors" /></Link>
            <Link href="#"><FaXTwitter className="text-xl hover:text-[#6a9bfc] transition-colors" /></Link>
            <Link href="#"><FaYoutube className="text-xl hover:text-[#6a9bfc] transition-colors" /></Link>
            <Link href="#"><FaInstagram className="text-xl hover:text-[#6a9bfc] transition-colors" /></Link>
          </div>

          <div className="relative w-full max-w-[250px] mx-auto min-[1020px]:mx-0">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-b border-gray-300 bg-transparent outline-none py-2 text-gray-600 placeholder-gray-400 text-center min-[1020px]:text-left"
            />
            <FaSearch className="absolute top-1/2 right-2 -translate-y-1/2 text-[#a7adb4] hover:text-[#021229]" />
          </div>
        </div>
      </div>

      <div className="Mycontainer mt-12 pt-6 border-t border-gray-300 text-sm text-gray-600 flex flex-col min-[1020px]:flex-row items-center justify-center min-[1020px]:justify-between gap-4 text-center">
        <p>{footer.copywrittext}</p>
      </div>
    </footer>
  );
};

export default Footer;
