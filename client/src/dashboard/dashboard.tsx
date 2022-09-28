import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import Aside from "../components/aside";
import Main from "../components/main";

const Dashboard = () => {
  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <Aside />
      <Main />
    </div>
  );
};

export default Dashboard;
