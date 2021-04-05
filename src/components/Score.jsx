import "./Score.css";
import React, { useEffect, useState } from "react";

const Score = ({ scoreMax, currentScore, isGoodAnswer }) => {
  const [renderPlusOne, setRenderPlusOne] = useState(false);

  useEffect(() => {
    if (isGoodAnswer && currentScore) {
      setRenderPlusOne(true);
      setTimeout(() => {
        setRenderPlusOne(false);
      }, 2000);
    }
  }, [isGoodAnswer, currentScore]);

  return (
    <div className="score-container">
      {!renderPlusOne ? null : (
        <div className="ui statistics">
          <div className="green statistic">
            <div className="value">+1</div>
          </div>
        </div>
      )}

      <div className="ui statistics">
        <div className="statistic">
          <div className="value">{currentScore} / </div>
        </div>
        <div className="statistic">
          <div className="value">{scoreMax} </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
