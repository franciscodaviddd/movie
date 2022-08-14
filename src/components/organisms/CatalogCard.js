import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import getApi from "../../data/getApi";
import Card from "./Card";

const CatalogCard = ({ category }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [keyw, setKeyw] = useState("");
  const { keyword } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (category) {
          case "movie":
            response = await getApi.movie("upcoming", {
              params,
            });
            break;
          default:
            response = await getApi.tv("popular", { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await getApi.search(category, { params });
      }
      setItems(response.data.results);
      setTotalPage(response.data.total_pages);
    };
    getList();
  }, [category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      console.log("hola");
      switch (category) {
        case "movie":
          response = await getApi.movie("upcoming", {
            params,
          });
          break;
        default:
          response = await getApi.tv("popular", { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await getApi.search(category, { params });
      console.log(response);
    }
    setItems([...items, ...response.data.results]);
    setPage(page + 1);
  };
  const goToSearch = useCallback(() => {
    if (keyw.trim().length > 0) {
      navigate(`/${category}/search/${keyw}`);
    }
  }, [keyw, category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyw, goToSearch]);

  return (
    <>
      <div className="search">
        <div className="search__container">
          <input
            type="text"
            placeholder="Buscar..."
            value={keyw}
            onChange={(e) => setKeyw(e.target.value)}
            className="search__input"
          />
          <button className="search__button" onClick={goToSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <Card category={category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <button onClick={loadMore} className="small">
            Load more
          </button>
        </div>
      ) : null}
    </>
  );
};

export default CatalogCard;
