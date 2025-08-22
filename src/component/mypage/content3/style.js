import styled from 'styled-components';

export const MypageStatusStyle = styled.div`
    width: 100%;
    margin-top: 100px;
    height: 400px;
    border: 1px solid var(--GrayScale-1, #5b5b5b);
    background: #fff;
    .status_btn {
        width: 100%;
        display: flex;
        li {
            width: 50%;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid var(--GrayScale-1, #5b5b5b);
            color: var(--GrayScale-1, #5b5b5b);
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            &:first-child {
                border-right: 1px solid var(--GrayScale-1, #5b5b5b);
                background: var(--Main-DarkGray, #353535);
                color: #fff;
            }
        }
    }
    .status_list {
        margin-top: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 70px;
        li {
            display: flex;
            align-items: center;
            gap: 70px;
            p {
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: center;
                color: #000;
                font-size: 40px;
                font-style: normal;
                font-weight: 400;
                line-height: 60px; /* 150% */
                span {
                    color: var(--GrayScale-1, #5b5b5b);
                    text-align: center;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
            }
            i {
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
            }
        }
    }
`;
