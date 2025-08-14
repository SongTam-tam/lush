import styled from "styled-components";

export const Shopheaderstyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    li {
      font-family: "Lush Handwritten WLat";
      font-size: 20px;
      font-weight: 700;

      display: flex;
      height: 80px;
      padding: 0 37px;
      justify-content: center;
      align-items: center;
      margin-right: 40px;
      &.on {
        border-bottom: 3px solid #b6d72a;
        color: var(--Sub-Lime, #b6d72a);
      }
    }
  }
`;
