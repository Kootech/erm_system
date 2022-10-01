import React from "react";

import Nav from "./userComponents/nav";

import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default User;
