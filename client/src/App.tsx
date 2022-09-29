import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <>
      <div className=" bg-slate-400 ">
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
