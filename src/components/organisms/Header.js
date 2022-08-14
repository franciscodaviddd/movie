import React, { useRef } from "react";

import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  // useEffect(() => {
  //   const shrinkHeader = () => {
  //     if (
  //       document.body.scrollTop > 100 ||
  //       document.documentElement.scrollTop > 100
  //     ) {
  //       headerRef.current.classList.add("shrink");
  //     } else {
  //       headerRef.current.classList.remove("shrink");
  //     }
  //   };
  //   window.addEventListener("scroll", shrinkHeader);
  //   return () => {
  //     window.removeEventListener("scroll", shrinkHeader);
  //   };
  // }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrapper container jc-center-p jc-between-d ai-center-p pw-1-p pw-2-d">
        <Link to="/" className="header__logo">
          Movflix
        </Link>
        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/movie">Movie</Link>
          <Link to="/tv">Tv</Link>
        </nav>
      </div>
    </div>
  );
};
