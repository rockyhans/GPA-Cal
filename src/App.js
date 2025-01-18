import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Instructions from "./components/Instructions";
import { Navigate } from 'react-router-dom';
import "./App.css";
import SgpaCal from "./components/SgpaCal";
import CgpaCal from "./components/CgpaCal";
import Home from "./components/Home";
import ReviewForm from "./components/ReviewForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/SgpaCal" element={<SgpaCal />} />
          <Route path="/CgpaCal" element={<CgpaCal />} />
          <Route path="/about" element={<ReviewForm />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirect to Home if route is unmatched */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
