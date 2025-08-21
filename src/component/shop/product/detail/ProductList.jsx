import { Link } from "react-router-dom";
import { Liststyle } from "./style";

const ProductList = ({ title, price2, img }) => {
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
