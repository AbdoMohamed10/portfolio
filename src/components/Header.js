import React from "react";

import "./Header.css";
import Separator from "./Separator";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="overlay row container">
          <h1>I'm Abdelrahman Mohamed</h1>
        </div>
        <Separator background="transparent" />
      </div>
    </div>
  );
};

export default Header;
