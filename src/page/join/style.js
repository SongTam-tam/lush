import styled from 'styled-components';

export const JoinStyle = styled.div`
    box-sizing: border-box;
    position: relative;
    padding-top: 163px;
    width: 100%;
    .inner {
        width: 1600px;
        margin: 150px auto;
        .txt {
            display: flex;
            justify-content: space-between;
            text-align: center;
            align-items: center;
            h2 {
                font-family: 'Lush Handwritten WLat', bold;
                font-size: 100px;
                margin-left: 610px;
            }
            p {
                margin-top: 80px;
                font-size: 16px;
                color: #353535;
                span {
                    font-size: 16px;
                    color: #b6d72a;
                    margin-right: 6px;
                }
            }
        }

        form {
            margin-top: 100px;
            h3 {
                font-size: 20px;
                color: #353535;
                margin-bottom: 40px;
            }
            p {
                position: relative;
                margin-bottom: 50px;
                &::after {
                    position: absolute;
                    content: '';
                    top: -50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 1600px;
                    height: 0.2%;
                    background-color: #cacaca;
                }
                &:last-child::before {
                    position: absolute;
                    content: '';
                    top: 72px;
                    left: 0;
                    transform: translateY(-50%);
                    width: 1600px;
                    height: 0.2%;
                    background-color: #cacaca;
                }
                span {
                    margin-left: 20px;
                    font-size: 16px;
                    color: #5b5b5b;
                }
                &:first-child::after {
                    content: none;
                }
                > label {
                    display: inline-block;
                    width: 148px;
                    font-size: 16px;
                    color: #353535;
                    margin-right: 15px;
                    span {
                        font-size: 16px;
                        color: #b6d72a;
                        margin-left: 6px;
                    }
                }
                input {
                    padding-left: 10px;
                    width: 380px;
                    height: 40px;
                    border: 1px solid #aaaaaa;
                }
                select {
                    width: 86px;
                    height: 44px;
                    border: 1px solid #aaaaaa;
                    color: #848484;
                    text-align: center;
                    font-size: 16px;
                    + span {
                        margin: 0;
                        margin: 0 10px;
                    }
                }
                input[type='tel'],
                input[type='tel'] {
                    width: 112px;
                    + span {
                        margin: 0 10px;
                    }
                }
                button {
                    width: 125px;
                    height: 45px;
                    margin-left: 15px;
                    background-color: #000000;
                    color: #ffffff;
                    font-size: 14px;
                    &:hover {
                        background-color: #b6d72a;
                    }
                }
            }

            .add {
                position: relative;
                margin-top: 120px;
                &::before {
                    position: absolute;
                    content: '';
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 1600px;
                    height: 0.2%;
                    background-color: #cacaca;
                }
                h3 {
                    font-size: 20px;
                    color: #353535;
                    margin-bottom: 40px;
                }
                input[name='year'] {
                    width: 70px;
                    height: 40px;
                    border: 1px solid #aaaaaa;
                    padding-left: 10px;
                }
                input[name='month'],
                input[name='day'] {
                    width: 40px;
                    height: 40px;
                    border: 1px solid #aaaaaa;
                    padding-left: 10px;
                }

                > p {
                    font-size: 16px;
                    color: #5b5b5b;
                    font-weight: 400;
                    display: inline-block;
                    margin: 0 20px 0 10px;
                }
                > label {
                    display: inline-block;
                    width: 148px;
                    font-size: 16px;
                    color: #5b5b5b;
                    margin-right: 15px;
                    margin-top: 25px;
                    span {
                        font-size: 16px;
                        color: #b6d72a;
                        margin-left: 6px;
                    }
                }
            }
            > button {
                width: 385px;
                height: 50px;
                background-color: #000000;
                font-size: 16px;
                color: #ffffff;
                display: block;
                margin: auto;
                margin-top: 120px;
                &:hover {
                    background-color: #b6d72a;
                }
            }
        }
    }
`;
