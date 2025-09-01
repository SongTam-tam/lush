import React from 'react';
import { PayCompleteStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/modules/CartSlice';

const PayComplete = () => {
    const { carts } = useSelector((state) => state.cart);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const onHome = () => {
        nav('/');
        dispatch(cartActions.Compl());
    };
    return (
        <PayCompleteStyle>
            <div className="inner">
                <h2>결제가 완료되었습니다</h2>
                <button onClick={onHome}>홈으로</button>
            </div>
        </PayCompleteStyle>
    );
};

export default PayComplete;
