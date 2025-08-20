import styled from "styled-components";

export const Reviewsstyle = styled.div`
  margin-top: 200px;
  .top {
    display: flex;
    justify-content: space-between;
    h4 {
      color: var(--Main-DarkGray, #353535);
      font-size: 36px;
      font-weight: 600;
    }
    strong {
      color: var(--GrayScale-2, #848484);
      font-size: 15px;
      font-weight: 400;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        background: #848484;
        width: 51px;
        bottom: 0;

        position: absolute;
        background: #848484;
        width: 51px;
      }
    }
  }
`;
