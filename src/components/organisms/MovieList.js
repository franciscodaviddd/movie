import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import getApi from "../../data/getApi";
import Card from "./Card";

const MovieList = ({ category, type, id = null }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (type !== "similar") {
        switch (category) {
          case "movie":
            response = await getApi.movie(type, { params });
            break;
          default:
            response = await getApi.tv(type, { params });
        }
      } else {
        response = await getApi.similar(category, id);
      }
      if (response !== null) {
        setItems(response.data.results);
      }
    };
    getList();
  }, []);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Card item={item} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
