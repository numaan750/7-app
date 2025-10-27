"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Outfit } from "next/font/google";
import {
  FaUser,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AppContext } from "@/context/Appcontext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { navbar, loading } = useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setScrolled(currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const logoSrc =
    (scrolled ? navbar?.logo_black : navbar?.logo_white) ||
    "/fallback-logo.png";

  return (
    <nav
      className={`${
        outfit.className
      } fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      {!menuOpen && (
        <div className="Mycontainer flex items-center justify-between py-6 lg:gap-8 xl:gap-12">
          <button
            className={`md:hidden text-2xl ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>

          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={logoSrc}
              alt="Company Logo"
              width={120}
              height={40}
              priority
              style={{
                width: "120px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          <div
            className={`hidden md:flex items-center justify-end flex-1 space-x-9 text-[20px] font-normal transition-colors duration-300 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {navbar?.navlinks?.map((link, index) => (
              <Link key={index} href={link.link} className="relative group">
                {link.link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00c1cf] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div
            className={`flex items-center space-x-5 text-lg transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <FaUser className="hidden lg:block cursor-pointer transition-colors" />
            <FaSearch className="cursor-pointer transition-colors" />
            <FaShoppingBag className="cursor-pointer transition-colors" />
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="h-screen inset-0 bg-white z-50 flex flex-col transition-all duration-500">
          <div className="flex justify-end px-6 pt-6">
            <FaTimes
              className="text-gray-800 text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <div className="px-6 mt-2">
            <Image
              src={logoSrc}
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-start px-6 py-6 space-y-3 text-[22px] font-normal text-gray-900 mt-6">
            {navbar?.navlinks?.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className={`${
                  link.link === "/" ? "text-[#00c1cf] font-medium" : ""
                }`}
              >
                {link.link}
              </Link>
            ))}
          </div>

          <div className="flex justify-center pb-8 mt-auto">
            <button className="bg-[#2b72ff] text-white px-10 py-3 rounded-full text-[18px] hover:bg-[#0e49bf] transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
