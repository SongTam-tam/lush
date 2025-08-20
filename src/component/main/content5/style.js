import styled from 'styled-components';

export const MainHaraStyle = styled.section`
    width: 100%;
    background-color: #000;
    height: 2318px;
    overflow: hidden;
    position: relative;
    .btnBox {
        cursor: pointer;
        z-index: 10;
        width: 208px;
        height: 40px;
        position: absolute;
        top: 1253px;
        left: 1000px;
        &:hover {
            &::after {
                background-color: #b6d72a;
            }
            &::before {
                background-color: #b6d72a;
            }
            .logo-on {
                opacity: 1;
            }
            .logo-off {
                opacity: 0;
            }
            p {
                color: #b6d72a;
            }
        }
        &::after {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: -5px;
            left: 0;
            background-color: #fff;
        }
        &::before {
            content: '';
            width: 20px;
            height: 1px;
            position: absolute;
            bottom: -5px;
            right: 0;
            transform-origin: right;
            background-color: #fff;
            transform: rotate(30deg);
        }
        p {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--Sub-Lime, #fff);
            /* color: var(--Sub-Lime, #b6d72a); */
            text-align: center;
            position: absolute;
            left: 98px;
            top: 50%;
            transform: translateY(-50%);
        }
        img {
            width: 60px;
            height: 18px;
            position: absolute;
            left: 28px;
            top: 50%;
            transform: translateY(-50%);
        }
        .logo-on {
            /* opacity: 0; */
        }
    }
    .contentTitle {
        position: absolute;
        left: 155px;
        top: 426px;
        font-size: 80px;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
        -webkit-background-clip: text;
        background-image: linear-gradient(#fff, #fff);
        background-repeat: no-repeat;
        background-size: 0% 100%;
        font-weight: 600;
        white-space: pre-line;
    }
    .bgimg {
        width: 1386px;
        height: 1319px;
        position: absolute;
        top: 564px;
        left: 668px;
    }
    .up {
        position: absolute;
        top: 337px;
        left: 155px;
        font-size: 200px;
        font-family: 'wedrive';
        -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
        -webkit-background-clip: text;
        background-image: linear-gradient(#fff, #fff);
        background-repeat: no-repeat;
        background-size: 0% 100%;
        line-height: 1;
    }
    .down {
        position: absolute;
        top: 715px;
        left: 155px;
        font-size: 200px;
        font-family: 'wedrive';
        -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
        -webkit-background-clip: text;
        background-image: linear-gradient(#fff, #fff);
        background-repeat: no-repeat;
        background-size: 0% 100%;
        line-height: 1;
    }
    .textBox {
        position: absolute;
        top: 1013px;
        left: 160px;
        .whiteText {
            font-size: 30px;
            font-weight: 400;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
            -webkit-background-clip: text;
            background-image: linear-gradient(#fff, #fff);
            background-repeat: no-repeat;
            background-size: 0% 100%;
            white-space: pre-line;
            span {
                display: block;
                -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
                -webkit-background-clip: text;
                background-image: linear-gradient(#fff, #fff);
                background-repeat: no-repeat;
                background-size: 0% 100%;
                &:nth-child(1) {
                    margin-left: 90px;
                }
            }
        }
        .limeText {
            -webkit-text-fill-color: rgba(182, 215, 42, 0.2);
            -webkit-background-clip: text;
            background-image: linear-gradient(#b6d72a, #b6d72a);
            background-repeat: no-repeat;
            background-size: 0% 100%;
            font-size: 30px;
            font-weight: 400;
        }
    }
    .haralogo {
        position: absolute;
        top: 1219px;
        left: 162px;
        img {
            width: 82px;
        }
    }
    .haralogo2 {
        overflow: hidden;
        width: 82px;
        height: 0px;
        position: absolute;
        top: 1219px;
        left: 162px;
        z-index: 100;
        img {
            width: 82px;
        }
    }
    .haralogobig {
        z-index: 100;
        position: absolute;
        top: 1034px;
        left: 1002px;
        img {
            width: 180px;
        }
    }
    .haralogobig2 {
        overflow: hidden;
        z-index: 100;
        position: absolute;
        width: 180px;
        height: 0px;
        top: 1034px;
        left: 1002px;
        img {
            width: 180px;
        }
    }
    .bigText {
        z-index: 100;
        position: absolute;
        top: 1097px;
        left: 1002px;
        font-size: 80px;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
        -webkit-background-clip: text;
        background-image: linear-gradient(#fff, #fff);
        background-repeat: no-repeat;
        background-size: 0% 100%;
        font-family: 'Lush Handwritten WLat Bold', sans-serif;
        display: block;
        width: 580px;
        text-align: center;
    }
    .slideImg {
        /* border: 1px solid #fff; */
        width: 100%;
        height: 680px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;
