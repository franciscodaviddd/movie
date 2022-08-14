import React from "react";

import { useParams } from "react-router";
import background from "../../assets/footer-bg.jpg";
import CatalogCard from "../organisms/CatalogCard";

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <div
        className="page-header"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h2>{category}</h2>
      </div>

      <div className="mb-2-p pw-1-p pw-2-d">
        <CatalogCard category={category} />
      </div>
    </>
  );
};

export default Catalog;
