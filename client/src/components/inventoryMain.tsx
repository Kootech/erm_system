import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import InventoryTable from "../tables/inventory";

const InventoryMain = () => {
  return (
    <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-52">
      <div className="flex flex-1 bg-gray-100 justify-between w-full">
        <span>Inventory</span>
        <button className="bg-blue-500 text-white font-bold rounded-md flex m-2">
          New <IoMdAddCircle />{" "}
        </button>
      </div>
      <section>
        <div className="mx-2 my-6 p-2 bg-slate-50">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
            <div className="p-2 m-2 shadow-md border-r-2 overflow-y-auto flex-col">
              <div>All</div>
              <div>All</div>
              <div>All</div>
              <div>All</div>
            </div>
            <div className="col-span-3 shadow-lg p-2">
              <InventoryTable />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryMain;
