import React from "react";
import Sidebar from "../components/Sidebar";
import LineChart2 from "../components/LineChart2";
import "../styles/Home.css";
import StockList from "../components/StockList";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col2">
          <div className="row">
            <div className="col1">
              <LineChart2 />
            </div>
            <div className="col3">
              <StockList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
