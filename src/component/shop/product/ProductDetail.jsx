import ProductList from "./ProductList";
import shopData from "../../../assets/api/shopData";
import { ProductListStyle } from "./style";
const ProductDetail = () => {
  return (
    <div className="inner">
      <h2>BATH</h2>
      <details>
        <summary>필터 선택</summary>
        <ul>
          <li>aa</li>
          <li>최신순</li>
          <li>인기순</li>
        </ul>
      </details>
      <ProductListStyle className="product_list">
        {shopData.map((item) => (
          <ProductList key={item.id} {...item} />
        ))}
      </ProductListStyle>
    </div>
  );
};

export default ProductDetail;
