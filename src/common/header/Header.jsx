import React from "react";
import { HeaderStyle } from "./style";
import Nav from "./nav/Nav";
import HeaderForm from "./form/HeaderForm";
<<<<<<< HEAD
import { LuUserRound, LuLogIn } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
=======
import { LuUserRound, LuLogIn, LuLogOut } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { authed, user } = useSelector((state) => state.auth);

>>>>>>> dd1d993 (“추가”)
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
<<<<<<< HEAD
          {true && (
            <span className="user">xxx 님, 당신의 순간을 응원해요.</span>
          )}
=======
          {authed && (
            <span className="user">
              {user?.name ?? "고객"}님, 당신의 순간을 응원해요!
            </span>
          )}

>>>>>>> dd1d993 (“추가”)
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
<<<<<<< HEAD
              <i>
                <LuLogIn />
              </i>
=======
              {authed ? (
                <Link to="/logout" className="logouticon">
                  <LuLogOut />
                </Link>
              ) : (
                <Link to="/login" className="loginicon">
                  <LuLogIn />
                </Link>
              )}
>>>>>>> dd1d993 (“추가”)
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
