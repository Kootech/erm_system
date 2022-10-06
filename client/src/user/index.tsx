import React from "react";

import ProductCard from "../userComponents/productCard";

const Index = () => {
  return (
    <div>
      <div className="fixed top-20 right-10 rounded-full bg-blue-900 text-red m-1 p-4 font-bold hover:cursor-pointer">
        0
      </div>
      <div className=" bg-white flex justify-center ">
        <form>
          <input
            className="border-b-4 border-1 m-4 p-2 border-black"
            type="text"
            placeholder="filter"
          />
        </form>
      </div>
      <div className="mt-4 p-2 grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Index;
