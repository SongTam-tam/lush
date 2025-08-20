import styled from "styled-components";
export const GnbStyle = styled.div`
width: auto;
height: 100px;
border-bottom: 1px solid #cacaca;
ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 140px;
    padding-top: 32px;
    li{
        font-family: 'Pretendard', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        cursor: pointer;
        &:first-child {
            color: #B6D72A;
        }
        &:hover {
            color: #B6D72A;
            
        }
    }
}
`