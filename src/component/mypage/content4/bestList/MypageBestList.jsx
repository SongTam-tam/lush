import React from 'react';
import { MypageBestListStyle } from './style';
import { useSelector } from 'react-redux';
import MypageBestItem from './MypageBestItem';

const MypageBestList = () => {
    const { best } = useSelector((state) => state.best);
    return (
        <MypageBestListStyle>
            {best.map((best) => (
                <MypageBestItem key={best.id} best={best} />
            ))}
        </MypageBestListStyle>
    );
};

export default MypageBestList;
