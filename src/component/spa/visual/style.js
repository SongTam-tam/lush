import styled from 'styled-components';

export const SpaVisualStyle = styled.section`
    position: relative;
    width: 100%;
    height: 600px;
    background-image: url(./images/spa/banner.jpg);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    h2 {
        position: absolute;
        top: 213px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 80px;
        color: #fff;
        font-family: 'Lush Handwritten WLat Bold', sans-serif;
    }
    .spa-store {
        position: absolute;
        z-index: 100;
        left: 50%;
        transform: translateX(-50%);
        top: 396px;
        width: 1600px;
        height: 144px;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid #848484;
        .pikDate {
            position: absolute;
            top: 35px;
            left: 342px;
            display: block;
            color: #cacaca;
            font-size: 18px;
            font-weight: 500;
            line-height: normal;
            pointer-events: none;
        }
        .cal {
            position: absolute;
            top: 53px;
            left: 464px;
            pointer-events: none;
            i {
                display: block;
                width: 38px;
                height: 38px;
                font-size: 38px;
                color: #fff;
            }
        }
        .spatitle {
            color: #fff;
            font-size: 30px;
            font-family: 'Lush Handwritten WLat Bold', sans-serif;
            text-transform: uppercase;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 36px;
            &::after {
                content: '';
                background-color: #aaa;
                height: 66px;
                width: 0.5px;
                position: absolute;
                right: -33.5px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        .react-datepicker {
            font-family: Arial, sans-serif; /* 부모 폰트 상속 방지 */
            font-size: 14px;
            outline: none;
            background-color: #000;
            color: #fff;
        }

        .react-datepicker__current-month {
            font-size: 14px;
            font-weight: bold;
            color: #b6d72a;
        }

        .react-datepicker__day-name,
        .react-datepicker__day,
        .react-datepicker__time-name {
            font-size: 12px;
            color: #fff;
        }
        .react-datepicker-wrapper {
            position: absolute;
            left: 260px;
            top: 0;
            width: 280px;
            height: 144px;
            font-size: 16px;
            outline: none;
            &::after {
                content: '';
                background-color: #aaa;
                height: 66px;
                width: 0.5px;
                position: absolute;
                right: 0px;
                top: 50%;
                transform: translateY(-50%);
            }
            .react-datepicker__input-container {
                width: 100%;
                height: 100%;
                input {
                    cursor: pointer;
                    box-sizing: border-box;
                    outline: none;
                    padding-left: 37px;
                    padding-top: 35px;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                    border: none;
                    color: #fff;
                    font-size: 24px;
                    line-height: 1;
                    font-weight: 500;
                }
            }
        }
        .react-datepicker__month-container {
            .react-datepicker__header {
                position: relative;
                height: 20px;
                background-color: #000;
                .react-datepicker__current-month {
                    top: 8px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #fff;
                }

                .react-datepicker__navigation--prev {
                    color: #fff;
                }
                .react-datepicker__navigation--next {
                }
            }
        }
        .react-datepicker__day--selected {
            color: #fff;
            background-color: #b6d72a;
        }
        .react-datepicker__day-names {
            font-size: 12px;
            display: flex;
            justify-content: center;
            /* gap: 5px; */
            margin-bottom: 10px;
            .react-datepicker__day-name {
                color: #a2a2a2;
                /* margin: 0; */
            }
        }
        .custom-select {
            width: 280px;
            height: 144px;
            border: none;
            box-sizing: border-box;
            border-radius: 6px;
            position: relative;
            cursor: pointer;
        }
        .selected {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 100;
            padding-left: 37px;
            width: 280px;
            height: 144px;
            color: #fff;
            font-size: 24px;
            line-height: 1;
            font-weight: 500;
            box-sizing: border-box;
            padding-top: 37px;
            p {
                font-size: 18px;
                color: #cacaca;
                font-weight: 500;
                line-height: normal;
                margin-bottom: 19px;
            }
            &::after {
                content: '';
                background-color: #aaa;
                height: 66px;
                width: 0.5px;
                position: absolute;
                right: 0px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        .options {
            position: absolute;
            z-index: 10;
            top: 100%;
            left: 0;
            width: 100%;
            border: 1px solid #ccc;
            border-top: none;
            background: white;
            max-height: 150px;
            overflow-y: auto;
            z-index: 100;
            max-height: 1000px;
            background-color: rgba(255, 255, 255, 0.1);
            li {
                padding-left: 37px;
                box-sizing: border-box;
                width: 280px;
                height: 144px;
                color: rgb(112, 112, 112);
                border: 1px solid #848484;
                border-bottom: none;
                font-size: 24px;
                line-height: 1;
                font-weight: 500;
                &:last-child {
                    border-bottom: 1px solid #848484;
                }
                p {
                    font-size: 18px;
                    color: #cacaca;
                    font-weight: 500;
                    line-height: normal;
                    margin-bottom: 19px;
                    margin-top: 37px;
                }

                &:hover {
                    color: rgb(112, 112, 112);
                    background-color: rgba(182, 215, 42, 0.1);
                }
            }
        }
        .selectPosition {
            position: absolute;
            top: 0;
            left: 540px;
            z-index: 10;
        }
        .selectPosition2 {
            position: absolute;
            top: 0;
            left: 820px;
            z-index: 10;
        }
        .timePosition {
            position: absolute;
            top: 0;
            left: 1100px;
            z-index: 10;
            .selected {
                &::after {
                    content: none;
                }
            }
        }
        .shopcheck {
            padding-left: 46px;
            padding-right: 43px;
            width: 131px;
            height: 144px;
            background-color: rgba(255, 255, 255, 0.15);
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            align-items: center;
            p {
                font-size: 24px;
                font-weight: 500;
                line-height: normal;
                color: #b6d72a;
                text-align: center;
            }
            &:hover {
                background-color: #b6d72a;
                p {
                    color: #fff;
                }
            }
        }
        /* .custom-select2 {
            position: absolute;
            top: 0;
            left: 0px;
            width: 280px;
            height: 144px;
            border: none;
            box-sizing: border-box;
            border-radius: 6px;
            position: relative;
            cursor: pointer;
            .selected2 {
                padding-left: 37px;
                width: 280px;
                height: 144px;
                color: #fff;
                font-size: 24px;
                line-height: 1;
                font-weight: 500;
                box-sizing: border-box;
                padding-top: 37px;
                p {
                    font-size: 18px;
                    color: #cacaca;
                    font-weight: 500;
                    line-height: normal;
                    margin-bottom: 19px;
                }
                &::after {
                    content: '';
                    background-color: #aaa;
                    height: 66px;
                    width: 0.5px;
                    position: absolute;
                    right: 0px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            .options2 {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                border: 1px solid #ccc;
                border-top: none;
                background: white;
                max-height: 150px;
                overflow-y: auto;
                z-index: 100;
                max-height: 1000px;
                background-color: rgba(255, 255, 255, 0.1);
                li {
                    padding-left: 37px;
                    box-sizing: border-box;
                    width: 280px;
                    height: 144px;
                    color: rgb(112, 112, 112);
                    border: 1px solid #848484;
                    border-bottom: none;
                    font-size: 24px;
                    line-height: 1;
                    font-weight: 500;
                    &:last-child {
                        border-bottom: 1px solid #848484;
                    }
                    &:hover {
                        color: rgb(112, 112, 112);
                        background-color: rgba(182, 215, 42, 0.1);
                    }
                    p {
                        font-size: 18px;
                        color: #cacaca;
                        font-weight: 500;
                        line-height: normal;
                        margin-bottom: 19px;
                        margin-top: 37px;
                    }
                }
            }
        } */
    }
`;
