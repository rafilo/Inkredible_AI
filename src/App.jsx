import { useState } from "react";
import { Router, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./home.jsx"

function App() {
  return (
    <Router>
        <Route path="/" element={<Home />} />
    </Router>
  );
}

export default App;
