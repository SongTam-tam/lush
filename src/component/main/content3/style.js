import styled from 'styled-components';

export const ReviewStyle = styled.section`
    width: 100%;
    background-image: url(./images/main/event_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    height: 800px;
    text-align: center;
    position: relative;
    h2 {
        /* margin-top: 164px; */
        img {
            margin-top: 164px;
        }
        text-align: center;
    }
    p {
        margin-top: 74px;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        white-space: pre-line;
        strong {
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            white-space: pre-line;
        }
    }
    a {
        width: auto;
        height: auto;
        button {
            all: unset;
            display: flex;
            align-items: center;
            justify-content: center;
            display: block;
            box-sizing: border-box;
            padding: 10px;
            width: 320px;
            height: 50px;
            background-color: rgba(255, 255, 255, 0.1);
            font-size: 18px;
            font-weight: 500;
            color: #fff;
            backdrop-filter: blur(3px);
            border: 0.5px solid #919191;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 586px;
            &:hover {
                background-color: rgba(182, 215, 42, 0.1);
                border: 0.5px solid #b6d72a;
                color: #b6d72a;
            }
        }
    }
`;
