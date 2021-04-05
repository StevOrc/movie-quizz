import "./App.css";
import React, { Component } from "react";
// Routing
import { Router, Route, Switch } from "react-router-dom";

// Compnents
import Header from "./components/Header";
import QuizList from "./components/quiz/QuizList";
import MovieDetails from "./components/MovieDetail";

// History
import history from "./history";
import WelcomePage from "./components/WelcomePage";

class App extends Component {
  state = {};

  async componentDidMount() {}

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
              <Route path="/quiz" component={QuizList} />
              <Route path="/movie/:id" component={MovieDetails} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
