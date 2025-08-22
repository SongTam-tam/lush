import React from 'react';
import { MypageBestStyle } from './style';
import MypageBestList from './bestList/MypageBestList';

const MypageBest = () => {
    return (
        <MypageBestStyle>
            <h2>이번 주 인기 구매 TOP 4</h2>
            <MypageBestList />
        </MypageBestStyle>
    );
};

export default MypageBest;
