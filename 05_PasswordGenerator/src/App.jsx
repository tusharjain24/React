/* 
useCallback is a React Hook that lets you cache a function definition between re-renders.

Syntax: useCallback(fn, dependencies)

useCallback is a Hook in React that helps you optimize your components by memoizing callback functions. Memoization means that React will remember the function you created and only recreate it if one of its dependencies changes. This can help prevent unnecessary re-renders and improve performance.
*/

/* 
useEffect is a React Hook that lets you synchronize a component with an external system.

Syntax: useEffect(setup, dependencies?)

Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

What is useEffect?
useEffect is like a special tool that tells your box (component) to do something after it has been painted on the screen or when something inside it changes.

How to Use useEffect
When the Box Appears:

You can use useEffect to run some code when your box first appears on the screen. This is like saying, "Hey, when you see this box, do this thing."
When Something Changes Inside the Box:

You can also use useEffect to run code whenever something specific inside the box changes, like the count number in our counter example.
*/

/* 
useRef is a React Hook that lets you reference a value that’s not needed for rendering.
Syntax: const ref = useRef(initialValue)
*/

/*
 useState allows your component to remember things between renders. For example, in a counter component, you need to remember how many times a button has been clicked. Without state, the counter would reset every time the component re-renders.

Syntax: const [variableName, functionToSetVariableName] = useState(initialValue)
*/

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "1234567890";
    }

    if (characterAllowed) {
      str += "~!@#$%^&*[]{}-_+=`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={
              // console.log(event.target.innerText);
              copyPasswordToClipboard
            }
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={36}
              value={length}
              className="cursor-pointer"
              id="passwordLength"
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />
            <label htmlFor="passwordLength">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="toggleNumberAllowed"
              onClick={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="toggleNumberAllowed">Numbers </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="toggleCharacterAllowed"
              onClick={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="toggleCharacterAllowed">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
