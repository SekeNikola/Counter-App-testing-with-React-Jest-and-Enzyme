import React, { Component, useState } from "react";
import "./App.css";

class App extends Component {
  state = { counter: 0 };
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-render">
          The counter is currently {this.state.counter}
        </h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          data-test="increment-button"
        >
          Click to increment
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
