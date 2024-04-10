import React, { useState, useEffect, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

import "../styles/Home.css";

const debounceTime = 300; // Debounce time in milliseconds

export default function AllStocks() {
  const [symbol, setSymbol] = useState("");
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage] = useState(30); // Number of stocks per page
  const navigate = useNavigate();

  const filteredStocks = useMemo(() => {
    return stocks
      .filter((stock) =>
        stock.name && stock.name.toLowerCase().includes(symbol.toLowerCase())
      )
      .slice((currentPage - 1) * stocksPerPage, currentPage * stocksPerPage);
  }, [stocks, symbol, currentPage, stocksPerPage]);
  

  const fetchAllStocks = async () => {
    try {
      const response = await fetch(
        "https://financialmodelingprep.com/api/v3/stock/list?apikey=uZI7z0nUAKSlnrxSzz03w88oFYIOkzWG"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStocks(
        data.filter(
          (stock) =>
            stock.exchangeShortName === "NASDAQ" && stock.type === "stock"
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchAllStocks();
  }, []);

  // Debounce input handling
  const handleInputDebounced = debounce((value) => {
    setSymbol(value);
  }, debounceTime);

  // Handle input change
  const handleInput = (e) => {
    const { value } = e.target;
    handleInputDebounced(value);
  };

  const handleClick = (stock) => {
    navigate(`/stocks/${stock.symbol}`);
  };

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
                  {filteredStocks.map((stock, index) => (
                    <tr
                      key={index}
                      onClick={() => handleClick(stock)}
                      className="stock_list"
                    >
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
