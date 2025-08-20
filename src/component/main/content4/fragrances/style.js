import styled from "styled-components";

export const FragrancesStyle = styled.section`
width: 100%;
position: absolute;
left: 0;
top: 2853px;
/* border: 1px solid #333; */
height: 940px;
.leftPic{
    /* border: 1px solid #ff0055; */
    width: 940px;
    height: 940px;
    position: relative;
    .pic{
        overflow: hidden;
        height: 880px;
        width: 880px;
        &:hover{
            img{
                transition: 0.5s;
                transform: scale(1.2);
            }
        }
        h3{
            top: 129px;
            left: 167px;
            position: absolute;
            font-size: 80px;
            font-family: 'Lush Handwritten WLat Bold' , sans-serif;
            color: #fff;
        }
        p{
            top: 263px;
            left: 159px;
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
        background-color: #F0E0CB;
    }
}
`