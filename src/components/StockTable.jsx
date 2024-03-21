import React, { useState, useEffect } from "react";
import appl from "../data/applData";
import "../styles/StockTable.css";

export default function StockTable() {
  const [timeSeries, setTimeSeries] = useState({}); // Initialized as an empty object
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=YOUR_API_KEY"
        );

        setTimeSeries(appl[0]["Time Series (Daily)"]);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const result = await response.json();
          if (result["Time Series (Daily)"]) {
            // Ensure the data exists
          }
          //   } else {
          //     throw new Error('No time series data found');
          //   }
        }
      } catch (e) {
        console.error("There was an error fetching the stock data", e);
        setError(e.message);
      }
    };

    fetchData();
  }, []);

  console.log(appl[0]["Time Series (Daily)"]);

  return (
    <div>
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
  );
}
