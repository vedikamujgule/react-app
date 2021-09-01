
import React,{useState} from 'react';
import Hello from './sayHello';

function App() {  
  const [isRed,setRed]= useState(false);
  const [count, setCount] = useState(0);
  const
  const Increament = () =>{
    setCount(count+1);
    setRed(!isRed);
  }

  return (
    <div className="App">
      <button onClick={Increament}>Increament</button>
      <h1 className= {isRed ? "red" : ""}>{count}</h1>
          <Hello name="Vedika" message="Random message1"/>
          <Hello name="Aniket" message="Random message2"/>
          <Hello name="Ved" message="Random message3"/>
          <Hello name="Ani" message="Random message"/>
    </div>
  );
}

export default App;
