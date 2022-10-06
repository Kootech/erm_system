import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

import LineGraph from "../../charts/lineGraph";

const EmployeesContent = () => {
  return (
    <>
      <div className="m-2 p-2 flex justify-between">
        <div>All</div>
        <div>
          <div className="text-white text-xl bg-green-700 rounded p-3 flex hover:cursor-pointer">
            {" "}
            <AiOutlineUserAdd /> Add Employee
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeesContent;
