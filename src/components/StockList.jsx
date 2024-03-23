import React, { useEffect, useState } from "react";
import "../styles/StockList.css";
import TinyLineChart from "./TinyLineChart";
import { useParams } from "react-router-dom";

export default function StockList() {
  const { id } = useParams();
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": '35646dbea5msh47cc576bae2f2c1p1c6c65jsn053d747717e2',
        "X-RapidAPI-Host": "trading-view.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://trading-view.p.rapidapi.com/market/get-movers?exchange=NSE&name=percent_change_gainers&locale=en`,
          options
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result && result.symbols) {
          setStocks(result.symbols);
        }
      } catch (error) {
        console.error("Failed to fetch stock data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="stock-list-container">
      <h3>POPULAR STOCKS :</h3>
      <div className="stock-list-wrapper">
        {stocks.length > 0 && (
          <div className="tiny-chart">
            <div className="chartheader">
              <h3>{stocks[0].s}</h3>
              <p>Change: {stocks[0].f[0]}%</p>
            </div>
            <TinyLineChart />
          </div>
        )}
        <table className="stock-table">
          <thead>
            <tr>
              <th className="stock_name">Name</th>
              <th>Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {stocks.slice(1, 5).map((stock, index) => (
              <tr key={index}>
                <td className="stock_name">{stock.s}</td>
                <td>{stock.f[0]}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="/view-more">View more</a>
      </div>
    </div>
  );
}
