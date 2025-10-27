"use client";
import React, { useEffect, useState } from "react";

const LogoLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // 2.5s logo center me rukega
    const pauseTimer = setTimeout(() => setExit(true), 2500);

    // Zoom-out ke 0.7s ke baad screen se hata do
    const removeTimer = setTimeout(() => setIsVisible(false), 3200);

    return () => {
      clearTimeout(pauseTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed h-screen inset-0 bg-blue-950 flex items-center justify-center z-[9999]">
      <img
        src="/Logo-whit.png"
        alt="Logo"
        className={`w-70 h-auto ${
          exit ? "animate-logoZoomOut" : "animate-logoZoomIn"
        }`}
        style={{ animationFillMode: "forwards" }} // ensure final zoom-out state persist
      />
    </div>
  );
};

export default LogoLoader;
