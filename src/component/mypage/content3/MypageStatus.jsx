import React from 'react';
import { MypageStatusStyle } from './style';
import { HiMiniChevronRight } from 'react-icons/hi2';
const MypageStatus = () => {
    return (
        <MypageStatusStyle>
            <ul className="status_btn">
                <li>주문현황</li>
                <li>취소 / 교환 / 반품</li>
            </ul>
            <ul className="status_list">
                <li>
                    <p>
                        <strong>0</strong>
                        <span>주문접수</span>
                    </p>
                    <i>
                        <HiMiniChevronRight />
                    </i>
                </li>
                <li>
                    <p>
                        <strong>0</strong>
                        <span>결제완료</span>
                    </p>
                    <i>
                        <HiMiniChevronRight />
                    </i>
                </li>
                <li>
                    <p>
                        <strong>0</strong>
                        <span>배송준비중</span>
                    </p>
                    <i>
                        <HiMiniChevronRight />
                    </i>
                </li>
                <li>
                    <p>
                        <strong>0</strong>
                        <span>배송중</span>
                    </p>
                    <i>
                        <HiMiniChevronRight />
                    </i>
                </li>
                <li>
                    <p>
                        <strong>0</strong>
                        <span>배송완료</span>
                    </p>
                    <i>
                        <HiMiniChevronRight />
                    </i>
                </li>
            </ul>
        </MypageStatusStyle>
    );
};

export default MypageStatus;
