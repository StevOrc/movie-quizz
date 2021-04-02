import React, { Component } from "react";
// Routing
import { Router, Route, Switch } from "react-router-dom";

// Compnents
import Header from "./components/Header";
import QuizList from './components/quizz/QuizzList';
import MovieDetails from "./components/MovieDetail";

// History
import history from "./history";

// Servie Api
import apiMovie from './api/movieApi';

// Config file
import config from './config.json';

class App extends Component {
  state = {};

  async componentDidMount(){
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
              <Route path="/" exact component={QuizList} />
              <Route path="/movie/:id" component={MovieDetails} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
