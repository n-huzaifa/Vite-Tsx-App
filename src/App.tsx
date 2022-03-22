import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FetchData from "./component/Data/FetchData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <FetchData />
      </header>
    </div>
  );
}

export default App;
