"use client";
import React, { useContext } from "react";
import LogoLoader from "./components/mutualcomponents/LogoLoader";
import Navbar from "./components/mutualcomponents/Navbar";
import Footer from "./components/mutualcomponents/Footer";
import AppProvider, { AppContext } from "@/context/Appcontext";
import Page from "./page";

function InnerLayout() {
  const { loading } = useContext(AppContext);

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center" >
      <span className="w-12 h-12 animate-spin border-2 border-black " ></span>
    </div>
  ) // or your custom loading screen

  return (
    <>
      <Navbar />
      <Page />
      <Footer />
    </>
  );
}

export default function ClientLayoutWrapper() {
  return (
    <AppProvider>
      <InnerLayout />
    </AppProvider>
  );
}
