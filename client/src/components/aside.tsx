import React from "react";
import {
  AiFillHome,
  AiOutlineUsergroupDelete,
  AiOutlineCustomerService,
  AiFillSetting,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { MdOutlineInventory } from "react-icons/md";
import { FaHammer } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <div>
      <aside
        id="sidebar"
        className="fixed  z-20 h-full hidden top-0 left-0 pt-16   lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-black  divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                <li>
                  <form action="#" method="GET" className="lg:hidden">
                    <label className="sr-only">Search</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="mobile-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600  block w-full pl-10 p-2.5"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className="text-base text-white font-normal mx-4 my-6 rounded-lg flex items-center p-2 hover:bg-gray-800 group"
                  >
                    <AiFillHome className="text-2xl" />
                    <span className="ml-3">Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/employees"
                    className="text-base text-white font-normal mx-4 my-6 rounded-lg flex items-center p-2 hover:bg-gray-800 group"
                  >
                    <AiOutlineUsergroupDelete className="text-2xl" />
                    <span className="ml-3">Employees</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/inventory"
                    className="text-base text-white font-normal mx-4 my-6 rounded-lg flex items-center p-2 hover:bg-gray-800 group"
                  >
                    <MdOutlineInventory className="text-2xl" />
                    <span className="ml-3">Products</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/financial"
                    className="text-base text-white font-normal mx-4 my-6 rounded-lg flex items-center p-2 hover:bg-gray-800 group"
                  >
                    <MdOutlineInventory className="text-2xl" />
                    <span className="ml-3">Financial</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className="text-base text-white font-normal mx-4 my-6 rounded-lg flex items-center p-2 hover:bg-gray-800 group"
                  >
                    <FaHammer className="text-2xl" />
                    <span className="ml-3">Services</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className="text-base text-white font-normal mx-4 my-6 rounded-lg flex items-center p-2 hover:bg-gray-800 group"
                  >
                    <AiOutlineAreaChart className="text-2xl" />
                    <span className="ml-3">Charts</span>
                  </NavLink>
                </li>
              </ul>
              <div className="space-y-2 pt-2">
                <NavLink
                  to="/dashboard"
                  className="text-base text-white font-normal rounded-lg hover:bg-gray-100 hover:text-black group transition duration-75 flex items-center p-2"
                >
                  <AiFillSetting className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" />
                  <span className="ml-4">Settings</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
