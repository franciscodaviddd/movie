import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = ({ category, keyword }) => {
  const history = useNavigate();
  console.log(category, keyword);
  const [keyw, setKeyw] = useState(keyword ? keyword : "");

  // const goToSearch = useCallback(() => {
  //   if (keyword.trim().length > 0) {
  //     history.push(`/${category}/search/${keyw}`);
  //   }
  // }, [keyw, category, history]);

  // useEffect(() => {
  //   const enterEvent = (e) => {
  //     e.preventDefault();
  //     if (e.keyCode === 13) {
  //       goToSearch();
  //     }
  //   };
  //   document.addEventListener("keyup", enterEvent);
  //   return () => {
  //     document.removeEventListener("keyup", enterEvent);
  //   };
  // }, [keyword, goToSearch]);

  return (
    <div className="search">
      <div className="search__container">
        <input
          type="text"
          placeholder="Buscar..."
          value={keyword}
          onChange={(e) => setKeyw(e.target.value)}
          className="search__input"
        />
        <button
          className="search__button"
          // onClick={goToSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
