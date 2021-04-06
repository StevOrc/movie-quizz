import "./GameOver.css";
import React from "react";

const GameOver = ({ score, maxScore, onRetry }) => {
  const highscore = sessionStorage.getItem("highscore");
  if (!highscore) {
    sessionStorage.setItem("highscore", score);
  } else {
    if (score > highscore) sessionStorage.setItem("highscore", score);
  }
  return (
    <div className="game-over">
      <div className="welcome-page">
        <div className="ui vertical stripe segment">
          <div className="ui text container">
            <h3 className="ui header">Game over !</h3>
            <p>
              Le quiz est terminé, vous avez eu {score} bonne réponse sur{" "}
              {maxScore} possibles.
              {/* <h3>Bonne chance :)</h3> */}
            </p>
            <button
              to="/quiz"
              className="ui large green button"
              onClick={onRetry}
            >
              Retry !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
