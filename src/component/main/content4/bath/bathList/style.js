import styled from 'styled-components';

export const BathListStyle = styled.div`
    position: absolute;
    right: 119px;
    top: 0;
    width: 800px;
    height: 940px;
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-wrapper {
        height: 540px;
        position: absolute;
        top: 240px;
        left: 0;
    }
    .swiper-pagination {
        position: absolute;
        bottom: 27px;
        .swiper-pagination-bullet {
            background-color: #333;
        }
    }
    .swiper-button-prev {
        position: absolute;
        left: 15px;
        top: 480px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        color: #333;
        &::after {
            content: none;
        }
        background-image: url(./images/icons/arrow_left_non.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        &:hover {
            background-image: url(./images/icons/arrow_left_default.png);
        }
    }
    .swiper-button-next {
        position: absolute;
        right: 15px;
        top: 480px;
        display: block;
        width: 80px;
        height: 80px;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        &::after {
            content: none;
        }
        background-image: url(./images/icons/arrow_right_non.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        &:hover {
            background-image: url(./images/icons/arrow_right_default.png);
        }
    }
    .showerContent {
        position: relative;
        .textBox {
            position: absolute;
            top: -160px;
            left: 50%;
            transform: translateX(-50%);
            width: 400px;
            h3 {
                font-size: 30px;
                font-weight: 600;
                margin-bottom: 10px;
                line-height: 1;
            }
            p {
                font-size: 20px;
                font-weight: 500;
                color: #353535;
                margin-bottom: 20px;
            }
            span {
                opacity: 0.6;
                display: block;
                font-size: 16px;
                font-weight: 500;
                color: #353535;
            }
        }
        .pic {
            img {
                width: 540px;
                height: 540px;
            }
        }
    }
    .btn {
        position: absolute;
        right: 301px;
        bottom: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        cursor: pointer;
        button {
            background-color: transparent;
            font-size: 18px;
        }
    }
`;
