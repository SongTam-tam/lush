import React, { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getKakaoLogin } from '../../store/modules/getThunk'; // ✅ 이 줄 추가
import { OuathStyle } from './style';

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
        <OuathStyle>
            <div className="inner">
                <h2>로그인 성공</h2>
            </div>
        </OuathStyle>
    );
};

export default Oauth;
