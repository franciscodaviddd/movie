import React from "react";
import { Link } from "react-router-dom";

import background from "../../assets/footer-bg.jpg";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${background})` }}>
      <div className="footer__content ">
        <div className="footer__logo">
          <Link to="/">Movflix</Link>
        </div>
        <div className="footer__menus">
          <div className="footer__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
