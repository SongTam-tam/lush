<<<<<<< HEAD
import React from 'react';
import { LogoutStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { authed, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(authActions.logout());

        navigate('/');
    };

    return (
        <LogoutStyle>
            <div className="inner">
                {authed ? (
                    <>
                        <img src="/images/login/bg.png" alt="러쉬 제품 이미지" />
                        <h3>
                            <span>{user?.name ?? '고객'}</span>님<br />
                            이용해주셔서 감사합니다.
                        </h3>

                        <button type="button" onClick={handleLogout}>
                            홈으로 이동
                        </button>
                    </>
                ) : (
                    <h2 className="info">로그인 정보를 찾을 수 없습니다.</h2>
                )}
            </div>
        </LogoutStyle>
    );
=======
import React from "react";
import { LogoutStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/modules/authSlice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { authed, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());

    navigate("/");
  };

  return (
    <LogoutStyle>
      <div className="inner">
        {authed ? (
          <>
            <img src="/images/login/bg.png" alt="러쉬 제품 이미지" />
            <h3>
              <span>{user?.name ?? "고객"}</span>님<br />
              이용해주셔서 감사합니다.
            </h3>

            <button type="button" onClick={handleLogout}>
              홈으로 이동
            </button>
          </>
        ) : (
          <h2 className="info">로그인 정보를 찾을 수 없습니다.</h2>
        )}
      </div>
    </LogoutStyle>
  );
>>>>>>> 5f9e158d9aae61bbac892fe016fffd6a90d71ad7
};

export default Logout;
