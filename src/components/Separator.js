import React from "react";
import "./Separator.css";

const Separator = ({ color = "#fff", background = "#fff" }) => {
  return (
    <div className="separator" style={{ backgroundColor: background }}>
      <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" fill={color}>
        <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,310"></polygon>
      </svg>
    </div>
  );
};

export default Separator;
