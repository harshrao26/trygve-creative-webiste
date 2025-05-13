import React from "react";
import Home from "./Home";
import { Link, Route, Routes } from "react-router-dom";
import Thankyou from "./components/Thankyou";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<Thankyou />} />
    </Routes>
  );
};

export default Routing;
