"use client";
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [navbar, setNavbar] = useState({});
  const [home, setHome] = useState({});
  const [aboutus, setAboutus] = useState({});
  const [componeies, setcomponeies] = useState({});
  const [services, setservices] = useState({});
  const [workwithus, setWorkwithus] = useState({});
  const [joinus, setJoinus] = useState({});
  const [blog, setBlog] = useState({});
  const [footer, setFooter] = useState({});
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(true);

  // Generic fetch helper
  const fetchData = async (url, setter) => {
    try {
      const res = await fetch(url, { next: { revalidate: 10 } });
      if (!res.ok) throw new Error(`Failed to fetch ${url}`);
      const data = await res.json();
      const single =
        Array.isArray(data) && data.length > 0 ? data[0] : data || {};
      setter(single);
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      setter({});
    }
  };

  // All APIs using direct links
  const getNavbar = () =>
    fetchData(
      "https://seven-app-back-end.vercel.app/api/navbarmodels",
      setNavbar
    );
  const getHome =  () =>{
     fetchData("https://seven-app-back-end.vercel.app/api/homemodels", setHome);
  }
  const getAboutus = () =>
    fetchData(
      "https://seven-app-back-end.vercel.app/api/aboutmodels",
      setAboutus
    );
  const getcomponeies = () =>
    fetchData(
      "https://seven-app-back-end.vercel.app/api/componeiesmodels",
      setcomponeies
    );
  const getservices = () =>
    fetchData(
      "https://seven-app-back-end.vercel.app/api/servicemodels",
      setservices
    );
  const getWorkwithus = () =>
    fetchData(
      "https://seven-app-back-end.vercel.app/api/workwithusmodels",
      setWorkwithus
    );
  const getJoinus = () =>
    fetchData(
      "https://seven-app-back-end.vercel.app/api/joinusmodels",
      setJoinus
    );
  const getBlog = () =>
    fetchData("https://seven-app-back-end.vercel.app/api/blogmodels", setBlog);
  const getFooter = () =>
    fetchData(
      "https://seven-app-back-end.vercel.app/api/footermodels",
      setFooter
    );
  const getReviews = () =>
    fetchData(
      "https://seven-app-back-end.vercel.app/api/reviewsmodels",
      setReviews
    );

  // Fetch main + background APIs
  useEffect(() => {
  // Background fetch – don’t block render
  const loadData = async () => {
    setLoading(true);
    await getNavbar();
    await getHome();
    await getAboutus();
    await getcomponeies();
    await getservices();
    await getWorkwithus();
    await getJoinus();
    await getBlog();
    await getFooter();
    await getReviews();
    setLoading(false);
  }

  loadData();
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
        loading,
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
