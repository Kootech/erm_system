import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard/dashboard";

function App() {
  return (
    <>
      <div className=" bg-slate-400 ">
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
