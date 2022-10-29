import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Productmain from "./components/ProductMain";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Usermain from "./components/usermain";
import CreateAd from "./components/CreateAd";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Productmain />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/usermain" element={<Usermain />}></Route>
          <Route path="/createad" element={<CreateAd />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
