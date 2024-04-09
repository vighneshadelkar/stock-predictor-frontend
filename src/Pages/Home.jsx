import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [symbol, setSymbol] = useState("");
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);
  const [tenStock, setTenStock] = useState([]);
  const navigate = useNavigate();

  function handleInput(e) {
    setSymbol(e.target.value);
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
        setStocks([data]);

        setTenStock(
          data.filter((stock) => (stock.exchangeShortName === "NASDAQ" && stock.type === "stock"))
        );
      } catch (error) {
        setError(error.message);
      }
    };
    fetchAllStocks();
  }, []);
  console.log(tenStock)

  function appendSymbol(e) {
    e.preventDefault();
    if (symbol) {
      navigate(`/stocks/${symbol}`);
    }
  }

  function handleClick(stock) {
    const i=stock.symbol.split("").indexOf(".")
    const symbol=stock.symbol.slice(0,i);
    navigate(`/stocks/${symbol}`);
  }

  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col2">
          <div>
            <form onSubmit={appendSymbol} className="inputCol">
              <input
                type="text"
                name="stock-symbol"
                className="searchStock"
                value={symbol}
                onChange={handleInput}
                placeholder="Enter a symbol..."
              />
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>
          </div>
          {/* <div className="container">
            <div className="wrapper">
              {error && <div className="error">{error}</div>}
              <table className="stock-table">
                <thead  id="stock_header">
                  <tr>
                    <th className="stock_name">Symbol</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Exchange</th>
                  </tr>
                </thead>
                <tbody>
                  {tenStock.slice(0,15).map((stock, index) => (
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
