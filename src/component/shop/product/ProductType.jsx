import { ProductTypeStyle } from "./style";

const ProductType = () => {
  return (
    <ProductTypeStyle>
      <ul className="product-type">
        <li>
          <div className="overlay"></div>
          <div className="img_wrap">
            <img src="./images/shop/Bath.png" alt="Bath" />
            <h3>Bath</h3>{" "}
          </div>
        </li>
        <li>
          <div className="img_wrap">
            <img src="./images/shop/Shower.png" alt="Shower" />
            <h3>Shower</h3>
          </div>
        </li>
        <li>
          <div className="img_wrap">
            <img src="./images/shop/Face.png" alt="FACE" />
            <h3>FACE</h3>
          </div>
        </li>
        <li>
          <div className="img_wrap">
            <img src="./images/shop/Body.png" alt="Body" />
            <h3>Body</h3>
          </div>
        </li>
        <li>
          <div className="img_wrap">
            <img src="./images/shop/Hair.png" alt="Hair" />
            <h3>Hair</h3>
          </div>
        </li>
        <li>
          <div className="img_wrap">
            <img src="./images/shop/Fragrance.png" alt="Fragrance" />
            <h3>Fragrance</h3>
          </div>
        </li>
      </ul>
    </ProductTypeStyle>
  );
};

export default ProductType;
