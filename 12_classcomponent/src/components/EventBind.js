// All the approaches are for binding this keyword

import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello, Welcome",
    };
    // this.changeMessage = this.changeMessage.bind(this); /*Approach 3 */
  }

  //   changeMessage() {
  //     this.setState(
  //       {
  //         message: "Goodbye",
  //       },
  //       () => {
  //         console.log(this);
  //       }
  //     );
  //   }

  //   Approach 4
  changeMessage = () => {
    this.setState(
      {
        message: "Goodbye",
      },
      () => {
        console.log(this);
      }
    );
  };

  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.changeMessage.bind(this)}>Click</button>   */}{" "}
        {/*Approach 1*/}
        {/* <button onClick={() => this.changeMessage()}>Click</button> */}{" "}
        {/*Approach 2*/}
        <button onClick={this.changeMessage}>Click</button>
      </>
    );
  }
}

export default EventBind;
