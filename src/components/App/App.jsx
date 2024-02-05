import React from "react";
import axios from "axios";
import Feeling from "../feeling/Feeling";
import Understanding from "./Understanding/Understanding";
import Support from "./Support/Support";
import Comments from "./Comments/Comments";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Final from "./Final";
import Thankyou from "./Thankyou";

import "./App.css";
import StartFeedback from "./StartFeedback";
import { useSelector } from "react-redux";

function App() {
  const store = useSelector((store) => store);
  console.log(store);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        {/* Define routes for each component */}
        <Route path="/" component={StartFeedback} exact />
        <Route path="/feeling" component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
        <Route path="/review" component={Final} />
        <Route path="/thank" component={Thankyou} />
      </div>
    </Router>
  );
}

export default App;
