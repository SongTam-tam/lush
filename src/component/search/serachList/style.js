import styled from 'styled-components';

export const SearchListStyle = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 93.3px;
    row-gap: 60px;
    li {
        cursor: pointer;
        text-align: center;
        position: relative;
        &:hover {
            .pic {
                border: none;
            }
            .title {
                margin-top: 0;
            }
            .ic {
                display: flex;
            }
        }
        .pic {
            box-sizing: border-box;
            height: 400px;
            width: 330px;
            text-align: center;
            border-bottom: 1px solid #cacaca;
            img {
                width: 300px;
                height: 300px;
            }
        }
        .title {
            margin-top: 25px;
            margin-bottom: 15px;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            color: var(--Main-DarkGray, #353535);
            text-align: center;
        }
        span {
            display: block;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--Main-DarkGray, #353535);
        }
        .ic {
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            box-sizing: border-box;
            height: 35px;
            padding: 10px 14px;
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: end;
            gap: 10px;
            display: none;
            position: absolute;
            bottom: -10px;
            z-index: 30;
            left: 0;
            i {
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
            }
        }
    }
`;
