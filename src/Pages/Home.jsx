import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [symbol, setSymbol] = useState("");  // Initialize symbol to an empty string
  const navigate = useNavigate();

  function handleInput(e) {
    setSymbol(e.target.value);  // Directly set symbol to the new value
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
        <div className="col3">
          <form onSubmit={appendSymbol}>
            <input
              type="text"
              name="stock-symbol"
              id=""
              value={symbol}
              onChange={handleInput}
              placeholder="Enter a symbol..."
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}
