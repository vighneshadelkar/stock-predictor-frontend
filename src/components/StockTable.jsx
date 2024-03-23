import React, { useState, useEffect } from "react";
import "../styles/StockTable.css";
import { Link, useParams } from "react-router-dom";

export default function StockTable() {
  const [timeSeries, setTimeSeries] = useState({});
  const [error, setError] = useState("");
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async (retryCount = 0) => {
      const API_KEY = process.env.RAPIDAPI_KEY;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(
          `https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=${id}&outputsize=compact&datatype=json`,
          options
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const result = await response.json();
          if (result["Time Series (Daily)"]) {
            setTimeSeries(result["Time Series (Daily)"]);
          } else {
            throw new Error("No time series data found");
          }
        }
      } catch (e) {
        console.error("There was an error fetching the stock data", e);
        if (retryCount < 2) {
          setTimeout(() => fetchData(retryCount + 1), 10000 * (retryCount + 1));
        } else {
          setError(e.message);
        }
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {error && <p>{error}</p>}
      {!error && (
        <>
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
                .map(([date, data], index) => (
                  <tr key={`${date}-${index}`}>
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
          <div className="link-container">
            <Link to={`/stock/${id}/all_data`}>See more data...</Link>
          </div>
        </>
      )}
    </div>
  );
}
