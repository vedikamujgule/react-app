import React from 'react';

function Hello(){
    const sayHello = () => {
        console.log("hello there!");
      }
      // const counter = 0; 
        
      return (
        <div className="App">
          <h1>Hello</h1>
          <button onClick={sayHello}>Hello</button>
        </div>
      );
}

export default Hello;