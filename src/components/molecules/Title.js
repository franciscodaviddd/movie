import React from "react";
import { Link } from "react-router-dom";

const Title = ({ title }) => {
  return (
    <div className="section__title">
      <h2>{title}</h2>
      <Link to="/movie">Ver Más</Link>
    </div>
  );
};

export default Title;
