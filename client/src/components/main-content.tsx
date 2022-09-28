import React from "react";
import LineGraph from "../charts/linegraph";
import PieChart from "../charts/piechart";

const MainContent = () => {
  return (
    <>
      <div className="m-4 p-2 border-gray-400 bg-white grid grid-cols-2 gap-2 md:grid-cols-4 justify-between">
        <div>todays sales</div>
        <div>Inventory</div>
        <div>products sold</div>
        <div>weekly sales</div>
      </div>
      <div className="m-4 p-2 bg-slate-200  grid grid-cols-1 gap-2 md:grid-cols-3">
        <div className="border-gray-400 shadow-sm bg-white p-4">
          <h3 className="bg-gray-400 text-xl ">Top selling Product</h3>
          <PieChart />
        </div>
        <div className="col-span-2 border-gray-400 shadow-sm bg-white p-4">
          <h3 className="text-xl bg-gray-400">sales line graph</h3>
          <LineGraph />
        </div>
      </div>
    </>
  );
};

export default MainContent;
