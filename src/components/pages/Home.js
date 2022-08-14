import React from "react";
import Title from "../molecules/Title";
import MovieList from "../organisms/MovieList";
import SlideBanner from "../organisms/SlideBanner";

export const Home = () => {
  return (
    <>
      <SlideBanner />
      <div className="pw-1-p pw-2-d">
        <Title title="Tendencias Películas" />
        <MovieList category="movie" type="popular" />
        <Title title="Top de Peliculas" />
        <MovieList category="movie" type="top_rated" />
        <Title title="Tendencias en Tv" />
        <MovieList category="tv" type="popular" />
        <Title title="Top Series" />
        <MovieList category="tv" type="top_rated" />
      </div>
    </>
  );
};
