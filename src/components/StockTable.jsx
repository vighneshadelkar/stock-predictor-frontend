import React, { useState, useEffect } from "react";
import appl from "../data/applData";
import "../styles/StockTable.css";
import { Link, useParams } from "react-router-dom";

export default function StockTable() {
  const [timeSeries, setTimeSeries] = useState({}); // Initialized as an empty object
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${id}&apikey=YOUR_API_KEY`, // Replace YOUR_API_KEY with your actual API key
          {
            method: "GET",
            headers: {
              "User-Agent": "request",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        if (data["Time Series (Daily)"]) {
          setTimeSeries(data[0]["Time Series (Daily)"]);
        } else {
          throw new Error("No time series data found");
        }
      } catch (e) {
        console.error("There was an error fetching the stock data", e);
        setError(e.message);
      }
    };

    fetchData();
  }, [id]);

  //   console.log(appl[0]["Time Series (Daily)"]);

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
            {Object.entries(timeSeries)
              .slice(0, 15)
              .map(([date, data]) => (
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
          <Link to={`/stock/${id}/all_data`}>See more data...</Link>
        </table>
      )}
    </div>
  );
}
