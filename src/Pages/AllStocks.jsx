import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

import "../styles/Home.css";

export default function AllStocks() {
  const [symbol, setSymbol] = useState("");
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);
  const [tenStock, setTenStock] = useState([]);
  const navigate = useNavigate();

  function handleInput(e) {
    setSymbol(e.target.value);
    const searchedStocks = stocks.filter((stock) =>
      stock.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTenStock(searchedStocks);
  }

  useEffect(() => {
    const fetchAllStocks = async () => {
      try {
        const response = await fetch(
          "https://financialmodelingprep.com/api/v3/stock/list?apikey=uZI7z0nUAKSlnrxSzz03w88oFYIOkzWG"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStocks(data.filter((stock) => stock.exchangeShortName === "NASDAQ" && stock.type === "stock"));

        setTenStock(
          data.filter((stock) => stock.exchangeShortName === "NASDAQ" && stock.type === "stock").slice(0,30)
        );
      } catch (error) {
        setError(error.message);
      }
    };
    fetchAllStocks();
  }, []);

  function handleClick(stock) {
    navigate(`/stocks/${stock.symbol}`);
  }

  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col2">
          <div>
            <form onSubmit={(e) => e.preventDefault()} className="inputCol">
              <input
                type="text"
                name="stock-symbol"
                className="searchStock"
                value={symbol}
                onChange={handleInput}
                placeholder="Enter a stock name..."
              />
            </form>
          </div>
          <div className="container">
            <div className="wrapper">
              {error && <div className="error">{error}</div>}
              <table className="stock-table">
                <thead id="stock_header">
                  <tr>
                    <th className="stock_name">Symbol</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Exchange</th>
                  </tr>
                </thead>
                <tbody>
                  {tenStock.map((stock, index) => (
                    <tr key={index} onClick={() => handleClick(stock)} className="stock_list">
                      <td className="stock_list">{stock.symbol}</td>
                      <td>{stock.name}</td>
                      <td>{stock.price}</td>
                      <td>{stock.exchange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
