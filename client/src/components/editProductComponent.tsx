import React from "react";
import { useParams } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

import { NavLink } from "react-router-dom";
import LineGraph from "../charts/lineGraph";

type ProductParams = {
  id: string;
};
const EditProductComponent = () => {
  const { id } = useParams<ProductParams>();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

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
      <h2 className="text-xl font-bold"> {id} </h2>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-12 m-2 p-2 bg-slate-100 rounded">
        <div className="md:col-span-5 border-black border-2">
          <h2>Edit {id}</h2>
          <div className="mt-4">
            <form className="m-2 p-2">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="tax"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tax
                </label>
                <input
                  type="number"
                  id="tax"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="md:col-span-7 border-black border-2">
          <h2>Details</h2>
          <div className="m-4 p-2 border-gray-400 bg-white grid grid-cols-3 gap-2 justify-between">
            <div className=" h-32 shrink-1 bg-red-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
              today sale
            </div>
            <div className=" h-32 shrink-1 bg-green-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
              today sale
            </div>
            <div className=" h-32 shrink-1 bg-blue-200 rounded-sm shadow-md hover:cursor-pointer hover:text-xl transition-all">
              today sale
            </div>
          </div>
          <div className="m-2 p-2 ">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductComponent;
