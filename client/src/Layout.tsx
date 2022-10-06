import React from "react";
import { Routes, Route } from "react-router-dom";
import Employees from "./dashboard/employees";
import Financial from "./dashboard/financial";
import Dashboard from "./dashboard/dashboard";
import Inventory from "./dashboard/inventory";
import EditProduct from "./dashboard/editProduct";
import LowInventory from "./dashboard/lowInventory";

import Login from "./pages/login";
import Register from "./pages/register";

import Dash from "./Dash";
import User from "./User";

import Index from "./user";
import Cart from "./user/cart";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/user" element={<User />}>
          <Route index element={<Index />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<Dash />}>
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/products/edit/:id" element={<EditProduct />} />
          <Route path="financial" element={<Financial />} />
          <Route path="employees" element={<Employees />} />
          <Route path="lowInventory" element={<LowInventory />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Layout;
