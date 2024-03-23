import React from "react";
import Fundamental from "../components/Fundamental";
import StockList from "../components/StockList";
import StockTable from "../components/StockTable";
import LineChart2 from "../components/LineChart2";
import Sidebar from "../components/Sidebar";
import stockData from "../data/chartData";

export default function ParticularStockPg() {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col2">
          <div className="row">
            <div className="col">
              <div className="col1">
                <h2 className="stockName">{stockData[0].stock_id}:</h2>
                <LineChart2 />
              </div>
              <div className="col1">
                <h2>{stockData[0].stock_id} Daily data</h2>
                <StockTable />
              </div>
            </div>

            <div className="col">
              <div className="col3">
                <StockList />
              </div>
              <div className="col3">
                <Fundamental />
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}
