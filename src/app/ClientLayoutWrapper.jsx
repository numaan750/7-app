"use client";
import React, { useState } from "react";
import LogoLoader from "./components/mutualcomponents/LogoLoader";
import Navbar from "./components/mutualcomponents/Navbar";
import Footer from "./components/mutualcomponents/Footer";
import AppProvider from "@/context/Appcontext";
import Page from "./page"; // import your page

export default function ClientLayoutWrapper() {
  const [loading, setLoading] = useState(true);

  return (
    <AppProvider>
      {loading && <LogoLoader />}
      <Navbar />
      <Page setPageLoaded={() => setLoading(false)} />
      <Footer />
    </AppProvider>
  );
}
