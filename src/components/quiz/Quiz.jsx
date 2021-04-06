import "./Quiz.css";
import React, { Component } from "react";
import Score from "../Score";
import { getQuestionList } from "../../utils/questionlist";
import QuestionCard from "./QuestionCard";
import QuestionYesNo from "./QuestionYesNo";
import GameOver from "./../GameOver";

class Quiz extends Component {
  state = {
    questions: [],
    error: null,
    loading: true,
    error: null,
    number: 0,
    isGameOver: true,
    currentScore: 0,
    isGoodAnser: false,
  };

  async componentDidMount() {
    setTimeout(() => {
      this.setState({ isGameOver: true });
    }, 1000 * 60);
    this.setState({
      isGameOver: false,
      currentScore: 0,
      isGoodAnser: false,
      number: 0,
    });
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
    this.state.questions[this.state.number].isAnswered = true;
    if (this.state.questions[this.state.number].goodAnswer == numAnswer) {
      this.setState({
        isGoodAnser: true,
        currentScore: this.state.currentScore + 1,
      });
    }
    this.nextQuestion();
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
      this.setState({ isGameOver: true });
    } else {
      this.setState({ number: nextQuestion });
    }
  };

  previousQuestion = () => {
    const previousQuestion = this.state.number - 1;
    this.setState({ number: previousQuestion });
  };

  renderQuesion = () => {
    return (
      <div className="quiz-list">
        <div className="questions">
          {this.state.questions[this.state.number].answers.length === 2 ? (
            <QuestionYesNo
              question={this.state.questions[this.state.number]}
              onClickAnswer={this.checkAnswer}
              numQuestion={this.state.number + 1}
            />
          ) : (
            <QuestionCard
              question={this.state.questions[this.state.number]}
              onClickAnswer={this.checkAnswer}
              numQuestion={this.state.number + 1}
            />
          )}
        </div>
        <Score
          scoreMax={this.state.questions.length}
          currentScore={this.state.currentScore}
          isGoodAnswer={this.state.isGoodAnser}
        />
      </div>
    );
  };

  handleOnRetry = () => {
    this.componentDidMount();
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : !this.state.isGameOver ? (
          this.renderQuesion()
        ) : (
          <GameOver
            score={this.state.currentScore}
            maxScore={this.state.questions.length}
            onRetry={this.handleOnRetry}
          />
        )}
        {!this.state.gameOver && !this.state.loading ? (
          <div className="btn-container">
            <button
              disabled={this.state.number === 0}
              onClick={this.previousQuestion}
              className="circular ui icon blue button"
            >
              <i className="angle left icon"></i>
            </button>
            <button
              disabled={this.state.number === this.state.questions.length - 1}
              className="circular ui icon blue button"
              onClick={this.nextQuestion}
            >
              <i className="angle right icon"></i>
            </button>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Quiz;
