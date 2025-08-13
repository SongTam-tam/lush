import styled from "styled-components";

export const Content1lStyle = styled.div`
@font-face {
    font-family: 'wedrive';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/wedrive.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-image: url('/images/hara/bg.png');
background-repeat: no-repeat;
color: #fff;
text-align: center;
font-family: 'Pretendard', sans-serif;
.maintext{
    width: 1600px;
    margin: auto;
    ul{
        padding-top: 312px;
        li{
            font-size: 100px;
            font-weight: 700;
            font-style: normal;
            line-height: normal;
            font-family: 'Lush Handwritten WLat Bold' , sans-serif;
        }
        p{
            padding-top: 20px;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            padding-bottom: 580px;
        }
    }
    span{
        font-family: 'wedrive', sans-serif;
        font-size: 160px;
        line-height: 140px;
        
        strong{
            font-size: 80px;
            display: inline-block;
            padding-bottom: 290px;
        }
    }
}
.pic {
    position: relative;
    .hara_on{
    /* height: 0; */
    position: absolute;
    overflow: hidden;
    width: 300px;
    height: 0px;
    top: 0px;


    img{
        width: 300px;
    }
}
.hara_off{
    /* position: absolute; */
    img{
        width: 300px;
    }
    
}
}

.nature{
    margin-top: 30px;
    margin-bottom: 272px;
    font-size: 30px;
}

.middle-text{
    padding-top: 100px;
    padding-bottom: 800px;
    ul{
        li{
            font-size: 60px;
            font-weight: 600;
            padding-bottom: 40px;
        }
    }
    .sub-text{
        p{
            font-size: 20px;
            font-weight: 500;
            line-height: 30px;
        }
    }
}

`