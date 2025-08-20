import styled from "styled-components";

export const FooterStyle = styled.footer`
width: 100%;
position: relative;
background-color: #000;
.inner {
    height: 459px;
    width: 83.3333vw;
    margin: auto;
    position: relative;
    &::after{
                content: '';
                height: 1px;
                width: 100%;
                position: absolute;
                top: 209px;
                left: 0;
                background-color: #353535;
    }
    .logo{
        position: absolute;
        top: 110px;
        left: 0;
    }
    .con1 {
        position: absolute;
        right: 0;
        top: 132px;
        display: flex;
        gap: 40px;
        li{
            font-size: 14px;
            font-weight: 500;
            color: #aaa;
            position: relative;
            &:nth-child(1){
                color: #B6D72A;
                &::after{
                    content: none;
                }
            }
            &::after{
                content: '';
                height: 12px;
                width: 1px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: -20px;
                background-color: #353535;
            }
        }
    }
    .con2 {
        /* margin-top: 306px; */
        position: absolute;
        top: 269px;
        left: 0;
        li{
            margin-bottom: 4px;
            font-size: 14px;
            color: #aaa;
            font-weight: 500;
            &:nth-child(4){
                color: #5b5b5b;
            }
        }
    }
    .con3 {
        position: absolute;
        top: 269px;
        right: 364px;
        li{
            font-size: 14px;
            font-weight: 500;
            color: #aaa;
            margin-bottom: 10px;
            button{
                background-color: transparent;
                /* border-radius: 40px; */
                width: 90px;
                height: 28px;
                border-bottom: 1px solid #bababa;
                white-space: nowrap;
                color: #aaa;
                font-size: 10px;
                padding: 6px;
                display: flex;
                gap: 6px;
                align-items: center;
                justify-content: center;
                &.on{
                    color: #B6D72A;
                    border-color: #B6D72A;
                }
                
            }
        }
    }
    .con4{
        position: absolute;
        right: 172px;
        top: 269px;
        li{
            font-size: 14px;
            font-weight: 500;
            color: #aaa;
            margin-bottom: 10px;
        }
    }
    .con5 {
        position: absolute;
        text-align: center;
        top: 269px;
        right: 0;
        li{
            font-size: 14px;
            font-weight: 500;
            color: #aaa;
            margin-bottom: 6px;
            button{
                background-color: transparent;
                /* border-radius: 40px; */
                white-space: nowrap;
                width: 80px;
                height: 28px;
                border-bottom: 1px solid #bababa;
                color: #aaa;
                font-size: 10px;
                padding: 6px;
                display: flex;
                gap: 6px;
                align-items: center;
                justify-content: center;
                &.on{
                    color: #B6D72A;
                    border-color: #B6D72A;
                }
                
            }
        }
    }
}
`