import React from "react";
const Greet = (props) => {
  return (
    <>
      <h1>
        Hello {props.name} a.k.a {props.heroName},
      </h1>{" "}
      <div>{props.children} (using Functional Component)</div>
    </>
  );
};

export default Greet;
