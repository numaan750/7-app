"use client";
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [home, setHome] = useState(null);
  const [aboutus, setAboutus] = useState(null);
  const [componeies, setcomponeies] = useState(null);
  const [services, setservices] = useState(null);
  const [workwithus, setWorkwithus] = useState(null);
  const [joinus, setJoinus] = useState(null);
  const [blog, setBlog] = useState(null);
  const [footer, setFooter] = useState(null);
  const [reviews, setReviews] = useState(null);

  const backendUrl = process.env.NEXT_PUBLIC_API_URL;

  // Navbar API
  const getNavbar = async () => {
    try {
      const res = await fetch("https://seven-app-back-end.vercel.app/api/navbarmodels", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch Navbar");

      const data = await res.json();
      const raw = Array.isArray(data) ? data[0] : data;

      if (raw) {
        setNavbar({
          logo_white: raw.logo_white || "/fallback-logo.png",
          logo_black: raw.logo_black || "/fallback-logo.png",
          navlinks: raw.navlinks || [],
        });
      } else {
        setNavbar(null);
      }
    } catch (error) {
      console.error("Error fetching navbar:", error);
      setNavbar(null);
    }
  };

  // Generic fetch helper
  const fetchData = async (url, setter) => {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to fetch ${url}`);
      const data = await res.json();
      const single = Array.isArray(data) && data.length > 0 ? data[0] : data || {};
      setter(single);
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      setter({});
    }
  };

  // All APIs
  const getHome = () => fetchData(`"https://seven-app-back-end.vercel.app/api/homemodels"`, setHome);
  const getAboutus = () => fetchData(`${backendUrl}/aboutmodels`, setAboutus);
  const getcomponeies = () => fetchData(`${backendUrl}/componeiesmodels`, setcomponeies);
  const getservices = () => fetchData(`${backendUrl}/servicemodels`, setservices);
  const getWorkwithus = () => fetchData(`${backendUrl}/workwithusmodels`, setWorkwithus);
  const getJoinus = () => fetchData(`${backendUrl}/joinusmodels`, setJoinus);
  const getBlog = () => fetchData(`${backendUrl}/blogmodels`, setBlog);
  const getFooter = () => fetchData(`${backendUrl}/footermodels`, setFooter);
  const getReviews = () => fetchData(`${backendUrl}/reviewsmodels`, setReviews);

  // Fetch main + background APIs
  useEffect(() => {
    const fetchAll = async () => {
      // setLoading(true);

      // Main content (show page ASAP)
      await Promise.all([getNavbar(), getHome()]);
      // setLoading(false);

      // Background fetch
      getAboutus();
      getcomponeies();
      getservices();
      getWorkwithus();
      getJoinus();
      getBlog();
      getFooter();
      getReviews();
    };
    fetchAll();
  }, []);

  return (
    <AppContext.Provider
      value={{
        navbar,
        // loading,
        home,
        getHome,
        aboutus,
        getAboutus,
        componeies,
        getcomponeies,
        services,
        getservices,
        workwithus,
        getWorkwithus,
        joinus,
        getJoinus,
        blog,
        getBlog,
        footer,
        getFooter,
        reviews,
        getReviews,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
