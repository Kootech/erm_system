import React from "react";
import { Outlet } from "react-router-dom";

import Aside from "./components/aside";

const Dash = () => {
  return (
    <div>
      <Aside />
      <Outlet />
    </div>
  );
};

export default Dash;
