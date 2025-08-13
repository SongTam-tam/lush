import styled from "styled-components";

export const HairStyle = styled.section`
width: 100%;
height: 940px;
position: absolute;
top: 1653px;
left: 0;
.rigthPic{
    /* border: 1px solid #ff0055; */
    width: 940px;
    height: 940px;
    position: absolute;
    right: 0;top: 0;
    .pic{
        position: absolute;
        right: 0;top: 0;
        overflow: hidden;
        height: 880px;
        width: 880px;
        text-align: right;
        &:hover{
            img{
                transition: 0.5s;
                transform: scale(1.2);
            }
        }
        h3{
            top: 129px;
            right: 167px;
            position: absolute;
            font-size: 80px;
            font-family: 'Lush Handwritten WLat Bold' , sans-serif;
            color: #fff;
        }
        p{
            top: 263px;
            right: 159px;
            position: absolute;
            white-space: pre-line;
            font-size: 20px;
            font-weight: 500;
            color:#fff;
        }
    }
    .colorzone{
        position: absolute;
        z-index: -1;
        right: 0;
        bottom: 0;
        width: 940px;
        height: 870px;
        background-color: #F0E7D9;
    }
}
`