"use client";
import React from 'react';
import Main from "../app/main/Main";

const Page = ({ setPageLoaded }) => {
  return (
    <div>
      <Main onLoadComplete={setPageLoaded} />
    </div>
  )
}

export default Page;
