import styled from 'styled-components';

export const NewStyle = styled.section`
    width: 100%;
    position: relative;
    box-sizing: border-box;

    h2 {
        font-size: 100px;
        font-family: 'Lush Handwritten WLat Bold', sans-serif;
        text-align: center;
        margin-bottom: 80px;
    }
    .cotnent {
    }
    .pabtn {
        position: absolute;
        top: 97px;
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
        }
    }
`;
