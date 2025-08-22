import styled from 'styled-components';

export const MypageBestListStyle = styled.ul`
    width: 100%;
    display: flex;
    gap: 66.67px;
    margin-bottom: 250px;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        border-bottom: 1px solid var(--GrayScale-3, #aaa);
        background: #fff;
        padding-bottom: 40px;
        cursor: pointer;
        &:hover {
            border-bottom: 3px solid var(--GrayScale-3, #b6d72a);
        }
        .pic {
            width: 350px;
            height: 390px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 388px;
            }
        }
        strong {
            display: block;
            color: var(--GrayScale-0, #222);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        span {
            display: block;
            color: var(--GrayScale-0, #222);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
    }
`;
