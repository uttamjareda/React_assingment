
import React from "react";
import BodyFrame from "./Components/BodyFrame";
import NavBar from "./Components/NavBar";

// couldn't find a way to get response from search api tired many times

function App() {
  return (
    <div>
      <NavBar/>
      {/* you can change number of results per page using limit parameter */}
      <BodyFrame limit={8}/>
    </div>
  );
}

export default App;
