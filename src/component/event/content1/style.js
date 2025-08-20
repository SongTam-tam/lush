import styled from "styled-components";

export const EventPageStyle = styled.div`
  width: 1600px;
  margin: auto;
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  padding-left: 20px;
  padding-top: 145px;
  span {
    color: #000;
    font-size: 16px;
    padding: 0 10px;
  }
  button{
    background-color: transparent;
    width: 30px;
    height: 30px;
  }
`;
