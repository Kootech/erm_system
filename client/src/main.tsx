import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ProductsProvider from "./context/productContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>
);
