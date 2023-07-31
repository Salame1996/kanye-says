import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RomanRoy from "./pages/RomanRoy";
import Home from "./pages/Home";
import KendallRoy from "./pages/KendallRoy";
import FrankOcean from "./pages/FrankOcean";
import LoganRoy from "./pages/LoganRoy";
import Tupac from "./pages/Tupac";
import ThomYorke from "./pages/Thom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/roman-roy" element={<RomanRoy />} />
        <Route path="/kendall-roy" element={<KendallRoy/>} />
        <Route path="/frank-ocean" element={<FrankOcean/>} />
        <Route path="/logan-roy" element={<LoganRoy/>} />
        <Route path="/tupac" element={<Tupac/>} />
        <Route path="/thom-yorke" element={<ThomYorke/>} />
      </Routes>
    </Router>
  );
}

export default App;

