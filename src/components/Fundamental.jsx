import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Fundamental() {
  const { id } = useParams();
  const [stockData, setstockData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": '35646dbea5msh47cc576bae2f2c1p1c6c65jsn053d747717e2',
        "X-RapidAPI-Host": "nse-market.p.rapidapi.com",
      },
    };
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://nse-market.p.rapidapi.com/stock_metrics?symbol=${id}`,
          options
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (result) {
          setstockData(result);
        }
      } catch (error) {}
    };
    fetchData();
  }, [id]);
  console.log(stockData);
  return (
    <div className="fundamnetal-container">
      <h3>FUNDAMENTALS :</h3>
      <div className="fundamental-wrapper">
        <table className="stock-table">
          <tbody>
          <tr>
              <td className="stock_name">Recommendation</td>
              <td >{stockData.recommendationKey}</td>
            </tr>
            <tr>
              <td className="stock_name">Market Cap</td>
              <td >{stockData.marketCap}</td>
            </tr>
            <tr>
              <td className="stock_name">Current Price</td>
              <td>{stockData.currentPrice}</td>
            </tr>
            <tr>
              <td className="stock_name">52 Week High</td>
              <td>{stockData.fiftyTwoWeekHigh}</td>
            </tr>
            <tr>
              <td className="stock_name">52 Week Low</td>
              <td>{stockData.fiftyTwoWeekLow}</td>
            </tr>
            <tr>
              <td className="stock_name">Forward EPS</td>
              <td>{stockData.forwardEps}</td>
            </tr>
            <tr>
              <td className="stock_name">Forward PE</td>
              <td>{stockData.forwardPE}</td>
            </tr>
            <tr>
              <td className="stock_name">Debt-to-Equity</td>
              <td>{stockData.debtToEquity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
