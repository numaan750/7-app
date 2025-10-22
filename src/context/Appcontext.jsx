"use client";
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [home, setHome] = useState(null);
  const [aboutus, setAboutus] = useState(null);
  const [componeies, setcomponeies] = useState(null);
  const [servies, setservies] = useState(null);
  const [workwithus, setworkwithus] = useState(null);
  const [joinus, setjoinus] = useState(null);
  const [blog, setblog] = useState(null);
  const [footer, setfooter] = useState(null);
  const [reviews, setreviews] = useState(null);

  const backendUrl = process.env.NEXT_PUBLIC_API_URL;

  //navbar api fetch
  const getNavbar = async () => {
    try {
      const res = await fetch(
        `https://seven-app-back-end.vercel.app/api/navbarmodels`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch Navbar");

      const data = await res.json();
      console.log("Fetched Navbar Data:", data);

      const raw = Array.isArray(data) ? data[0] : data;

      if (raw && raw.logo) {
        const normalized = {
          logo_white: raw.logo,
          logo_black: raw.logo,
          links: raw.navlinks?.map((item, index) => ({
            id: index,
            label: item.link,
            url: `/${item.link.toLowerCase().replace(/\s+/g, "-")}`,
          })),
        };

        setNavbar(normalized);
      } else {
        console.warn(" No Navbar data found in API");
        setNavbar(null);
      }
    } catch (error) {
      console.error("Error fetching navbar:", error);
    } finally {
      setLoading(false);
    }
  };

  //home ki api
  const gethome = async () => {
    try {
      const res = await fetch(
        `https://seven-app-back-end.vercel.app/api/homemodels`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch Home");

      const data = await res.json();
      console.log("Fetched Home Data:", data);

      const singleHome = Array.isArray(data) ? data[0] : data;
      setHome(singleHome);
    } catch (error) {
      console.error("Error fetching home:", error);
    }
  };

  //about api
  const getaboutus = async () => {
    try {
      const res = await fetch(
        `https://seven-app-back-end.vercel.app/api/aboutmodels`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch aboutus");

      const data = await res.json();
      console.log("Fetched aboutus Data:", data);

      const singleaboutus = Array.isArray(data) ? data[0] : data;
      setAboutus(singleaboutus);
    } catch (error) {
      console.error("Error fetching aboutus:", error);
    }
  };

  //componies api
  const getcomponeies = async () => {
    try {
      const res = await fetch(
        `https://seven-app-back-end.vercel.app/api/componeiesmodels`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch componeies");

      const data = await res.json();
      console.log("Fetched componeies Data:", data);

      const singlecomponeies = Array.isArray(data) ? data[0] : data;
      setcomponeies(singlecomponeies);
    } catch (error) {
      console.error("Error fetching componeies:", error);
    }
  };
  //servies api
  const getservies = async () => {
    try {
      const res = await fetch(
        `https://seven-app-back-end.vercel.app/api/servicemodels`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch servies");

      const data = await res.json();
      console.log("Fetched servies Data:", data);

      const singleservies = Array.isArray(data) ? data[0] : data;
      setservies(singleservies);
    } catch (error) {
      console.error("Error fetching servies:", error);
    }
  };

  //workwithus api
  const getworkwithus = async () => {
    try {
      const res = await fetch(
        `https://seven-app-back-end.vercel.app/api/workwithusmodels`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch workwithus");

      const data = await res.json();
      console.log("Fetched workwithus Data:", data);

      const singleworkwithus = Array.isArray(data) ? data[0] : data;
      setworkwithus(singleworkwithus);
    } catch (error) {
      console.error("Error fetching workwithus:", error);
    }
  };
  // join apis
  const getjoinus = async () => {
    try {
      const res = await fetch(
        `https://seven-app-back-end.vercel.app/api/joinusmodels`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch joinus");

      const data = await res.json();
      console.log("Fetched joinus Data:", data);

      const singlejoinus = Array.isArray(data) ? data[0] : data;
      setjoinus(singlejoinus);
    } catch (error) {
      console.error("Error fetching joinus:", error);
    }
  };
  //blogs api
  const getblog = async () => {
    try {
      const res = await fetch(
        `https://seven-app-back-end.vercel.app/api/blogmodels`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch blog");

      const data = await res.json();
      console.log("Fetched blog Data:", data);

      const singleblog = Array.isArray(data) ? data[0] : data;
      setblog(singleblog);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };
  //Footer api
  const getfooter = async () => {
    try {
      const res = await fetch(
        `https://seven-app-back-end.vercel.app/api/footermodels`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch footer");

      const data = await res.json();
      console.log("Fetched footer Data:", data);

      const singlefooter = Array.isArray(data) ? data[0] : data;
      setfooter(singlefooter);
    } catch (error) {
      console.error("Error fetching footer:", error);
    }
  };
  //  reviews
  const getreviews = async () => {
    try {
      const res = await fetch(
        `https://seven-app-back-end.vercel.app/api/reviewsmodels`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch reviews");

      const data = await res.json();
      console.log("Fetched reviews Data:", data);

      const singlereviews = Array.isArray(data) ? data[0] : data;
      setreviews(singlereviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      await Promise.all([
        getNavbar(),
        gethome(),
        getaboutus(),
        getcomponeies(),
        getservies(),
        getworkwithus(),
        getjoinus(),
        getblog(),
        getfooter(),
        getreviews(),
      ]);
      setLoading(false);
    };
    fetchAll();
  }, []);

  return (
    <AppContext.Provider
      value={{
        navbar,
        loading,
        home,
        gethome,
        aboutus,
        getaboutus,
        componeies,
        getcomponeies,
        servies,
        getservies,
        workwithus,
        getworkwithus,
        joinus,
        getjoinus,
        blog,
        getblog,
        footer,
        getfooter,
        reviews,
        getreviews,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
