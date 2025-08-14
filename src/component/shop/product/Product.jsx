import Shopheader from "../shopheader/Shopheader";
import ProductDetail from "./detail/ProductDetail";
import ProductType from "./ProductType";
import { ProductStyle } from "./style";

const ProductMain = () => {
  return (
    <ProductStyle>
      <h2>PRODUCT</h2>
      <ProductType />
      <Shopheader />
      <div className="inner">
        <ProductDetail />
      </div>
    </ProductStyle>
  );
};

export default ProductMain;
