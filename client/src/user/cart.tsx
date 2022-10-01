import React from "react";

import ProductCard from "../userComponents/productCard";

const Cart = () => {
  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-12">
      <div className=" md:col-span-8 flex flex-1 justify-center m-2 border-2 w-full  bg-white rounded-md border-black">
        <div className="flex   max-h-48 gap-1  ">
          <img
            className="rounded-sm max-h-44 p-4 shrink"
            src="../../watch.jpg"
            alt=""
          />
          <div className="flex justify-center items-center  p-2 shrink">
            <button className="m-2 text-lg font-bold bg-slate-300 w-14 h-10 shrink-1  rounded-md hover:text-2xl hover:bg-slate-200">
              +
            </button>
            <input
              className="w-16 focus:border-4 border-b-2 border-2 h-10 "
              type="number"
            />

            <button className="m-2 text-lg font-bold bg-slate-300 w-14 h-10 shrink-1  rounded-md hover:text-2xl hover:bg-slate-200">
              -
            </button>
            <p className="m-2 font-bold">Total:</p>
          </div>
        </div>
      </div>
      <div className="m-2 bg-white border-black border-2 md:col-span-4 rounded-md">
        <h2 className="text-center font-bold text-xl underline my-4">
          Suggestions
        </h2>
        <div className="grid grid-cols-2 gap-1 m-1">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
