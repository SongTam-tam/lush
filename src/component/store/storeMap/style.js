import styled from 'styled-components';

export const APIMapStyle = styled.div`
    overflow: hidden;
    width: 100%;
    position: relative;
    display: flex;
    .mapTop {
        width: 1116px;
        padding-top: 39px;
        background-color: #000;
        padding-bottom: 39px;
        height: 100px;
        box-sizing: border-box;
        .mapList {
            display: flex;
            justify-content: center;
            gap: 60px;
            li {
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                cursor: pointer;
                color: var(--GrayScale-3, #aaa);
                &.on {
                    color: #b6d72a;
                }
            }
        }
    }
    .right {
        width: 41.6667vw;
        text-align: center;
        position: relative;
        padding-top: 118px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .pic {
            text-align: center;
            width: 48px;
            height: 48px;
            img {
                width: 48px;
            }
        }
        h2 {
            margin-top: 42.79px;
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--GrayScale-1, #5b5b5b);
            text-align: center;
        }
        p {
            color: var(--GrayScale-3, #aaa);
            margin-top: 11px;
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-align: center;
            margin-bottom: 118px;
        }
        .rightBig {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 0 0;
            background-image: url(./images/store/img1.png);
            width: 800px;
            height: 800px;
        }
    }
    .rightRegion {
        position: absolute;
        z-index: 10;
        width: 789px;
        height: 1200px;
        background-color: #fff;
        top: 0;
        right: -800px;
        transition: 0.5s;
        display: flex;

        &.on {
            right: 0;
        }
        .region-con {
            padding-top: 92px;
            padding-left: 72px;
            display: none;
            &.on {
                display: block;
            }
            h2 {
                font-size: 36px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                color: #000;
                text-align: center;
                margin-bottom: 45px;
            }
            .pic {
                width: 655px;
                height: 438px;
                img {
                    width: 100%;
                }
            }
            .addr {
                margin-top: 30px;
                text-align: left;
                margin-bottom: 25px;
                strong {
                    color: var(--GrayScale-2, #848484);
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    display: block;
                    margin-bottom: 4px;
                }
                span {
                    color: var(--Main-DarkGray, #353535);
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    display: block;
                }
            }
            .tel {
                text-align: left;
                margin-bottom: 50px;
                strong {
                    color: var(--GrayScale-2, #848484);
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    display: block;
                    margin-bottom: 4px;
                }
                span {
                    color: var(--Main-DarkGray, #353535);
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    display: block;
                }
            }
            ul {
                display: flex;
                flex-wrap: wrap;
                column-gap: 45px;
                row-gap: 10px;
                li {
                    width: 188px;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    color: var(--GrayScale-3, #aaa);
                    &:hover {
                        color: #000;
                    }
                }
            }
            &.on {
                opacity: 1;
            }
        }
    }
`;

export const MapStyle = styled.div`
    width: 58.125vw;
    height: 1100px;
`;
