import React, { useEffect, useState } from 'react';
import { LoginStyle } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';

const Login = () => {
    const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

    // console.log(link);

    const loginKakao = () => {
        const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${encodeURIComponent(
            REDIRECT_URI
        )}&response_type=code`;
        window.location.href = link;
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(REST_API_KEY, REDIRECT_URI);
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code');
        if (!code) return;

        const fetchToken = async () => {
            try {
                // 1️⃣ 토큰 요청
                const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                    },
                    body: new URLSearchParams({
                        grant_type: 'authorization_code',
                        client_id: REST_API_KEY,
                        redirect_uri: REDIRECT_URI,
                        code,
                    }),
                });

                const tokenData = await tokenRes.json();
                if (!tokenData.access_token) throw new Error('토큰 발급 실패');

                localStorage.setItem('kakao_access_token', tokenData.access_token);

                // 2️⃣ 사용자 정보 요청
                const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${tokenData.access_token}`,
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                    },
                });

                const userInfo = await userRes.json();
                dispatch(authActions.loginKakao(userInfo));
                navigate('/');
            } catch (err) {
                console.error('카카오 로그인 에러:', err);
            }
        };

        fetchToken();
    }, [dispatch, navigate, REST_API_KEY, REDIRECT_URI]);

    const [isHover, setIsHover] = useState(false);
    const [user, setUser] = useState({
        userid: '',
        password: '',
    });
    const { userid, password } = user;
    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!password.trim() || !userid.trim()) return;
        dispatch(authActions.login(user));
        const ok = !!localStorage.getItem('auth');
        if (ok) {
            navigate('/');
        } else {
            alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
        setUser({ userid: '', password: '' });
    };

    return (
        <LoginStyle>
            <div className="inner">
                <section className="left">
                    <h2>LOGIN</h2>
                    <div className="img">
                        <img src="/images/login/bg.png" alt="러쉬제품이미지"></img>
                    </div>
                </section>

                <section className="right">
                    <form onSubmit={onSubmit}>
                        <p>
                            <input
                                type="text"
                                name="userid"
                                placeholder="아이디"
                                value={userid}
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <input
                                type="password"
                                name="password"
                                placeholder="비밀번호"
                                value={password}
                                onChange={changeInput}
                            />
                        </p>
                        <p className="test">Test ID: abc / PW: lush123</p>
                        <p>
                            <input type="checkbox" name="rememberId" />
                            <label>아이디 저장</label>
                        </p>

                        <p>
                            <button className="loginBtn" type="submit">
                                로그인
                            </button>
                        </p>
                        <p>
                            <button className="kakaoBtn" onClick={loginKakao}>
                                <img src="/images/login/kakaologin.png" alt="카카오아이콘" />{' '}
                                카카오로 로그인
                            </button>
                        </p>
                    </form>

                    <ul>
                        <li>
                            <a href="#">비회원 주문 조회</a>
                        </li>
                        <li>
                            <a href="#">아이디 찾기</a>
                        </li>
                        <li>
                            <a href="#">비밀번호 찾기</a>
                        </li>
                    </ul>

                    <Link
                        to="/join"
                        className={`on ${isHover ? 'hover' : ''}`}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <div className="join">
                            <strong>아직도 회원이 아니세요?</strong>
                            <span>공식몰에서만 제공하는 다양한 혜택을 경험하세요!</span>
                        </div>
                        <img
                            className="arrow"
                            src={
                                isHover
                                    ? '/images/login/arrow_hover.png'
                                    : '/images/login/arrow.png'
                            }
                            alt="회원가입이동"
                        />
                    </Link>

                    <div className="sns">
                        <p>SNS 계정으로 회원가입</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="/images/login/kakao.png" alt="kako" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/images/login/app.png" alt="apple" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/images/login/naver.png" alt="naver" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </LoginStyle>
    );
};

export default Login;
