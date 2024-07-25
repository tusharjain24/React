import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <UserContextProvider>
      <h1>React and Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
