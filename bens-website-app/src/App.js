import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

//const [testText, setTestText] = useState([]);

const fetchData = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/test`);
    return response;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

// const renderData = () => {
//   return testText.map(((testTextItem) => {
//       <h3 className="App-title">{}</h3>;
//   }
//   )
// };

class App extends Component {
  render() {
    const { text } = fetchData();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">{text}</h3>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {text}
        </p>
      </div>
    );
  }
}

export default App;
