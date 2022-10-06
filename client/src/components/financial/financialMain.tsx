import React from "react";
import { IoMdAddCircle } from "react-icons/io";

import InventoryComponent from "../inventory/inventorycomponent";
import FinancialContent from "./financialContent";
import Nav from "../nav";
const FinancialMain = () => {
  return (
    <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-52">
      <Nav />
      <FinancialContent />
    </div>
  );
};

export default FinancialMain;
