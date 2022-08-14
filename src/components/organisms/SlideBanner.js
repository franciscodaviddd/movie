import React, { useState, useEffect } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import getApi from "../../data/getApi";
import Modal from "../molecules/Modal";
import SlideItem from "./SlideItem";

const SlideBanner = () => {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);
  const [actModal, setActModal] = useState(false);
  const [videoTrailer, setVideoTrailer] = useState("");

  const modalActive = async (l, id) => {
    setActModal(!actModal);
    if (l && id) {
      const videos = await getApi.getVideos("movie", id);
      setVideoTrailer(videos.data.results[0]);
    }
  };

  useEffect(() => {
    const getMovies = async () => {
      const element = [];
      const params = { page: 1 };
      try {
        const response = await getApi.movie("popular", { params });

        for (let index = 0; index < 4; index++) {
          let chosen = Math.floor(Math.random() * response.data.results.length);
          element[index] = response.data.results[chosen];
        }

        setMovieItems(element);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <div className="banner__slide">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          {movieItems.map((movie, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <SlideItem
                  movie={movie}
                  act={`${isActive ? "active" : ""}`}
                  modalActive={modalActive}
                  i={i}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <Modal
          actModal={actModal}
          videoTrailer={videoTrailer}
          modalActive={modalActive}
        />
      </div>
    </>
  );
};

export default SlideBanner;
