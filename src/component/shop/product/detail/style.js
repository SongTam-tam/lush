import styled from "styled-components";

export const ProductListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 10px;
`;
export const ItemLi = styled.li`
  width: 330px;
  height: 500px;
  display: block;
  margin-bottom: 60px;

  .product_img {
    width: 330px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 300px;
      height: 300px;
      display: block;
    }
  }

  .title {
    margin-top: 30px;

    a {
      h3 {
        color: var(--Main-DarkGray, #353535);
        text-align: center;
        font-size: 20px;
        font-weight: 600;
      }
      h4 {
        color: var(--Main-DarkGray, #353535);
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
      }
    }
  }
`;
export const Liststyle = styled.li`
  width: 330px;
  height: 500px;
  .product_img {
    width: 330px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #cacaca;

    img {
      width: 300px;
      height: 300px;
      display: block;
    }
  }
`;
export const HoverDetailStyle = styled.div`
  width: 330px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  position: relative;
  .product_img {
    width: 330px;
    height: 400px;
    img {
      width: 300px;
      height: 300px;
      display: block;
    }
  }
  .title {
    margin-top: 40px;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-45%);
    h3 {
      white-space: nowrap;

      color: var(--Main-DarkGray, #353535);
      text-align: center;

      font-size: 20px;
      font-weight: 600;
    }
    h4 {
      color: var(--Main-DarkGray, #353535);
      text-align: center;

      font-size: 18px;
      font-weight: 500;
    }
  }
  .bottom-box {
    width: 330px;
    padding: 10px 14px;
    justify-content: flex-end;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);

    position: absolute;
    bottom: 0;
    .icon-box {
      display: flex;
      justify-content: flex-end;
      i {
        display: flex;
        color: white;

        &.CiHeart {
          margin-right: 8px;
        }
      }
    }
  }
`;
