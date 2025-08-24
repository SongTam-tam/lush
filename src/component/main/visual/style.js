import styled from 'styled-components';

export const VisualContent = styled.section`
    width: 100%;
    height: 917px;
    background-repeat: no-repeat;
    background-image: url(./images/main/visual_bg.png);
    background-size: cover;
    background-position: 0 0;
    position: relative;
    overflow: hidden;
    .visual_bg {
        width: 4000px;
        /* height: 100%; */
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
            width: 100%;
        }
    }
    h2 {
        position: absolute;
        color: var(--Main-white, #fff);
        text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
        font-family: 'Lush Handwritten WLat Bold', sans-serif;
        font-size: 200px;
        font-style: normal;
        line-height: normal;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    .visualText {
        z-index: 50;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        gap: 30px;

        p {
            font-size: 40px;
            font-family: 'Lush Handwritten WLat Bold', sans-serif;
            color: rgba(255, 255, 255, 0.8);
            text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
            font-size: 120px;
            font-style: normal;
            line-height: normal;
        }
    }
`;
