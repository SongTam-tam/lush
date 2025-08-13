import React from "react";
import { HeaderStyle } from "./style";
import Nav from "./nav/Nav";
import HeaderForm from "./form/HeaderForm";
import { LuUserRound, LuLogIn } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="inner">
        <HeaderForm />
        <h1 className="logo">
          <Link to="/">
            <img src="./images/LOGO.png" alt="" />
          </Link>
        </h1>
        <Nav />
        <div className="userIcon">
          {true && (
            <span className="user">xxx 님, 당신의 순간을 응원해요.</span>
          )}
          <ul className="lcons">
            <li>
              <i>
                <LuUserRound />
              </i>
            </li>
            <li>
              <i>
                <HiOutlineShoppingBag />
              </i>
            </li>
            <li>
              <i>
                <LuLogIn />
              </i>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
