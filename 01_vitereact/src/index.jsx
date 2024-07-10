import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return(
//     <><h1>My Custom Function in index.js</h1></>
//   )
// }

// const anotherElement = (
//   <h1>My custom qwertyuiop</h1>
// )


// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google.com",
// };

//  const reactElement = React.createElement('a',{href: "https://www.google.com", target: "_blank"}, "click me to visit google")

// To learn about reactElement function it's src code = https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>
)
