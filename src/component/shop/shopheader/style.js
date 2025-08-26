// style.ts (Shopheaderstyled)
import styled from "styled-components";

export const Shopheaderstyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff; /* fixed 시 비침 방지 */

  /* 2600px 넘긴 뒤에 붙을 때 사용할 클래스 */
  &.fixed {
    position: fixed;
    top: var(--site-header-height, 64px); /* 사이트 헤더 바로 아래 */
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  ul {
    display: flex;
    /* 필요하면 중앙 정렬용 최대 너비를 두세요 */
    /* max-width: 1200px; width: 100%; margin: 0 auto; */

    li {
      font-family: "Lush Handwritten WLat";
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      height: 80px; /* SUBHEADER_HEIGHT와 동일하게 유지 */
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
