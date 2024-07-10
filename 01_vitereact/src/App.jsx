import Chai from "./Components/Chai";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
function App() {
  const username = "Tushar@google.com"
  return (
    <div> 
      <h1>Learning from Chai aur React {username}</h1>
      <Greet/>
      <Chai/>
      <Welcome/>
    </div>
  )
}

// Function App or any other function can return only one HTML element.
// Inside the element there can be any number of elements
// <></> This is known as fragment. It acts as substitute of div, section, etc.
// If any new Component is made, it is recommended that the name of the file, function start's in capital letter.
// Vite, create-react-app, Parcel are bundlers used to import react library 

export default App;