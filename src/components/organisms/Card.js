import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../../data/apiConfig";

const Card = ({ category, item }) => {
  const link = "/" + category + "/" + item.id;

  const background = apiConfig.poster(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="play">
          <i className="bx bx-play"></i>
        </div>
      </div>
      <h3 className="movie-card__title">{item.title || item.name}</h3>
    </Link>
  );
};

export default Card;
