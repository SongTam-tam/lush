import ProductList from "./ProductList";
import shopData from "../../../../assets/api/shopData";
import { ItemLi, ProductListStyle } from "./style";
import { useState } from "react";
import HoverDetail from "./HoverDetail";

const ProductDetail = () => {
  const [hoverId, setHoverId] = useState(null);

  return (
    <div>
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
          <ItemLi
            key={item.id}
            onMouseEnter={() => setHoverId(item.id)}
            onMouseLeave={() => setHoverId(null)}
          >
            {hoverId === item.id ? (
              <HoverDetail {...item} />
            ) : (
              <ProductList {...item} />
            )}
          </ItemLi>
        ))}
      </ProductListStyle>
    </div>
  );
};

export default ProductDetail;
