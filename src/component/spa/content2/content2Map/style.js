import styled from 'styled-components';

export const MapStyle = styled.div`
    width: 100%;
    position: relative;
    .line {
        position: absolute;
        top: 731px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #848484;
        width: 1400px;
        height: 1px;
    }
    .MapBox {
        opacity: 0;
        h2 {
            position: absolute;

            top: 200px;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 60px;
            color: #fff;
            font-weight: 600;
            line-height: normal;
            text-align: center;
            transition: 0.5s;
            opacity: 0;
        }
        &.on {
            opacity: 1;
            h2 {
                transform: translate(-50%, -40px);
                opacity: 1;
            }
            p {
                transform: translate(-50%, -40px);
                opacity: 1;
            }
            .left {
                transform: translateY(-40px);
                opacity: 1;
            }
            .right {
                transform: translateY(-40px);
                opacity: 1;
            }
        }
        p {
            position: absolute;
            top: 307px;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 24px;
            font-weight: 500;
            line-height: 40px;
            color: #aaa;
            text-align: center;
            white-space: pre-line;
            transition: 0.5s 0.3s;
            opacity: 0;
        }
        .left {
            position: absolute;
            top: 452px;
            left: 421px;
            transform: translateY(0);
            transition: 0.5s 0.6s;
            opacity: 0;
        }
        .right {
            position: absolute;
            top: 452px;
            right: 421px;
            transform: translateY(0);
            transition: 0.5s 0.9s;
            opacity: 0;
        }
        .con {
            padding: 20px;
            width: 342px;
            height: 88px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
            justify-content: center;
            span {
                display: block;
                font-size: 24px;
                font-weight: 300;
                color: #dbdbdb;
                line-height: normal;
            }
            strong {
                display: block;
                font-size: 24px;
                font-weight: 500;
                color: #fff;
                line-height: normal;
            }
        }
    }
    .btns {
        display: flex;
        gap: 162px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 721px;
        z-index: 5;
        .cocon {
            align-items: center;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            width: 183px;
            span {
                border-radius: 100%;
                width: 20px;
                height: 20px;
                background-color: #dbdbdb;
                display: block;
                cursor: pointer;
                margin-bottom: 25px;
            }
            strong {
                font-family: 'Lush Handwritten WLat Bold', sans-serif;
                color: #aaa;
                font-size: 24px;
                font-weight: 700;
                line-height: normal;
            }
            p {
                font-size: 20px;
                margin-top: 13px;
                font-weight: 500;
                line-height: normal;
                color: #aaa;
            }
            &.on {
                span {
                    background-color: #b6d72a;
                }
                strong {
                    color: #fff;
                }
                p {
                    color: #b6d72a;
                }
            }
        }
    }
`;
