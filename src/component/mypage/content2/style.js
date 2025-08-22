import styled from 'styled-components';

export const MypageOrderStyle = styled.section`
    margin-top: 150px;

    h2 {
        color: var(--Main-DarkGray, #353535);
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 50px;
    }
    p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--Main-DarkGray, #353535);
        text-align: right;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        i {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            font-size: 24px;
        }
    }
`;
