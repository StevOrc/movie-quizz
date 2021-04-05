import "./QuizList.css";
import React, { Component } from "react";
import Score from "../Score";
import { getQuestionList } from "../../utils/questionlist";
import QuestionCard from "./QuestionCard";

class QuizList extends Component {
  state = {
    questions: [],
    error: null,
    loading: true,
    error: null,
    number: 0,
    gameOver: false,
    currentScore: 0,
    isGoodAnser: false,
  };

  async componentDidMount() {
    try {
      if (!this.state.questions.length) {
        const { data } = await getQuestionList();
        this.setState({ questions: data, loading: false });
      }
    } catch (error) {
      this.setState({ error });
    }
  }

  checkAnswer = (answer) => {
    const numAnswer = Object.keys(answer)[0];
    if (this.state.questions[this.state.number].goodAnswer == numAnswer) {
      this.setState({
        isGoodAnser: true,
        currentScore: this.state.currentScore + 1,
      });
    }
  };

  renderQuestions = () => {
    if (!this.state.questions.length) return <div>Loading...</div>;
    else
      return this.state.questions.map((q) => {
        return (
          <QuestionCard
            key={q.id}
            question={q}
            onClickAnswer={this.checkAnswer}
          />
        );
      });
  };

  nextQuestion = () => {
    const nextQuestion = this.state.number + 1;
    if (nextQuestion === this.state.questions.length) {
      this.setState({ gameOver: true });
    } else {
      this.setState({ number: nextQuestion });
    }
  };

  render() {
    console.log("RENDER RENDER", this.state);
    return (
      <React.Fragment>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div className="quiz-list">
            <div className="questions">
              <h1>Quiz App</h1>
              <QuestionCard
                question={this.state.questions[this.state.number]}
                onClickAnswer={this.checkAnswer}
                numQuestion={this.state.number + 1}
              />
            </div>
            <Score
              scoreMax={this.state.questions.length}
              currentScore={this.state.currentScore}
              isGoodAnswer={this.state.isGoodAnser}
            />
          </div>
        )}
        {!this.state.gameOver &&
        !this.state.loading &&
        this.state.number !== this.state.questions.length - 1 ? (
          <button
            className="ui green button"
            onClick={() => this.nextQuestion()}
            style={{ marginTop: "10px", textAlign: "center" }}
          >
            Suivante
          </button>
        ) : null}
      </React.Fragment>
    );
  }
}

export default QuizList;
