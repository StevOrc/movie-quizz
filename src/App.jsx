import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import QuizzList from "./components/quizz/QuizzList";
import history from "./history";
import MovieDetails from "./components/MovieDetail";

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
              <Route path="/" exact component={QuizzList} />
              <Route path="/movie/:id" component={MovieDetails} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
