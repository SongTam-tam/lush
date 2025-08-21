import styled from 'styled-components';

export const SearchStyle = styled.div`
    width: 100%;
    padding-top: 240px;
    .inner {
        width: 1600px;
        position: relative;
        margin: auto;
        h2 {
            top: -125px;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            text-align: center;
            font-size: 42px;
            font-weight: 500;
            color: #000;
            span {
                color: #b6d72a;
            }
        }
    }
    .inner2 {
        width: 1600px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 240px;
        margin: auto;
        h2 {
            font-size: 28px;
            font-weight: 500;
            color: #000;
        }
    }
`;
