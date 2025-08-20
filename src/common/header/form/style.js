import styled from 'styled-components';

export const FormStyle = styled.form`
    width: 168px;
    position: absolute;
    top: 26px;
    left: 101px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 6px;
    /* border: 1px solid #000; */

    input {
        width: 100%;
        background: transparent;
        border-style: none;
        position: relative;
        outline: none;
        box-shadow: none;
        text-align: center;
        font-size: 16px;
        color: #fff;
    }
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        bottom: 0px;
        left: 0;
        height: 1px;
        background-color: #d1d1d1;
    }
`;

export const IconStyle = styled.i`
    position: absolute;
    top: 52px;
    left: 60px;
    color: #fff;
    font-size: 24px;
`;
