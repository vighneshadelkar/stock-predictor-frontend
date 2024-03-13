import "./App.css";
import LineChart2 from "./components/LineChart2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import News from "./Pages/News";

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
          <Route path="/news" element={<News />} />
          <Route path="*" element={<div>404 Not Found</div>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
