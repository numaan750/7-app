"use client";
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(null);
  const [home, setHome] = useState(null);
  const [aboutus, setAboutus] = useState(null);
  const [componeies, setcomponeies] = useState(null);
  const [services, setservices] = useState(null);
  const [workwithus, setWorkwithus] = useState(null);
  const [joinus, setJoinus] = useState(null);
  const [blog, setBlog] = useState(null);
  const [footer, setFooter] = useState(null);
  const [reviews, setReviews] = useState(null);

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

  // All APIs using direct links
  const getNavbar = () => fetchData("https://seven-app-back-end.vercel.app/api/navbarmodels", setNavbar);
  const getHome = () => fetchData("https://seven-app-back-end.vercel.app/api/homemodels", setHome);
  const getAboutus = () => fetchData("https://seven-app-back-end.vercel.app/api/aboutmodels", setAboutus);
  const getcomponeies = () => fetchData("https://seven-app-back-end.vercel.app/api/componeiesmodels", setcomponeies);
  const getservices = () => fetchData("https://seven-app-back-end.vercel.app/api/servicemodels", setservices);
  const getWorkwithus = () => fetchData("https://seven-app-back-end.vercel.app/api/workwithusmodels", setWorkwithus);
  const getJoinus = () => fetchData("https://seven-app-back-end.vercel.app/api/joinusmodels", setJoinus);
  const getBlog = () => fetchData("https://seven-app-back-end.vercel.app/api/blogmodels", setBlog);
  const getFooter = () => fetchData("https://seven-app-back-end.vercel.app/api/footermodels", setFooter);
  const getReviews = () => fetchData("https://seven-app-back-end.vercel.app/api/reviewsmodels", setReviews);

  // Fetch main + background APIs
  useEffect(() => {
    const fetchAll = async () => {
      // Main content (show page ASAP)
      await Promise.all([getNavbar(), getHome()]);

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
