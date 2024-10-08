import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  decreaseCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  increaseCount() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback Value:", this.state.count);
      }
    );
  }

  render() {
    return (
      <>
        <button onClick={() => this.decreaseCount()}>Decrease Count</button>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.increaseCount()}>Increase Count</button>
      </>
    );
  }
}

export default Counter;
