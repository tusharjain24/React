import logo from "./logo.svg";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EventBind />
        <Counter />
        {/* <Message />
        <Greet name="Bruce" heroName="Batman">
          <button>Action</button>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <p>This is a children property of props</p>
        </Greet>
        <Greet name="Barry" heroName="Flash"></Greet>
        <Welcome name="Bruce" heroName="Batman">
          <button>Action</button>
        </Welcome>
        <Welcome name="Clark" heroName="Superman">
          <p>This is a children property of props in Class Component</p>
        </Welcome>
        <Welcome name="Barry" heroName="Flash" />
        <Hello /> */}
      </header>
    </div>
  );
}

export default App;
