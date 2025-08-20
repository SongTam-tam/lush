import React, { useEffect, useState } from 'react';
import { HeaderStyle } from './style';
import Nav from './nav/Nav';
import HeaderForm from './form/HeaderForm';
import { LuUserRound, LuLogIn, LuLogOut } from 'react-icons/lu';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderForm2 from './form/HeaderForm2';

const Header = () => {
    const { authed, user } = useSelector((state) => state.auth);
    const [inpOn, setInpOn] = useState(true);
    const nav = useNavigate();

    return (
        <HeaderStyle>
            {inpOn ? (
                <HeaderForm2 setInpOn={setInpOn} />
            ) : (
                <div className="filter-bg" onClick={() => setInpOn(true)}>
                    <div className="input-bg" onClick={(e) => e.stopPropagation()}>
                        <i></i>
                        <HeaderForm />
                    </div>
                </div>
            )}

            <h1 className="logo" onClick={() => setInpOn(true)}>
                <Link to="/">
                    <img src="./images/LOGO.png" alt="" />
                </Link>
            </h1>
            <Nav />
            <div className="userIcon">
                {authed && (
                    <span className="user">{user?.name ?? '고객'}님, 당신의 순간을 응원해요!</span>
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
                        {authed ? (
                            <Link to="/logout" className="logouticon">
                                <LuLogOut />
                            </Link>
                        ) : (
                            <Link to="/login" className="loginicon">
                                <LuLogIn />
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </HeaderStyle>
    );
};

export default Header;
