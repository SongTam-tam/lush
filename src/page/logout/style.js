import styled from 'styled-components';

export const LogoutStyle = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    .inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        width: 1600px;
        height: 480px;
        margin: 150px auto;
        position: relative;
        img {
            position: absolute;
            bottom: -260px;
            left: -80px;
            z-index: -1;
            width: 1860px;
        }
        h3 {
            font-size: 24px;
            line-height: 1.5;
            color: #848484;
            text-align: center;
            margin-top: -300px;
            span {
                font-size: 35px;
                color: #000000;
            }
        }
        button {
            background-color: #000000;
            color: #ffffff;
            width: 385px;
            height: 45px;
            font-size: 18px;
        }
        .info {
            color: #c00;
            font-size: 20px;
            margin-top: 24px;
        }
    }
`;
