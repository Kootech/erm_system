import React from "react";
import Nav from "../nav";
import EmployeesContent from "./employeesContent";

const EmployeesMain = () => {
  return (
    <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
      <Nav />
      <EmployeesContent />
    </div>
  );
};

export default EmployeesMain;
