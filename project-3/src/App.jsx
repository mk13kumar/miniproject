import React from "react";
import "./App.css";
import Navigation from "./component/Navigation/Navigation";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./component/Navigation/About";
import Home from "./component/Navigation/Home";
// import {MyProvider} from "./MyContext"



function App() {
  return (
    <>
      {/* <MyProvider> */}
        <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            
            </Routes>
        </Router>
      {/* </MyProvider> */}
    </>
  );
}

export default App;
