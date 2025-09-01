import styled from 'styled-components';

export const BestSellerStyle = styled.section`
    width: 100%;
    overflow: hidden;
    position: relative;
    .inner {
        padding: 200px 0;
        height: 1363px;
        h2 {
            font-family: 'Lush Handwritten WLat Bold', sans-serif;
            font-size: 100px;
            /* font-weight: 700; */
            color: #000;
            text-align: center;
            margin-bottom: 80px;
        }
    }
    .right {
        display: flex;
    }
    .left {
        display: flex;
    }
    .content1 {
        position: absolute;
        left: 0;
        top: 423px;
    }
    .pabtn {
        position: absolute;
        top: 291px;
        right: 0;
        display: flex;
        align-items: center;
        i {
            font-size: 20px;
            /* margin-top: 7px; */
            cursor: pointer;
            width: 20px;
            height: 20px;
            margin-bottom: 5px;
        }
        button {
            width: 58px;
            height: 24px;
            text-align: center;
            color: var(--Main-DarkGray, #353535);
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            display: block;
            background-color: transparent;
            white-space: nowrap;
            border-bottom: 1px solid #000;
            display: flex;
            justify-content: center;
            align-items: start;
            margin-left: 42px;
            &:hover {
                color: #b6d72a;
                border-color: #b6d72a;
            }
        }
    }
`;
