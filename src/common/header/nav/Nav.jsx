import React from "react";
import { NavStyle } from "./style";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavStyle>
      <ul className="gnb">
        <li>
          <Link to="/hara">
            <img src="./images/hara_strok.png" alt="" className="view" />

            <div className="con">
              <img src="./images/hara_color.png" alt="" className="up" />
              <div className="wave"></div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/spa">SPA</Link>
        </li>
        <li>
          <Link to="/event">EVENT</Link>
        </li>
        <li>
          <Link to="/store">STORE</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;
