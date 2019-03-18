import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // const [counter, setCounter] = useState(0)

  state = { counter: 0 };
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
