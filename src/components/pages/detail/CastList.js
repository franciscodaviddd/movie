import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import apiConfig from "../../../data/apiConfig";
import getApi from "../../../data/getApi";

const CastList = ({ id }) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await getApi.credits(category, id);
      setCasts(res.data.cast.slice(0, 5));
    };
    getCredits();
  }, [category, id]);
  return (
    <div className="casts">
      {casts.map((item, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.poster(item.profile_path)})`,
            }}
          >
            {item.profile_path === "" && "no hay video"}
          </div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
