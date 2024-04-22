import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AboutSection from "../src/Components/aboutSection/AboutSection";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<AboutSection />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
