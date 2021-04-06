import "./App.css";
import React, { Component } from "react";
// Routing
import { Router, Route, Switch } from "react-router-dom";

// Compnents
import Header from "./components/Header";
import Quiz from "./components/quiz/Quiz";

// History
import history from "./history";
import WelcomePage from "./components/WelcomePage";

class App extends Component {
  state = {};

  onWindowUnload = () => {
    localStorage.clear();
  };

  componentDidMount() {
    window.addEventListener("beforeunload", this.onWindowUnload);
  }

  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <div>
            <Header />
          </div>
          <div className="ui container" style={{ marginTop: "25px" }}>
            <Switch>
              <Route path="/" exact component={WelcomePage} />
              <Route path="/quiz" component={Quiz} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
