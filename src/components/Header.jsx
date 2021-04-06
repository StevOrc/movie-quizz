import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui inverted segment" style={{ borderRadius: 0 }}>
      <div className="ui inverted secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/quiz" className="item">
          Quizz
        </Link>
      </div>
    </div>
  );
};

export default Header;
