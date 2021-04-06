import "./QuestionYesNo.css";
import React, { useEffect, useState } from "react";
import apiMovie from "../../api/movieApi";
import ImageActor from "./ImageActor";

const QuestionYesNo = ({ question, onClickAnswer, numQuestion }) => {
  const [imgUrl, setImgurl] = useState("");
  const [isLoadedMovieImg, setIsLoadedMovieImg] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [indexAnswer, setIndexAnswer] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    console.log("AAAAAAAAAAAAAAAAAA actorname", question.actorName);
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

  // Handle on click true false
  const onTrueOrFalse = (answer) => {
    onClickAnswer(answer);
    setAnswered(true);
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
          <ImageActor actor={question.actorName} />
          <div className="button-container">
            <div className="ui buttons">
              <button
                className="ui positive button"
                onClick={() => onTrueOrFalse(question.answers[0])}
              >
                Vrai
              </button>
              <div className="or" data-text="ou"></div>
              <button
                className="ui red button"
                onClick={() => onTrueOrFalse(question.answers[1])}
              >
                Faux
              </button>
            </div>
          </div>
          <div className="image-actor-container"></div>
        </div>
      ) : (
        <div>Loading images...</div>
      )}
    </React.Fragment>
  );
};

export default QuestionYesNo;
