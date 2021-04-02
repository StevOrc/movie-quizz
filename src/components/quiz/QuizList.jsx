import "./QuizList.css";
import React, { Component } from "react";
import Score from "../Score";
import { getQuestionList } from "../../utils/questionlist";
import QuestionCard from "./QuestionCard";

class QuizList extends Component {
  state = { questions: [], error: null };

  async componentDidMount() {
    try {
      const { data } = await getQuestionList();
      this.setState({ questions: data });
      console.log("DATA LISTE", this.state.questions);
    } catch (error) {
      this.setState({ error });
    }
  }

  renderQuestions = () => {
    if (!this.state.questions.length) return <div>Loading...</div>;
    else
      return this.state.questions.map((q) => {
        return <QuestionCard key={q.id} />;
      });
  };

  render() {
    return (
      <div className="quiz-list">
        <div className="questions">{this.renderQuestions()}</div>
        <div className="score">
          <Score />
        </div>
      </div>
    );
  }
}

export default QuizList;
