import React, { Component } from 'react';
import './App.css';
import logo from "./spacex-logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img
          src={ logo }
          alt="SpaceX"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
      </div>
    );
  }
}

export default App;
