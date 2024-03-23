import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"

export default function AllStocks() {
  const [symbol, setSymbol] = useState("");
  const navigate = useNavigate();

  function handleInput(e) {
    setSymbol(e.target.value);
  }

  function appendSymbol(e) {
    e.preventDefault();
    if (!symbol) {
      return;
    } else {
      navigate(`/stocks/${symbol}`);
    }
  }
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col2">
          <div>
            <form onSubmit={appendSymbol}  className="inputCol">
              <input
                type="text"
                name="stock-symbol"
                className="searchStock"
                value={symbol}
                onChange={handleInput}
                placeholder="Enter a symbol..."
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
