
import React from "react";
import BodyFrame from "./Components/BodyFrame";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <BodyFrame limit={8}/>
    </div>
  );
}

export default App;
