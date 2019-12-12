import React from "react";
import "./App.css";

import { ShootingStar } from "./components/ShootingStar";
import { QuoteGarden } from "./components/QuoteGarden";

function App() {
  return (
    <div className="App">
      <ShootingStar />
      <QuoteGarden />
    </div>
  );
}

export default App;
