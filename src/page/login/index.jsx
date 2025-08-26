import React, { useEffect, useState } from 'react';
import { LoginStyle } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';
// import Cookies from 'js-cookie';

const KAKAO_JAVASCRIPT_KEY = import.meta.env.VITE_KAKAO_JS_KEY;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI.replace(/\/$/, '');
const Login = () => {
    // console.log(link);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isHover, setIsHover] = useState(false);
    const [rememberId, setRememberId] = useState(false);
    const [user, setUser] = useState({
        userid: '',
        password: '',
    });
    const { userid, password } = user;

    useEffect(() => {
        const savedRemember = localStorage.getItem('rememberId') === 'true';
        const savedUserId = localStorage.getItem('rememberedUserId') || '';
        setRememberId(savedRemember);
        if (savedRemember && savedUserId) {
            setUser((prev) => ({ ...prev, userid: savedUserId }));
        }
    }, []);

    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
        if (name === 'userid' && rememberId) {
            localStorage.setItem('rememberedUserId', value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!password.trim() || !userid.trim()) return;
        dispatch(authActions.login(user));
        const ok = JSON.parse(localStorage.getItem('authed') || 'false');
        if (ok) {
            localStorage.setItem('rememberId', String(rememberId));
            if (rememberId) {
                localStorage.setItem('rememberedUserId', userid);
            } else {
                localStorage.removeItem('rememberedUserId');
            }
            navigate('/');
        } else {
            alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
        setUser({ userid: rememberId ? userid : '', password: '' });
    };
    // const clearKakaoSession = () => {
    //     // 1. 모든 쿠키 삭제
    //     Object.keys(Cookies.get()).forEach((cookieName) => {
    //         Cookies.remove(cookieName);
    //         Cookies.remove(cookieName, { path: '/' });
    //     });

    //     // 2. 로컬 스토리지에서 카카오 관련 항목 삭제
    //     localStorage.removeItem('kakaoToken');
    //     localStorage.removeItem('token');

    //     // 3. 세션 스토리지 정리
    //     sessionStorage.removeItem('authorize-access-token');
    //     sessionStorage.removeItem('authorize-refresh-token');

    //     // 4. Kakao SDK 초기화 (SDK가 로드된 경우)
    //     if (window.Kakao && window.Kakao.Auth) {
    //         try {
    //             if (window.Kakao.Auth.getAccessToken()) {
    //                 window.Kakao.Auth.logout(() => {
    //                     console.log('카카오 SDK 로그아웃 완료');
    //                 });
    //             }
    //         } catch (e) {
    //             console.log('카카오 SDK 로그아웃 실패:', e);
    //         }
    //     }

    //     console.log('카카오 세션 정리 완료');
    // };
    // const onKakaoLogin = (e) => {
    //     e.preventDefault();
    //     // 기존 세션 정리
    //     // clearKakaoSession();

    //     // 잠시 지연 후 카카오 로그인 페이지로 리다이렉트
    //     setTimeout(() => {
    //         // URL 인코딩   적용
    //         const encodedRedirectUri = encodeURIComponent(KAKAO_REDIRECT_URI);

    //         const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_JAVASCRIPT_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

    //         console.log('kakaoAuthURL: ', kakaoAuthURL);
    //         console.log('KAKAO_REDIRECT_URI: ', KAKAO_REDIRECT_URI);
    //         console.log('인코딩된 URI: ', encodedRedirectUri);

    //         window.location.href = kakaoAuthURL;
    //     }, 500);
    // };
    const onKakaoLogin = (e) => {
        e.preventDefault();

        const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_JAVASCRIPT_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

        console.log('kakaoAuthURL: ', kakaoAuthURL);

        window.location.href = kakaoAuthURL;
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
                        <p className="test">Test ID: lush / PW: lush123</p>
                        <p>
                            <input
                                type="checkbox"
                                id="rememberId"
                                name="rememberId"
                                checked={rememberId}
                                onChange={(e) => {
                                    const checked = e.target.checked;
                                    setRememberId(checked);
                                    localStorage.setItem('rememberId', String(checked));
                                    if (checked) {
                                        localStorage.setItem('rememberedUserId', user.userid || '');
                                    } else {
                                        localStorage.removeItem('rememberedUserId');
                                    }
                                }}
                            />
                            <label htmlFor="rememberId">아이디 저장</label>
                        </p>

                        <p>
                            <button className="loginBtn" type="submit">
                                로그인
                            </button>
                        </p>
                        <p>
                            <button className="kakaoBtn" type="button" onClick={onKakaoLogin}>
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
