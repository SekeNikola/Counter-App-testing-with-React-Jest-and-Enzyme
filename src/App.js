import React, { Component, useState } from "react";
import "./App.css";

class App extends Component {
  state = { counter: 0, error: false };

  decrementCounter = () => {
    if (this.state.counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  incrementCounter = () => {
    if (this.state.error) {
      this.setState({ error: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const errorClass = this.state.error ? "" : "hidden";

    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-render">
          The counter is currently {this.state.counter}
        </h1>
        <div data-test="error-message" className={`error ${errorClass}`}>
          The counter cannot go below 0
        </div>
        <button onClick={this.incrementCounter} data-test="increment-button">
          Click to increment
        </button>
        <button onClick={this.decrementCounter} data-test="decrement-button">
          Click to decrement
        </button>
      </div>
    );
  }
}

//* Waiting for Enzyme to Support useState Hook
//   const App = () => {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div className="App" data-test="component-app">
//       <h1 data-test="counter-render">The counter is currently {counter}</h1>
//       <button
//         onClick={() => setCounter(counter => counter + 1)}
//         data-test="increment-button"
//       >
//         Click to increment
//       </button>
//     </div>
//   );
// };
export default App;
