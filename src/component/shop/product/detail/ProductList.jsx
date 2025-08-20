import { Link } from "react-router-dom";
import { Liststyle } from "./style";

const ProductList = ({
  id,
  title,
  price,
  price2,
  rate,
  quantity,
  itemtotal,
  category,
  category2,
  img,
  img2,
}) => {
  return (
    <Liststyle>
      <Link to="/shop/shopDetail" className="product_img">
        <img src={img} alt={title} />
      </Link>
      <div className="title">
        <Link to="/shop/shopDetail">
          <h3>{title}</h3>
          <h4>₩ {price2}</h4>
        </Link>
      </div>
    </Liststyle>
  );
};

export default ProductList;
