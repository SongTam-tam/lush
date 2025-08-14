import { ProductStyle } from "./style";
import Bath from "./bath/Bath";
import Hair from "./hair/Hair";
import Fragrances from "./fragrances/Fragrances";

const Product = () => {
  return (
    <ProductStyle>
      <h2>OUR PRODUCT</h2>
      <Bath />
      <Hair />
      <Fragrances />
    </ProductStyle>
  );
};

export default Product;
