import React from "react";
import Header from "./Components/Organisms/Header.js";
import TestText from "./Components/Atoms/text.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TestText />
    </div>
  );
}

export default App;
