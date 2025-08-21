import styled from 'styled-components';

export const FormStyle = styled.form`
    /* width: 180px;
    position: absolute;
    top: 26px;
    left: 104px;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 6px; */
    width: 700px;
    height: 60px;
    box-sizing: border-box;
    padding: 18px 50px;
    position: relative;
    input {
        display: block;
        width: 560px;
        height: 24px;
        background: transparent;
        border-style: none;
        position: relative;
        outline: none;
        box-shadow: none;
        text-align: left;
        font-size: 16px;
        color: #fff;
    }
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        height: 1px;
        background-color: #d1d1d1;
    }
`;

export const IconStyle = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    cursor: pointer;
    i {
        color: #fff;
        font-size: 24px;
    }
`;

export const FormStyle2 = styled.form`
    width: 180px;
    position: absolute;
    top: 26px;
    left: 104px;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 6px;
    input {
        display: block;
        width: 168px;
        height: 24px;
        background: transparent;
        border-style: none;
        position: relative;
        outline: none;
        box-shadow: none;
        text-align: left;
        font-size: 16px;
        color: #fff;
    }
    &::after {
        position: absolute;
        content: '';
        width: 163px;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        height: 1px;
        /* background-color: #d1d1d1; */
    }
`;

export const IconStyle2 = styled.button`
    position: absolute;
    top: 35px;
    left: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    cursor: pointer;
    i {
        color: #fff;
        font-size: 24px;
    }
`;
