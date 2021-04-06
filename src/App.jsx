import "./App.css";
import React, { Component } from "react";
// Routing
import { Router, Route, Switch } from "react-router-dom";

// Compnents
import Header from "./components/Header";
import Quiz from "./components/quiz/Quiz";
import MovieDetails from "./components/MovieDetail";

// History
import history from "./history";
import WelcomePage from "./components/WelcomePage";

class App extends Component {
  state = {};

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
              <Route path="/movie/:id" component={MovieDetails} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
