import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import News from "./Pages/News";
import StockDataPg from "./Pages/StockDataPg";
import ParticularStockPg from "./Pages/ParticularStockPg";
import AllStocks from "./Pages/AllStocks";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/stocks/:id/all_data" element={<StockDataPg/>} />
          <Route path="/stocks/:id" element={<ParticularStockPg/>} />
          <Route path="/stocks" element={<AllStocks/>} />
          <Route path="*" element={<div>404 Not Found</div>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
