import styled from 'styled-components';
export const SpaContent1Style = styled.section`
    /* margin-top: 700px; */
    width: 100%;
    position: relative;
    .spa-reservation {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 140px;
        margin-bottom: 145px;
        border-bottom: 0.8px solid var(--GrayScale-4, #cacaca);
        .reservation {
            cursor: pointer;
            font-size: 20px;
            font-weight: 600;
            line-height: normal;
            cursor: pointer;
            color: #353535;
            &.on {
                color: #b6d72a;
            }
            &:hover {
                color: #b6d72a;
            }
        }
        .guide {
            font-size: 20px;
            font-weight: 600;
            line-height: normal;
            color: #353535;
            cursor: pointer;
            &.on {
                color: #b6d72a;
            }
            &:hover {
                color: #b6d72a;
            }
        }
    }
    // 스파 에약 안내 문구
    .videoPic {
        width: 100%;
        text-align: center;
        height: 770px;
        margin-bottom: 100px;
    }
    // 유튜브링크 영역
    .textBox {
        text-align: center;
        margin-bottom: 100px;
        p {
            font-size: 30px;
            font-weight: 400;
            line-height: 40px;
            white-space: pre-line;
            color: #5b5b5b;
            span {
                font-weight: 600;
            }
        }
    }
    .imgBox {
        display: flex;
        gap: 80px;
        justify-content: center;
        margin-bottom: 145px;
        .pp {
            padding-top: 114px;
            box-sizing: border-box;
            width: 480px;
            height: 366px;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            border-radius: 0%;

            &:hover {
                img {
                    transform: scale(1.2);
                }
            }
            img {
                position: absolute;
                transition: 0.5s;
                left: 0;
                top: 0;
                z-index: -1;
                width: 100%;
                height: 100%;
                border-radius: 0%;
            }
        }
        p {
            text-align: center;
            color: #dbdbdb;
            font-size: 30px;
            font-weight: 400;
            line-height: normal;
            margin-bottom: 17px;
            white-space: pre-line;
        }
        span {
            display: block;
            text-align: center;
            font-size: 40px;
            font-weight: 600;
            color: #fff;
            line-height: normal;
        }
    }
`;
