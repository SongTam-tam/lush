import styled from 'styled-components';

export const MypageProfileStyle = styled.section`
    width: 100%;
    height: 326px;
    box-sizing: border-box;
    padding: 60px 150px;
    position: relative;
    display: flex;
    background-color: #fafafa;

    .profile {
        margin-right: 100px;
        display: flex;
        align-items: end;
        height: 105px;
        img {
            width: 105px;
            height: 105px;
        }
        i {
            font-size: 18px;
        }
    }
    .profile_name {
        margin-right: 460px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        padding: 10.5px 0;
        height: 105px;
        p {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            color: var(--Main-Black, #000);
            text-align: center;
            margin-bottom: 30px;
        }
        span {
            display: block;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-decoration-line: underline;
            text-decoration-style: solid;
            text-decoration-skip-ink: auto;
            text-decoration-thickness: auto;
            text-underline-offset: auto;
            text-underline-position: from-font;
            color: var(--GrayScale-2, #848484);
            cursor: pointer;
        }
    }
    ul {
        display: flex;
        gap: 50px;
        li {
            padding: 18px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            cursor: pointer;
            i {
                font-size: 33px;
                color: #b6d72a;
            }
            span {
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                color: var(--Main-DarkGray, #353535);
                text-align: center;
                display: block;
            }
        }
    }
    .gift {
        display: flex;
        align-items: center;
        position: absolute;
        right: 150px;
        bottom: 60px;
        i {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:first-child {
                margin-right: 10px;
                font-size: 24px;
            }
            &:last-child {
                font-size: 24px;
            }
        }
        p {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--Main-DarkGray, #353535);
            margin-right: 190px;
            cursor: pointer;
        }

        span {
            display: block;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--Main-DarkGray, #353535);
            cursor: pointer;
        }
    }
`;
