import "./QuestionCard.css";
import React, { useEffect, useState } from "react";
import apiMovie from "../../api/movieApi";
import ImageActor from "./ImageActor";

const QuestionCard = ({ question, onClickAnswer, numQuestion }) => {
  const [imgUrl, setImgurl] = useState("");
  const [isLoadedMovieImg, setIsLoadedMovieImg] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [indexAnswer, setIndexAnswer] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  // We use the hook useEffect to make a request to the moviedb API to get all information of the movie for the question
  useEffect(() => {
    setAnswered(false);
    setIsDisabled(true);
    setIndexAnswer(0);
    const fetcMovieByName = async (title) => {
      try {
        const { data } = await apiMovie.get("/search/movie", {
          params: {
            query: title,
          },
        });

        const url = `https://image.tmdb.org/t/p/w342/${data.results[0].backdrop_path}`;
        setImgurl(url);
        setIsLoadedMovieImg(true);
      } catch (error) {
        console.log("ERROR", error);
      }
    };

    if (question) {
      fetcMovieByName(question.title);
    }
  }, [question]);

  // Handle on image click
  const onImgClick = (answer, numAnswer) => {
    setIndexAnswer(answer[numAnswer]);
    setIsDisabled(false);
    setUserAnswer(answer);
  };

  // Handle validate answer
  const onButtonClick = () => {
    onClickAnswer(userAnswer);
    setAnswered(true);
  };

  const renderAnswer = !isLoadedMovieImg
    ? null
    : question.answers.map((answer) => {
        const numAnswer = Object.keys(answer)[0];
        return (
          <React.Fragment key={numAnswer}>
            <div className="card">
              <div
                className={`image-card ${
                  indexAnswer == answer[numAnswer] ? "selected" : ""
                }`}
                onClick={() => onImgClick(answer, numAnswer)}
              >
                <ImageActor actor={answer} />
              </div>
              <div className="extra">{answer[numAnswer]}</div>
            </div>
          </React.Fragment>
        );
      });

  const renderButton = () => {
    if (!question.isAnswered)
      return (
        <button
          disabled={answered || isDisabled}
          style={{ marginTop: "25px" }}
          className="positive ui button"
          onClick={onButtonClick}
        >
          VALIDER
        </button>
      );
  };

  return (
    <React.Fragment>
      {isLoadedMovieImg ? (
        <div className="question-card">
          <div className="ui centered card">
            <div className="image">
              <img src={imgUrl} alt="title" />
            </div>
            <div className="content">
              <div>{question.title}</div>
            </div>
          </div>
          <h2 className="header">
            {numQuestion}) {question.label}
          </h2>
          <div className="image-actor-container">{renderAnswer}</div>
          {renderButton()}
        </div>
      ) : (
        <div>Loading images...</div>
      )}
    </React.Fragment>
  );
};

export default QuestionCard;
