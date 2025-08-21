import styled from 'styled-components';

export const LoginStyle = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    .inner {
        display: flex;
        width: 1600px;
        margin: 150px auto;
    }

    .left {
        position: relative;
        width: 945px;
        h2 {
            font-family: 'Lush Handwritten WLat', bold;
            font-size: 100px;
            color: #353535;
            margin-left: 350px;
        }
        img {
            position: absolute;
            top: 256px;
            left: -80px;
            z-index: -1;
            width: 1860px;
        }
    }

    .right {
        padding-top: 25px;
        display: block;
        /* width: 385px; */
        margin-left: 60px;
        form {
            width: 100%;
            p {
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                input[type='text'],
                input[type='password'] {
                    width: 100%;
                    border: none;
                    border-bottom: 0.8px solid #aaaaaa;
                    outline: none;
                    width: 385px;
                    height: 50px;
                    padding-left: 10px;
                    font-size: 16px;
                    color: #aaaaaa;
                }
                &.test {
                    color: #a2a2a2;
                    font-size: 14px;
                }
                input[type='checkbox'] {
                    width: 20px;
                    height: 20px;
                    appearance: none;
                    border: 2px solid #b6d72a;
                    border-radius: 4px;
                }
                input[type='checkbox']:checked {
                    background-color: #b6d72a;
                    background-image: url('/images/login/check.png');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 20px 20px;
                }
                label {
                    font-size: 16px;
                    color: #5b5b5b;
                    padding-left: 15px;
                }
                .loginBtn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    width: 100%;
                    height: 50px;
                    background-color: #000000;
                    color: white;
                    font-size: 16px;
                    &:hover {
                        background-color: #b6d72a;
                    }
                }
                .kakaoBtn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    width: 100%;
                    height: 50px;
                    background-color: #fff06b;
                    border: 1px solid #f6de02;
                    color: #353535;
                    font-size: 16px;
                    &:hover {
                        background-color: #f6de02;
                    }
                    > img {
                        margin-right: 20px;
                    }
                }
            }
        }
    }

    ul {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 35px;
        li {
            position: relative;
            padding: 0 10px;
            > a::after {
                content: '';
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                width: 1px;
                height: 12px;
                background-color: #cccccc;
            }
            &:last-child > a::after {
                content: none;
            }
            a {
                font-size: 14px;
                color: #5b5b5b;
            }
        }
    }

    .on {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        width: 100%;
        box-sizing: border-box;
        background-color: #f7f7f7;
        &.on:hover {
            background-color: #b6d72a;
            border: none;
            strong,
            span {
                color: #ffffff;
            }
        }
        .join {
            strong {
                display: flex;
                font-size: 16px;
                color: #b6d72a;
            }
            span {
                display: block;
                font-size: 12px;
                color: #aaaaaa;
            }
        }
    }

    .sns {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        justify-content: space-between;
        p {
            margin: 0;
            font-size: 14px;
            color: #5b5b5b;
            margin: 0;
        }
        ul {
            margin: 0;
            li {
                display: flex;
                align-items: center;
                justify-content: center;
                > a::after {
                    content: none;
                }
            }
        }
    }
`;
