import React from 'react';
import { GoPencil } from 'react-icons/go';
import { HiOutlineTicket } from 'react-icons/hi';
import { BiCoin } from 'react-icons/bi';
import { MdRecycling } from 'react-icons/md';
import { PiCreditCard } from 'react-icons/pi';
import { MypageProfileStyle } from './style';
import { useSelector } from 'react-redux';
import { HiMiniChevronRight } from 'react-icons/hi2';
const MypageProfile = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <MypageProfileStyle>
            <div className="profile">
                <img src="./images/mypage/profile.png" alt="" />
                <i>
                    <GoPencil />
                </i>
            </div>
            <div className="profile_name">
                {/* <p>{user.name} 님</p> */}
                <p>{user.name} 님</p>
                <span>회원정보변경</span>
            </div>
            <div className="service">
                <ul>
                    <li>
                        <i>
                            <HiOutlineTicket />
                        </i>
                        <span>혜택 0</span>
                    </li>
                    <li>
                        <i>
                            <BiCoin />
                        </i>
                        <span>파워 0</span>
                    </li>
                    <li>
                        <i>
                            <MdRecycling />
                        </i>
                        <span>BIB 0</span>
                    </li>
                </ul>
            </div>
            <div className="gift">
                <i>
                    <PiCreditCard />
                </i>
                <p>나의 러쉬 기프트 카드</p>
                <span>잔액 충전하기</span>
                <i>
                    <HiMiniChevronRight />
                </i>
            </div>
        </MypageProfileStyle>
    );
};

export default MypageProfile;
