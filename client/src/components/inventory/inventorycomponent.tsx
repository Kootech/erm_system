import InventoryTable from "../../tables/inventory";
import React, { useEffect, useState } from "react";

import LineGraph from "../../charts/lineGraph";

const InventoryComponent: React.FC = () => {
  const [all, setAll] = useState(true);
  const [detail, setDetail] = useState(false);
  const [profit, setProfit] = useState(false);
  const [loss, setLoss] = useState(false);

  useEffect(() => {});
  // function to toggle tabs
  const setTab = (e: React.SyntheticEvent) => {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === "all") {
      setAll(true);
      setDetail(false);
      setProfit(false);
      setLoss(false);
    } else if (e.currentTarget.id == "detail") {
      setAll(false);
      setDetail(true);
      setProfit(false);
      setLoss(false);
    } else if (e.currentTarget.id == "profit") {
      setAll(false);
      setDetail(false);
      setProfit(true);
      setLoss(false);
    } else {
      setAll(false);
      setDetail(false);
      setProfit(false);
      setLoss(true);
    }
  };
  return (
    <div className="mb-20">
      <section className="mt-6 p-2 grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="m-2 p-2 md:col-span-2 bg-blue-200 rounded-md overflow-auto">
          <h2 className="text-xl font-bold">All Products in the Inventory</h2>
          <h3 className="text-md">By Category</h3>
        </div>
        <div className="m-2 p-2 md:col-span-4 bg-green-200 rounded">
          <h3 className="text-xl font-bold">Products line graph</h3>
          <LineGraph />
        </div>
      </section>
      <section>
        <div className="mx-2 my-6 p-2 bg-slate-50">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
            <div className="p-2 m-2 shadow-md border-r-2 overflow-y-auto flex-col">
              <div
                id="all"
                className="my-2 rounded-sm bg-slate-50 hover:bg-slate-200 cursor-pointer"
                onClick={setTab}
              >
                All
              </div>
              <div
                className="my-2 rounded-sm bg-slate-50 hover:bg-slate-200 cursor-pointer"
                id="detail"
                onClick={setTab}
              >
                Today Sales
              </div>
              <div
                className="my-2 rounded-sm bg-slate-50 hover:bg-slate-200 cursor-pointer"
                id="profit"
                onClick={setTab}
              >
                Most Selling
              </div>
              <div
                className="my-2 rounded-sm bg-slate-50 hover:bg-slate-200 cursor-pointer"
                id="loss"
                onClick={setTab}
              >
                Least Selling
              </div>
            </div>

            <div className={`${all ? "" : "hidden"} col-span-3 shadow-lg p-2`}>
              <h2 className="text-xl font-bold my-4">All products Table</h2>
              <InventoryTable />
            </div>

            <div
              className={`${detail ? "" : "hidden"} col-span-3 shadow-lg p-2`}
            >
              <h1>Today sales Table</h1>
            </div>

            <div
              className={`${profit ? "" : "hidden"} col-span-3 shadow-lg p-2`}
            >
              <h1>Most Selling Table</h1>
            </div>

            <div className={`${loss ? "" : "hidden"} col-span-3 shadow-lg p-2`}>
              <h1>Least Selling Table</h1>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default InventoryComponent;
