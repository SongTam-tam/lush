import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 1);
    z-index: 1000;
    height: 163px;
    &::after {
        background-color: #444;
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        top: 93px;
    }
    .filter-bg {
        position: fixed;
        top: 163px;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
    }
    .input-bg {
        width: 100%;
        height: 300px;
        background-color: #000;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }
    .logo {
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
    }
    .userIcon {
        position: absolute;
        top: 35px;
        right: 60px;
        display: flex;
        align-items: center;
        gap: 17px;
    }
    .user {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
    }
    .lcons {
        display: flex;
        gap: 25px;
        li {
            cursor: pointer;
            display: flex;
            align-items: center;
            i {
                color: #fff;
                font-size: 24px;
                &:hover {
                    color: #b6d72a;
                }
            }
            .loginicon {
                color: #fff;
                font-size: 24px;
                &:hover {
                    color: #b6d72a;
                }
            }
            .logouticon {
                color: #fff;
                font-size: 24px;
                &:hover {
                    color: #b6d72a;
                }
            }
        }
    }
`;
