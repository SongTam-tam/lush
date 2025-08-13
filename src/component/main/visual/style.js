import styled from 'styled-components';

export const VisualContent = styled.section`
width: 100%;
height: 917px;
background-repeat: no-repeat;
background-image: url(./images/main/visual_bg.png);
background-size: cover;
background-position: 0 0;
position: relative;
.visual_logo{
    position: absolute;
    top: 333px;
    left: 162px;
    img{
        width: 240px;
    }
}
.visualText{
    position: absolute;
    left: 162px;
    top: 470px;
    p{
        font-size: 40px;
          font-family: 'Lush Handwritten WLat Bold' , sans-serif; 
          color: #fff;
          /* font-weight: 700; */
    }
}
`