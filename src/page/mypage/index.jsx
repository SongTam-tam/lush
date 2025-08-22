import React from 'react';
import { MyPageStyle } from './style';
import MypageVisual from '../../component/mypage/visual/MypageVisual';
import MypageMain from '../../component/mypage/content1/MypageProfile';
import MypageProfile from '../../component/mypage/content1/MypageProfile';
import MypageOrder from '../../component/mypage/content2/MypageOrder';
import MypageStatus from '../../component/mypage/content3/MypageStatus';
import MypageBest from '../../component/mypage/content4/MypageBest';

const MyPage = () => {
    return (
        <MyPageStyle>
            <MypageVisual />
            <div className="inner">
                <MypageProfile />
                <MypageOrder />
                <MypageStatus />
                <MypageBest />
            </div>
        </MyPageStyle>
    );
};

export default MyPage;
