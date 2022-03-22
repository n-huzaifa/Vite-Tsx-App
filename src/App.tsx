import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MediaCard from "./component/mediacard/MediaCard";
import Gate from "./component/gate/Gate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <MediaCard
          title='Hello'
          body='lorem'
          imageURL='https://yt3.ggpht.com/MAXXADAVlfiwfI_sZAqPbib42-Q3b-oB9tufoRDofxmZMnY9xuDR03RhOMNBa6HDLa4awG76e-U=s48-c-k-c0x00ffffff-no-rj'
        />
        <Gate />
      </header>
    </div>
  );
}

export default App;
