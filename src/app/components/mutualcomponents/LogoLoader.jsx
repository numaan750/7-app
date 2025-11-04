"use client";
import { AppContext } from "@/context/Appcontext";
import React, { useContext, useEffect, useState } from "react";

const LogoLoader = () => {
  const { loading } = useContext(AppContext);
  return (
    <>
      {loading && (
        <div className="flex min-h-full items-center justify-center">
          <div className="w-12 h-12 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
};

export default LogoLoader;
