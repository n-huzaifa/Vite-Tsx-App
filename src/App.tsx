import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Room from "./component/room/Room";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <Room />
      </header>
    </div>
  );
}

export default App;
