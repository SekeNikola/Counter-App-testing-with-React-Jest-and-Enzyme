import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-render">The counter is currently </h1>
        <button data-test="increment-button" />
      </div>
    );
  }
}

export default App;
