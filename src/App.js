import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RomanRoy from "./pages/RomanRoy";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/roman-roy" element={<RomanRoy />} />
      </Routes>
    </Router>
  );
}

export default App;

