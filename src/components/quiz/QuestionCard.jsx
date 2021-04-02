import "./QuestionCard.css";
import React, { useEffect, useState } from "react";
import apiMovie from "../../api/movieApi";

const QuestionCard = ({ question }) => {
  const [movie, setMovie] = useState(null);
  const [imgUrl, setImgurl] = useState("");

  // We use the hook useEffect to make a request to the moviedb API to get all information of the movie for the question
  // We only trigger the hook when the created and render
  useEffect(() => {
    const fetcMovieByName = async (title) => {
      try {
        const { data } = await apiMovie.get("/search/movie", {
          params: {
            query: title,
          },
        });

        const url = `https://image.tmdb.org/t/p/w500/${data.results[0].backdrop_path}`;

        // Set piece of state variables
        setMovie(data.results[0]);
        setImgurl(url);
      } catch (error) {
        console.log("ERROR", error);
      }
    };

    fetcMovieByName("Titanic");
  }, []);

  return (
    <React.Fragment>
      <div className="ui card question-card">
        <div className="image">
          <img src={`${imgUrl}`} alt="" />
        </div>
        <div className="content">
          <div className="header">Watchmen</div>
          <div className="description">
            In a gritty and alternate 1985 the glory days of costumed vigilantes
            have been brought to a close by a government crackdown, but after
            one of the masked veterans is brutally murdered an investigation
            into the killer is initiated.
          </div>
        </div>
        <div className="ui four bottom attached buttons">
          <div className="ui button img-container">
            <p>Brad Pitt</p>
            <img width="160" src={`${imgUrl}`} />
          </div>
          <div className="ui button img-container">
            <p>Brad Pitt</p>
            <img width="160" src={`${imgUrl}`} />
          </div>
          <div className="ui button img-container">
            <p>Brad Pitt</p>
            <img width="160" src={`${imgUrl}`} />
          </div>
          <div className="ui button img-container">
            <p>Brad Pitt</p>
            <img width="160" src={`${imgUrl}`} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuestionCard;
