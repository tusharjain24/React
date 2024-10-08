import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <>
        <h1>
          Welcome {this.props.name} a.k.a {this.props.heroName}
        </h1>
        <p>
          {this.props.children}
          (using Class Component)
        </p>
      </>
    );
  }
}

export default Welcome;
