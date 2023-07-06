import React from "react";
import Header from "./Components/Organisms/Header.js";
import TestText from "./Components/Atoms/text.js";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <TestText />
      </div>
    </Router>
  );
}

export default App;
