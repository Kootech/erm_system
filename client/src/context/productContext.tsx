import React, { PropsWithChildren, useEffect, useState } from "react";

import { Product, Sold } from "../dataStructures";

import { getProducts, getSold } from "../services/api";

export const ProductsContext = React.createContext<Product[] | null>(null);

const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sold, setSold] = useState<Sold[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const respose = await getProducts();
      setProducts(respose);
    };

    const fetchSold = async () => {
      const response = await getSold();
      console.log(response);
    };

    getSold();
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={[...products]}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
