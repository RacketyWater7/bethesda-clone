import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchAppBar from "./components/Home/SearchAppBar";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<h1>About</h1>} /> */}
        {/* <Route path="/contact" element={<h1>Contact</h1>} /> */}
      </Routes>
    </React.Fragment>
  );
};

export default App;
