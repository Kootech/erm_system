import React from "react";
import { useParams } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

import { NavLink } from "react-router-dom";

type ProductParams = {
  id: string;
};
const EditProductComponent = () => {
  const { id } = useParams<ProductParams>();
  return (
    <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-52">
      <div className="flex flex-1 bg-gray-100 justify-between w-full">
        <span className="ml-4 font-bold hover:cursor-pointer bg-blue">
          <NavLink to="/dashboard/lowInventory">Low Inventory</NavLink>
        </span>
        <button className="bg-blue-500 text-white font-bold rounded-md flex m-2">
          New <IoMdAddCircle />{" "}
        </button>
      </div>
      <h2 className="text-xl font-bold">edit {id} </h2>
      {/* <InventoryComponent /> */}
    </div>
  );
};

export default EditProductComponent;
