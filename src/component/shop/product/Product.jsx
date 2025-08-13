import ProductDetail from "./ProductDetail";
import ProductType from "./ProductType";
import { ProductStyle } from "./style";

const ProductMain = () => {
  return (
    <ProductStyle>
        <h2>PRODUCT</h2>
        <ProductType />
      <div className="inner">
        <ProductDetail />
      </div>
    </ProductStyle>
  );
};

export default ProductMain;
