import React, { useEffect } from 'react';
import { OauthStyle } from './style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getKakaoLogin } from '../../store/modules/getThunk'; // ✅ 이 줄 추가

const Oauth = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (code) {
            dispatch(getKakaoLogin(code))
                .unwrap()
                .then(() => navigate('/'))
                .catch((err) => alert(err));
        }
    }, [code, dispatch, navigate]);

    return (
        <OauthStyle>
            <div className="inner">
                <h2>로그인 성공</h2>
            </div>
        </OauthStyle>
    );
};

export default Oauth;
