import React from 'react';
import './App.css';

function Hello({name,message}){
    const sayHello = () => {
        console.log("hello there!");
      }
      return (
        <div className="App">
          <div className="Tweet">
              <p>{name}</p>
              <p>{message}</p>
              <p>Number of likes</p>
          </div>
        </div>
      );
}

export default Hello;