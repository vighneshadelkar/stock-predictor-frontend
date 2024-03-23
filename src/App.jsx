import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import News from "./Pages/News";
import StockDataPg from "./Pages/StockDataPg";
import ParticularStockPg from "./Pages/ParticularStockPg";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/stock/:id/all_data" element={<StockDataPg/>} />
          <Route path="/stock/:id" element={<ParticularStockPg/>} />
          <Route path="*" element={<div>404 Not Found</div>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
