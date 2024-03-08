import "./App.css";
import LineChart2 from "./components/LineChart2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

{
  /* <StyledEngineProvider injectFirst>
          <LineChart2 />
        </StyledEngineProvider> */
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404 Not Found</div>} /> s
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
