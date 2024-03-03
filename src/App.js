import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Recent from "./Components/Recent";
import Footer from "./Components/Footer";
import Moreabout from "./Components/Moreabout";
import Projectview from "./Components/Projectview";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Recent />
              </>
            }
          />

          <Route
            path="/moreabout"
            element={
              <>
                <Moreabout />
              </>
            }
          />
          <Route
            path="/projectview"
            element={
              <>
                <Projectview />
              </>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
