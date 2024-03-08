import React from "react";
import "../styles/StockList.css";
import TinyLineChart from "./TinyLineChart";

export default function StockList() {
  const stocks = [
    { name: "Bajaj Finery", price: 1839, change: 10 },
    { name: "TTML", price: 100, change: -10 },
    { name: "Reliance", price: 200, change: 10 },
    { name: "TTML", price: 189, change: -10 },
  ];
  return (
    <div className="stock-list-container">
      <h3>Popular Stocks</h3>
      <div className="stock-list-wrapper">
        <div className="tiny-chart">
          <div className="chartheader">
            <h3>{stocks[0].name}</h3>
            <p>Price : ${stocks[0].price} </p>
          </div>
          <TinyLineChart />
        </div>
        <table className="stock-table">
          <thead>
            <tr>
              <th className="stock_name">Name</th>
              <th>Price</th>
              <th>Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.name}>
                <td className="stock_name">{stock.name}</td>
                <td>{stock.price}</td>
                <td>{stock.change}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        view more
      </div>
    </div>
  );
}
