import styled from 'styled-components';

export const NavStyle = styled.nav`
    width: 100%;
    position: absolute;
    top: 108px;
    left: 0;
    .gnb {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;
        li {
            width: 80px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            /* font-family: 'KyivTypeSerif-Bold' , serif; */
            &:hover{
                a{
                    color: #B6D72A;
                }
                .con{
                 height: 18px;
                    }
                    }
            a {
             
                color: #fff;
                display: block;
                font-size: 20px;
                font-weight: 500;
                /* font-weight: 700; */
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
               width: 80px;
               height: 40px;
              
                .view {
                    width: 59px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
                .con{
                    overflow: hidden;
                    width: 59px;
                    height: 0px;
                    transition: 0.5s;
                    position: absolute;
                    top: 11px;
                    left: 10px;
                    .up{
                        width: 59px;
                        height: 18px;
                    }
                    .wave {
                           position: absolute;
                           background-color: #ff0055;
                           width: 200px;
                           height: 200px;
                           top: 300px;
                           left: 0;
                           transition: 0.5s;
  
                    }
                
            }
            
            }
        }
    }
`;
