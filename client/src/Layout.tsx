import React from "react";
import { Routes, Route } from "react-router-dom";
import Employees from "./dashboard/employees";
import Financial from "./dashboard/financial";
import Dashboard from "./dashboard/dashboard";
import Inventory from "./dashboard/inventory";
import Aside from "./components/aside";

const Layout = () => {
  return (
    <div>
      <Aside />
      <Routes>
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="financial" element={<Financial />} />
          <Route path="employees" element={<Employees />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Layout;
