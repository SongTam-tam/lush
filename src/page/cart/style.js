import styled from 'styled-components';

export const CartInnerStyle = styled.div`
    /* padding: 220px 0; */
    width: 100%;
    height: 1000px;
    position: relative;
    .bg {
        height: 500px;
        width: 100%;
        background-image: url(/images/login/bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    h2 {
        position: absolute;
        top: 220px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        font-size: 50px;
        margin-bottom: 50px;
        font-weight: 700;
    }
    button {
        position: absolute;
        top: 350px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 150px;
        background: #000;
        width: 320px;
        height: 50px;
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;

        p {
            text-align: center;
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            display: inline-block;
        }
    }
`;
