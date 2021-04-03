import "./QuestionCard.css";
import React, { useEffect, useState } from "react";
import apiMovie from "../../api/movieApi";

const QuestionCard = ({ question, onClickAnswer, numQuestion }) => {
  const [imgUrl, setImgurl] = useState("");
  const [isLoadedMovieImg, setIsLoadedMovieImg] = useState(false);
  const [isActorImgLoaded, setIsActorImgLoaded] = useState(false);
  const [actorsImages, setActorsImages] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [indexAnwser, setIndexAnwser] = useState(0);

  // We use the hook useEffect to make a request to the moviedb API to get all information of the movie for the question
  useEffect(() => {
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

  useEffect(() => {
    const images = [];
    const fetchData = async (actor, numAnswer) => {
      const { data } = await apiMovie.get("/search/person", {
        params: {
          query: actor,
        },
      });
      const urlActor = `https://image.tmdb.org/t/p/w92/${data.results[0].profile_path}`;
      images.push(urlActor);
      if (numAnswer == question.answers.length) {
        setActorsImages(images);
        setIsActorImgLoaded(true);
      }
    };
    question.answers.forEach((answer) => {
      const numAnswer = Object.keys(answer)[0];
      const actorName = answer[numAnswer];
      fetchData(actorName, numAnswer);
    });
  }, [question]);

  const onImgClick = (anwser, numAnswer) => {
    console.log("AAAAAAAAAAAAAAAA", anwser);
    setIndexAnwser(anwser[numAnswer]);
    setIsDisabled(false);
  };

  // Map on the property 'reponses' of the question object
  const renderAnswer =
    !isLoadedMovieImg && !isActorImgLoaded
      ? null
      : question.answers.map((answer) => {
          const numAnswer = Object.keys(answer)[0];
          return (
            <React.Fragment key={numAnswer}>
              <div className="card">
                <div className="image">
                  <img
                    src={actorsImages[numAnswer - 1]}
                    onClick={() => onImgClick(answer, numAnswer)}
                    style={
                      indexAnwser == answer[numAnswer]
                        ? { backgroundColor: "red" }
                        : { backgroundColor: "#2d3436" }
                    }
                  />
                </div>
                <div className="extra">{answer[numAnswer]}</div>
              </div>
            </React.Fragment>
          );
        });

  return (
    <React.Fragment>
      {isLoadedMovieImg && isActorImgLoaded ? (
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
          <div className="image-actor-container"> {renderAnswer} </div>
          <button
            disabled={isDisabled}
            style={{ marginTop: "25px" }}
            className="positive ui button"
          >
            VALIDER
          </button>
        </div>
      ) : (
        <div>Loading images...</div>
      )}
    </React.Fragment>
  );
};

export default QuestionCard;
