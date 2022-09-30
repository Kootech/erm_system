import InventoryTable from "../tables/inventory";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store";
import { fetchProducts } from "../features/products/productSlice";

const InventoryComponent: React.FC = () => {
  const [all, setAll] = useState(true);
  const [detail, setDetail] = useState(false);
  const [profit, setProfit] = useState(false);
  const [loss, setLoss] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);

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
    <div>
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
                Detail
              </div>
              <div
                className="my-2 rounded-sm bg-slate-50 hover:bg-slate-200 cursor-pointer"
                id="profit"
                onClick={setTab}
              >
                profit
              </div>
              <div
                className="my-2 rounded-sm bg-slate-50 hover:bg-slate-200 cursor-pointer"
                id="loss"
                onClick={setTab}
              >
                loss
              </div>
            </div>

            <div className={`${all ? "" : "hidden"} col-span-3 shadow-lg p-2`}>
              <InventoryTable />
            </div>

            <div
              className={`${detail ? "" : "hidden"} col-span-3 shadow-lg p-2`}
            >
              <h1>Detail</h1>
            </div>

            <div
              className={`${profit ? "" : "hidden"} col-span-3 shadow-lg p-2`}
            >
              <h1>Profit</h1>
            </div>

            <div className={`${loss ? "" : "hidden"} col-span-3 shadow-lg p-2`}>
              <h1>Loss</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryComponent;
