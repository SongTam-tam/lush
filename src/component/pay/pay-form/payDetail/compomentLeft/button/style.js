import styled from "styled-components";

export const ButtonStyle = styled.div`
  a {
    background: #f7f7f7;
    width: 360px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    p {
      color: #aaa;
      font-size: 18px;
      font-weight: 500;
      display: inline-block;
    }
  }

  a:hover {
    background: #b6d72a;
  }

  a:hover p {
    color: #fff;
  }
`;
export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 25px;
`;
