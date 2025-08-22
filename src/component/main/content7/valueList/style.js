import styled from 'styled-components';

export const ValueListStyle = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    li {
        position: relative;
        width: 100%;
        height: 965px;
        .pic {
            position: absolute;
            overflow: hidden;
            left: 0;
            top: 0;
            width: 100%;
            height: 965px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .iconss {
            position: absolute;
            z-index: 10;
            width: 140px;
            height: 112px;
            top: 205px !important ;
            left: 50%;
            transform: translateX(-50%);
            img {
                width: 100%;
                height: 100%;
            }
        }
        .valueTextBox {
            text-align: center;
            position: absolute;
            z-index: 10;
            top: 350px;
            left: 50%;
            color: #fff;
            transform: translateX(-50%);
            strong {
                display: block;
                font-size: 40px;
                font-weight: 600;

                margin-bottom: 25px;
            }
            p {
                font-size: 18px;
                font-weight: 500px;
                color: #dbdbdb;
                margin-bottom: 68px;
            }
            span {
                display: block;
                font-size: 16px;
                font-weight: 500;
                position: relative;
                &::after {
                    content: '';
                    background-color: #fff;
                    width: 58px;
                    height: 0.4px;
                    position: absolute;
                    bottom: -5px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
    }

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #444;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .autoplay-progress {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 200px;
        position: absolute;
        left: 0;
        top: 0;
    }

    .progress-bar {
        --progress: 0;
        flex: 1;
        height: 8px;
        background-color: #ddd;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        display: none;
    }

    .progress-bar::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--progress) * 100%);
        height: 100%;
        background-color: #007bff;
        transition: width 0.1s linear;
    }
    .custom-pagenation {
        position: absolute;
        bottom: 252px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 32px;
        z-index: 100;
    }
    .swiper-pagination-bullet {
        width: 240px;
        height: 3px;
        background-color: rgba(170, 170, 170, 0.3);
        opacity: 1;
        border-radius: 2px;
        margin-left: 0;
        display: block;
        position: relative;
    }
    .swiper-pagination-bullet-active {
        width: 240px;
        height: 3px;
        border-radius: 2px;
        background-color: rgba(170, 170, 170, 0.3);
        display: block;
        position: relative;
        overflow: hidden;
        .pagenation-gage {
            transform: scaleX(0);
            transform-origin: left;
            background-color: #fff;
            width: 240px;
            height: 3px;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    .swiper-button-next {
        width: 80px;
        height: 80px;
        position: absolute;
        right: 133px;
        top: 365px;
        background-image: url(./images/icons/arrow_right_non.png);
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
        &::after {
            content: none;
        }
        &:hover {
            background-image: url(./images/icons/arrow_right_hover.png);
        }
    }
    .swiper-button-prev {
        width: 80px;
        height: 80px;
        position: absolute;
        left: 133px;
        top: 365px;
        background-image: url(./images/icons/arrow_left_non.png);
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
        &::after {
            content: none;
        }
        &:hover {
            background-image: url(./images/icons/arrow_left_hover.png);
        }
    }
    .valueList {
        position: absolute;
        bottom: 213px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        display: flex;
        height: 19px;
        gap: 32px;
        li {
            width: 240px;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: rgba(170, 170, 170, 0.3);
            text-align: center;
            margin: 0px 4px;
            &.active {
                color: #fff;
            }
        }
    }
`;
