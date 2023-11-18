import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import "./App.css";
import Dentists from "./components/Dentist/dentist.jsx";
function App() {
  document.title = "CareJar";
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dentists" element={<Dentists />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
