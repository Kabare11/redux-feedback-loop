import React from "react";
import axios from "axios";
import Feeling from "../feeling/Feeling";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          <Feeling />
        </Route>
      </Router>
    </div>
  );
}

export default App;
