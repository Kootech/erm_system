import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import InventoryComponent from "./inventorycomponent";
import { NavLink } from "react-router-dom";

import Nav from "../nav";

const InventoryMain = () => {
  return (
    <div className="h-full w-full  bg-gray-50 relative overflow-y-auto lg:ml-52">
      <Nav />
      <div className="flex flex-1 mt-4 bg-gray-100 justify-between w-full">
        <button className="ml-4 font-bold hover:cursor-pointer bg-blue-400 p-2 rounded">
          <NavLink to="/dashboard/lowInventory"> Low Inventory</NavLink>
        </button>

        <button className="bg-blue-500 text-white font-bold rounded-md flex m-2">
          New <IoMdAddCircle />{" "}
        </button>
      </div>
      <InventoryComponent />
    </div>
  );
};

export default InventoryMain;
