import BestMain from "../../component/shop/best/BestMain";
import ProductMain from "../../component/shop/product/Product";
import Visual from "../../component/shop/visual/Visual";
import { ShopStyle } from "./style";

const Shop = () => {
  return (
    <ShopStyle>
      <Visual />
      <BestMain />
  
      <ProductMain />
    </ShopStyle>
  );
};

export default Shop;
