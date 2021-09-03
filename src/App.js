
import React, { useState } from 'react';
import AppClassBased from './AppClassBased';
import Hello from './sayHello';
import Name from './components/Names/Names.component';

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const Increament = () => {
    setCount(count + 1);
    setRed(!isRed);
  }
  const songs = ['Ae watan', 'Jai ho', 'Baspan ka pyar'];

  return (
    <div className="App">
      <button onClick={Increament}>Increament</button>
      <h1 className={isRed ? "red" : ""}>{count}</h1>
      <Hello name="Vedika" message="Random message1" />
      <Hello name="Aniket" message="Random message2" />
      <Hello name="Ved" message="Random message3" />
      <Hello name="Ani" message="Random message" />
      <AppClassBased name="Vedika" surname="N" songs=""></AppClassBased>

      <div>
        <p>songs list</p>
        <div>{
          songs.map(Element =>
            <li>{Element}</li>
          )
        }</div>
      </div>
    </div>
  );
}

export default App;
