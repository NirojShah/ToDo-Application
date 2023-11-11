import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./GlobalCss.css";
import Update from "./Components/Update/Update";
import Nav from "./Components/Nav/Nav";

const App = () => {
  return (
    <div id="mainApp">
      <div id="mainAppBox">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/home" element={<Home />}>
              <Route path="/home/update/:id" element={<Update />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
