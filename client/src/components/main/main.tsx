import React from "react";
import Nav from "../nav";
import MainContent from "./main-content";

const Main = () => {
  return (
    <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
      <Nav />
      <MainContent />
    </div>
  );
};

export default Main;
