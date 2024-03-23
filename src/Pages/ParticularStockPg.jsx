import React from "react";
import Fundamental from "../components/Fundamental";
import StockList from "../components/StockList";
import StockTable from "../components/StockTable";
import LineChart2 from "../components/LineChart2";
import Sidebar from "../components/Sidebar";
import stockData from "../data/chartData";
import { useParams } from "react-router-dom";

export default function ParticularStockPg() {
  let { id } = useParams();

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
                <h2 className="stockName">{id}:</h2>
                <LineChart2 />
              </div>
              <div className="col1">
                <h2>{id} Daily data</h2>
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
