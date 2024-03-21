import React, { useEffect, useState } from "react";
import appl from "../data/applData";
import { Link, useParams } from "react-router-dom";
import "../styles/StockDataPg.css";
import Sidebar from "../components/Sidebar";

export default function StockDataPg() {
  const [timeSeries, setTimeSeries] = useState({}); // Initialized as an empty object
  const [error, setError] = useState("");
  let { id } = useParams();
  console.log(id)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${id}&apikey=TK6YQDMFR1HDN1EE`
        );
        
        setTimeSeries(appl[0]["Time Series (Daily)"]);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const result = await response.json();
          if (result["Time Series (Daily)"]) {
            // Ensure the data exists
          }
          //  else {
          //     throw new Error("No time series data found");
          //   }
        }
      } catch (e) {
        console.error("There was an error fetching the stock data", e);
        setError(e.message);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <Sidebar />
          </div>
          <div className="col3">
            <div className="tableWrapper">
              {error && <p>{error}</p>}
              {!error && (
                <table className="stock-data-table">
                  <thead>
                    <tr>
                      <th className="stock-data-header">Date</th>
                      <th className="stock-data-header">Open</th>
                      <th className="stock-data-header">High</th>
                      <th className="stock-data-header">Low</th>
                      <th className="stock-data-header">Close</th>
                      <th className="stock-data-header">Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(timeSeries).map(([date, data]) => (
                      <tr key={date}>
                        <td className="stock-data-cell">{date}</td>
                        <td className="stock-data-cell">{data["1. open"]}</td>
                        <td className="stock-data-cell">{data["2. high"]}</td>
                        <td className="stock-data-cell">{data["3. low"]}</td>
                        <td className="stock-data-cell">{data["4. close"]}</td>
                        <td className="stock-data-cell">{data["5. volume"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
