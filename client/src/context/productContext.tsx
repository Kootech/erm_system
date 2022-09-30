import React, { PropsWithChildren, useEffect, useState } from "react";
import { Product } from "../components/dataStructures";

import { getProducts } from "../services/api";

export const ProductsContext = React.createContext<Product[] | null>(null);

const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const respose = await getProducts();
      setProducts(respose);
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={[...products]}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
