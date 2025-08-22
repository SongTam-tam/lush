import React from 'react';
import { MypageOrderStyle } from './style';
import { HiMiniChevronRight } from 'react-icons/hi2';

const MypageOrder = () => {
    return (
        <MypageOrderStyle>
            <h2>진행중인주문</h2>
            <p>
                전체주문조회
                <i>
                    <HiMiniChevronRight />
                </i>
            </p>
        </MypageOrderStyle>
    );
};

export default MypageOrder;
