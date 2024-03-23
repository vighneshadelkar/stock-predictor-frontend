import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
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
            <form onSubmit={appendSymbol} className="inputCol">
              <input
                type="text"
                name="stock-symbol"
                className="searchStock"
                value={symbol}
                onChange={handleInput}
                placeholder="Enter a symbol..."
              />
              <button type="submit" className="search-btn">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
