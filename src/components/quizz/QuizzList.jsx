import "./QuizList.css";
import React, { Component } from "react";
import Score from "./../Score";
import QuizQuestion from "./Question";
import questionsList from "../../utils/questionlist";

class QuizList extends Component {
  state = { questions: questionsList };

  render() {
    console.log("AAAAAAAAAAAAA", this.state.questions);
    return (
      <div className="quiz-list">
        <div className="questions">
          <QuizQuestion />
        </div>
        <div className="score">
          <Score />
        </div>
      </div>
    );
  }
}

export default QuizList;
