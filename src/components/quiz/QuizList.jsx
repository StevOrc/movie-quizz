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
    score: 0,
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

  checkAnswer = (answer) => {};

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
            <div className="score">
              <Score />
            </div>
          </div>
        )}

        {!this.state.gameOver &&
        !this.state.loading &&
        this.state.number !== this.state.questions.length - 1 ? (
          <button onClick={() => this.nextQuestion()}>Next Question</button>
        ) : null}
      </React.Fragment>
    );
  }
}

export default QuizList;
