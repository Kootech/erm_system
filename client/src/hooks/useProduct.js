import React, { useContext } from "react";

import { ProductsContext } from "../context/productContext";

const useProduct = () => {
  const products = useContext(ProductsContext);
  console.log(products);
  return products;
};

export default useProduct;
