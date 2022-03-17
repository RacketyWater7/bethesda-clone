import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchAppBar from "./components/common/SearchAppBar";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <CssBaseline />
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<h1>About</h1>} /> */}
        {/* <Route path="/contact" element={<h1>Contact</h1>} /> */}
      </Routes>
    </div>
  );
};

export default App;
