import styled from 'styled-components';

export const FreshStyle = styled.section`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .circle {
        width: 100%;
        height: 1750px;
        position: relative;
        display: flex;
        justify-content: center;
        background-color: transparent;
        align-items: center;
        /* background-color: #d9d9d9; */
        /* background-color: #333; */
        .size-circle {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            width: 280px;
            height: 280px;
            border-radius: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            .picbg {
                width: 100%;
                height: 100%;
                background-image: url(./images/about/img1.png);
                background-repeat: no-repeat;
                background-position: 0 0;
                background-size: cover;
                z-index: -1;
                min-height: 100vh;
                min-width: 100vw;
                padding-top: 159px;
                box-sizing: border-box;
            }
        }
    }

    h2 {
        color: rgba(173, 187, 115, 0.4);
        font-family: 'Lush Handwritten WLat Bold', sans-serif;
        font-size: 80px;
        font-weight: 700;
        line-height: normal;
        text-align: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 159px;
    }
    .textBox {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 340px;
        p {
            color: #000;
            text-align: center;
            font-size: 40px;
            font-weight: 400;
            line-height: 55px;
            span {
                color: #000;
                font-size: 40px;
                font-weight: 700;
                line-height: 55px;
            }
        }
    }
    .textBox2 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 574px;
        p {
            color: #000;

            text-align: center;

            font-size: 20px;

            font-weight: 400;
            line-height: 30px; /* 150% */
            white-space: pre-line;
        }
    }
`;

export const BarStyle = styled.ul`
    width: 100%;
    display: flex;
    gap: 140px;
    height: 100px;
    justify-content: center;
    align-items: center;
    border-bottom: 0.8px solid #cacaca;
    li {
        font-size: 20px;
        color: #353535;
        font-weight: 600;
        line-height: normal;
        width: 140px;
        cursor: pointer;
        &.on {
            color: #b6d72a;
        }
    }
`;
