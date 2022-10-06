import React from "react";
import BarGraph from "../../charts/bargraph";
import PieChart from "../../charts/piechart";
import LineGraph from "../../charts/lineGraph";
import InventoryTable from "../../tables/inventory";

const MainContent = () => {
  return (
    <>
      <div className="m-4 p-2 border-gray-400 bg-white grid grid-cols-2 gap-2 md:grid-cols-4 justify-between">
        <div className=" h-32 shrink-1 bg-orange-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
          todays sales
        </div>
        <div className=" h-32 shrink-1 bg-blue-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
          Inventory
        </div>
        <div className=" h-32 shrink-1 bg-green-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
          products sold
        </div>
        <div className=" h-32 shrink-1 bg-red-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
          weekly sales
        </div>
      </div>
      <div className="m-4 p-2 bg-slate-200  grid grid-cols-1 gap-2 md:grid-cols-3">
        <div className="border-gray-400 shadow-sm bg-white p-4">
          <h3 className="bg-gray-400 text-xl ">Top selling Product</h3>
          <PieChart />
        </div>
        <div className="col-span-2 border-gray-400 shadow-sm bg-white p-4">
          <h3 className="text-xl bg-gray-400">sales bar graph</h3>
          <BarGraph />
        </div>
      </div>
      <div className="shadow-md border-2 rounded-md border-black p-2 m-2">
        <h2 className="text-xl font-bold my-2">Line Graph for </h2>
        <LineGraph />
      </div>
      <div className="my-4 shadow-md bg-white border-2 border-black p-2 ">
        <h2 className="text-xl font-serif font-bold my-2">Inventory table</h2>
        <InventoryTable />
      </div>
    </>
  );
};

export default MainContent;
