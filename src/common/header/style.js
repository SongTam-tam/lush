import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
   position: relative;
    background-color: rgba(0, 0, 0,1);
    z-index: 1000;
    .inner {
        height: 163px;
        position: relative;
        &::after {
            background-color: #444;
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            top: 93px;
        }
        .logo {
            position: absolute;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
        }
        .userIcon{
            position: absolute;
            top: 35px;
            right: 60px;
            display: flex;
            align-items: center;
            gap: 17px;
        }
        .user {
            /* position: absolute;
            top: 53px;
            left: 77.9167vw; */
            color: #fff;
            font-size: 16px;
            font-weight: 500;
        }
        .lcons {
            display: flex;
            gap: 25px;
            li{
                cursor: pointer;
                display: flex;
                align-items: center;
                i{
                    color:#fff;
                    font-size: 24px;
                    &:hover{
                        color:#B6D72A;
                    }
                }
            }
        }
    }
`;
