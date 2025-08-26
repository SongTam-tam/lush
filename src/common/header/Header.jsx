import React, { useEffect, useRef, useState } from 'react';
import { HeaderStyle } from './style';
import Nav from './nav/Nav';
import HeaderForm from './form/HeaderForm';
import { LuUserRound, LuLogIn, LuLogOut } from 'react-icons/lu';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link, Links, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderForm2 from './form/HeaderForm2';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {
    const { authed, user } = useSelector((state) => state.auth);
    const [inpOn, setInpOn] = useState(true);
    const searchRef = useRef();
    const nav = useNavigate();
    const location = useLocation();
    const onSearch = () => {
        setInpOn(false);
        setTimeout(() => {
            searchRef.current.focus();
        }, 200);
    };
    useEffect(() => {
        if (location.pathname === '/') {
            gsap.fromTo(
                '.header',
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    ease: 'ease-in',
                    duration: 1,
                    delay: 1.6,
                }
            );
        }
    }, [location.pathname]);
    return (
        <HeaderStyle className="header">
            {inpOn ? (
                <HeaderForm2 onSearch={onSearch} />
            ) : (
                <div className="filter-bg" onClick={() => setInpOn(true)}>
                    <div className="input-bg" onClick={(e) => e.stopPropagation()}>
                        <i></i>
                        <HeaderForm searchRef={searchRef} setInpOn={setInpOn} />
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
                        <Link to={authed ? '/mypage' : '/login'}>
                            <i>
                                <LuUserRound />
                            </i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <i>
                                <HiOutlineShoppingBag />
                            </i>
                        </Link>
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
