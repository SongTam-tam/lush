import styled from "styled-components";

export const Content3lStyle = styled.div`
display: flex;
color: #fff;
height: 1400px;
white-space: pre-line;
.right-section {
    background-image: url('/images/hara/video.png');
    width: 787px;
}
.left-section {
    width: 1134px;
    background-color: #000;
    .main-text {
        padding-top: 230px;
        text-align: center;
        position: relative;
        img{
        width: 82px;
        height: 25px;
        }
        h2{
            font-family: 'Lush Handwritten WLat Bold' , sans-serif;
            font-style: normal;
            font-size: 60px;
            font-weight: 700;
            line-height: normal;
        }
    }
    .Scroll{
        position: relative;
        transform: translateX(50%);
        li{
            font-size: 30px;
            font-weight: 700;
            font-family: 'Lush Handwritten WLat Bold' , sans-serif;
            line-height: normal;
            color: #848484;
        }
        p{
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            color: #848484;
            padding-bottom: 10px;
        }
        span{
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 25px; 
            color: #848484;
        }
        ul{
            .text1{
            position: absolute;
            transform: translateX(50%);
            }
        }

        ul{
            .text2{
            position: absolute;
            transform: translateX(-150%);
            text-align: right;
            }
        }
        ul {
            .text3{
            position: absolute;
            transform: translateX(50%);
            }
        }
        ul {
            .text4{
            position: absolute;
            transform: translateX(-135%);
            text-align: right;
            }
        }

        ul{
                &:last-child {
                h4{
                    width: 0px;
                }
            }
            .text5{
            position: absolute;
            transform: translateX(40%);
            }
        }

        .side-bar{
            position: relative;
            transform: translateY(110%);

             h3{
            position: absolute;
            transform: translateX(-50%);
            width: 16px;
            height: 16px;
            background-color: #848484;
            border-radius: 16px;
        }
                h4{
            width: 1px;
            height: 145px;
            background-color: #848484;
        }
        }
       
    }

}
`