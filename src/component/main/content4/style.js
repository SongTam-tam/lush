import styled from 'styled-components';

export const ProductStyle = styled.section`
    width: 100%;
    height: 4053px;
    position: relative;
    overflow: hidden;
    h2 {
        position: absolute;
        font-size: 100px;
        font-family: 'Lush Handwritten WLat Bold', sans-serif;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
    }
    .pabtn {
        position: absolute;
        top: 285px;
        right: 160px;
        display: flex;
        align-items: center;

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
