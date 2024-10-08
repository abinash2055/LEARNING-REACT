import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

//   increment() {
    // this.setState(
    //     {
    //         count: this.state.count  + 1
    //     },
    //     () => {
    //         console.log('Callback value', this.state.count)
    //     }
    // )

  increment = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Callback value", this.state.count);
      }
    );
  };

  // Increment by 5
  incrementFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        {/* Passing a reference to the method instead of calling it */}
        <button onClick={this.incrementFive}>Increment</button>
      </div>
    );
  }
}

export default Counter;
