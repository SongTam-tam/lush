import styled from "styled-components";
export const EventPageListStyle = styled.div`
width: 366px;
min-height: 366px;
text-align: center;
cursor: pointer;
font-family: 'Pretendard', sans-serif;
h2{
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    padding-top: 30px;
    padding-bottom: 20px;
}
p {
    color:#848484;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 10px;
}
span {
    padding-top: 20px;
    color: #353535;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 60px;
    display: inline-block;
    padding-bottom: 60px;
    
    
}

div{
    width: 366px;
    height: 366px;
    overflow: hidden;
        &:hover{
            img{
    transition: transform 0.7s ease;
    transform: scale(1.1);
}}}
`