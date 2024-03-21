import React from "react";
import Sidebar from "../components/Sidebar";
import LineChart2 from "../components/LineChart2";
import "../styles/Home.css";
import StockList from "../components/StockList";
import stockData from "../data/chartData";
import StockTable from "../components/StockTable.jsx";

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
            <h2 className="stockName">{stockData[0].stock_id}:</h2>
              <LineChart2 />
            </div>
            <div className="col3">
              <StockList />
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <h2>{stockData[0].stock_id} Daily data</h2>
            <StockTable/>
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
