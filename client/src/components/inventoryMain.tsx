import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import InventoryComponent from "./inventorycomponent";
const InventoryMain = () => {
  return (
    <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-52">
      <div className="flex flex-1 bg-gray-100 justify-between w-full">
        <span>Inventory</span>
        <button className="bg-blue-500 text-white font-bold rounded-md flex m-2">
          New <IoMdAddCircle />{" "}
        </button>
      </div>
      <InventoryComponent />
    </div>
  );
};

export default InventoryMain;
