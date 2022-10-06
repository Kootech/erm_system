import React from "react";

import LineGraph from "../../charts/lineGraph";

const FinancialContent = () => {
  return (
    <>
      <div className="m-4 p-2 border-gray-400 bg-white grid grid-cols-2 gap-2 md:grid-cols-4 justify-between">
        <div className=" h-32 shrink-1 bg-orange-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
          Total Daily Revenue
        </div>
        <div className=" h-32 shrink-1 bg-blue-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
          Total Weekly Revenue
        </div>
        <div className=" h-32 shrink-1 bg-green-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
          Total Monthly Revenue
        </div>
        <div className=" h-32 shrink-1 bg-red-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
          Total Annual Revenue
        </div>
      </div>
      <div className="m-2 p-2 ">
        <h2>Revenue Chart</h2>
        <LineGraph />
      </div>
    </>
  );
};

export default FinancialContent;
