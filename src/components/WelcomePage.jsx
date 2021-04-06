import "./WelcomePage.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  useEffect(() => {
    const onWindowUnload = () => {
      localStorage.clear();
    };
    window.addEventListener("beforeunload", onWindowUnload);

    return () => {
      window.removeEventListener("beforeunload", onWindowUnload);
    };
  }, []);

  return (
    <div className="welcome-page">
      <div className="ui vertical stripe segment">
        <div className="ui text container">
          <h3 className="ui header">Bienvenue dans le Ciné Quiz</h3>
          <p>
            Vous allez tester vos connaissances cinématographique à travers un
            quiz sur des classiques du cinéma. Vous devez choisir une réponse
            parmis les choix d'acteur proposés ou dire si un acteur à jouer dans
            le film. Chaque bonne réponse rapporte 1 point.
          </p>
          <h3>
            Vous avez 1 minute pour répondre à toutes les quesion, bonne chance
            :)
          </h3>
          <Link to="/quiz" className="ui large green button">
            Commencer !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
