"use client";
import React, { useState, useEffect } from "react";
import Hero from "../components/home/Hero";
import Aboutus from "../components/about/Aboutus";
import Companies from "../components/componies/Companies";
import Services from "../components/services/Services";
import Workwithus from "../components/workwithus/Workwithus";
import Joinsection from "../components/joinsection/Joinsection";
import Blog from "../components/blog/Blog";
import Reviewa from "../components/reviews/Reviewa";

const Main = ({ onLoadComplete }) => {
  const [data, setData] = useState(null); // start with null
  const [loading, setLoading] = useState(true); // new loading state

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    async function fetchData() {
      const endpoints = [
        { key: "hero", url: `${baseUrl}/home` },
        { key: "about", url: `${baseUrl}/about` },
        { key: "companies", url: `${baseUrl}/companies` },
        { key: "services", url: `${baseUrl}/services` },
        { key: "work", url: `${baseUrl}/work` },
        { key: "join", url: `${baseUrl}/join` },
        { key: "blog", url: `${baseUrl}/blog` },
        { key: "reviews", url: `${baseUrl}/reviews` },
      ];

      try {
        const results = await Promise.all(
          endpoints.map(async (endpoint) => {
            try {
              const res = await fetch(endpoint.url);
              if (!res.ok) {
                console.warn(`${endpoint.key} API returned ${res.status}`);
                return { key: endpoint.key, data: null };
              }
              const json = await res.json();
              return { key: endpoint.key, data: json };
            } catch (err) {
              console.error(`${endpoint.key} fetch error:`, err);
              return { key: endpoint.key, data: null };
            }
          })
        );

        const newData = results.reduce((acc, curr) => {
          acc[curr.key] = curr.data;
          return acc;
        }, {});

        setData(newData);
      } catch (err) {
        console.error("Unexpected error fetching page data:", err);
        setData({}); // fallback
      } finally {
        setLoading(false);
        if (onLoadComplete) onLoadComplete();
      }
    }

    fetchData();
  }, [onLoadComplete]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Hero data={data.hero} />
      <Aboutus data={data.about} />
      <Companies data={data.companies} />
      <Services data={data.services} />
      <Workwithus data={data.work} />
      <Joinsection data={data.join} />
      <Reviewa data={data.reviews} />
      <Blog data={data.blog} />
    </div>
  );
};

export default Main;
