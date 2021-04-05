import "./WelcomePage.css";
import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div class="ui vertical stripe segment">
        <div class="ui text container">
          <h3 class="ui header">Bienvenue dans le Ciné Quiz</h3>
          <p>
            Vous allez tester vos connaissances cinématographique à travers un
            quiz sur des classiques du cinéma. Vous devez choisir une réponse
            parmis les choix d'acteur proposés ou dire si un acteur à jouer dans
            le film. Chaque bonne réponse rapporte 1 point.
            <h3>Bonne chance :)</h3>
          </p>
          <Link to="/quiz" className="ui large green button">
            Commancer !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
