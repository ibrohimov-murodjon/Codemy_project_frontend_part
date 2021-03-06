import React from "react";
import { Link } from "react-router-dom";
import "./proglang.css";
const Plcomponent = ({ title, imguri, descibetion }) => {
  return (
    <div className="PL-card">
      <div className="PL-hexagon-box">
        <div className="PL-hexagon">
          <img src={imguri}  className="PL-icon" alt={title} />
        </div>
      </div>
      <h1 className="PL-card-title">{title}</h1>
      <span className="PL-card-about-text">{descibetion}</span>
      <br />

      <Link className="Pl-card-btn">
        Learn More
      </Link>
    </div>
  );
};

export default Plcomponent;
