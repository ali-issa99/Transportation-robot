import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ReactNippleExample from "./ReactNippleExample";

class App extends Component {
  render() {
    return (

      
      <div className="App">
        
        

          <ReactNippleExample
            title="Static 1"
            width={250}
            height={250}
            options={{
              mode: "static",
              color: "green",
              position: { top: "50%", left: "50%" }
            }}
          />
         
        </div>
     
    );
  }
}

export default App;
