import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import apiConfig from "../../data/apiConfig";

const SlideItem = ({ movie, act, modalActive, i }) => {
  let navigate = useNavigate();
  const background = apiConfig.originalImage(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );
  const modal = async (e) => {
    const l = e.target.id;
    modalActive(l, movie.id);
  };

  return (
    <>
      <div
        className={`slide__item ${act}`}
        style={{ background: `url(${background})`, backgroundSize: "cover" }}
      >
        <div className="slide__item-content ">
          <div className="slide__item-text">
            <h2 className="title">{movie.title}</h2>
            <div className="overview">{movie.overview}</div>
            <div className="links">
              <Link to="/">Ver ahora</Link>
              <Link to="/" onClick={modal} id={`id-${i}`}>
                Ver trailer
              </Link>
            </div>
          </div>
          <div className="slide__item-poster">
            <img src={apiConfig.poster(movie.poster_path)} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideItem;
