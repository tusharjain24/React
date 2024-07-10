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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>
)
