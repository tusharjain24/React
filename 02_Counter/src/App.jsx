import './App.css'
import { useState } from 'react';

// UI updation is controlled by react and you cannot use DOM manipulation to do it. Therefore we use React Hooks to update the UI.
// src code link = https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js 

function App() {
  // let counter_value = 0;

  let [counter_value, setCounter] = useState(0)  // useState() returns an array whose first element is a counter, and the other element is a function which controls counter_value

  // Hooks will automatically parse through the entire DOM tree and update the value of counter wherever it is written

  
  const increaseValue = () => {
    if(counter_value <= 19)
      setCounter(counter_value + 1) 
    else{
      alert("Counter Value cannot be increased above 20")
  }
}
  
  const decreaseValue = () => {
    if(counter_value>=1)
      setCounter(counter_value - 1)
    else{
    alert("Counter Value cannot be decresed below 0")}
  }

  return (
    <>
      <h1>Tushar Jain</h1>
      <h2>Counter value: {counter_value}</h2>
      <button  onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
