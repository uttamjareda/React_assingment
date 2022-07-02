import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import DogsBody from "./components/DogsBody";

export default class App extends Component {
  
  render() {
    return( 
    <div>
      <NavBar/>
      <div>
        <DogsBody/>
      </div>
    </div>
    )
  }
}
