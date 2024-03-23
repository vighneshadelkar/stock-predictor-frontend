import React from "react";
import Sidebar from "../components/Sidebar";

export default function AllStocks() {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col2"></div>
      </div>
    </div>
  );
}
