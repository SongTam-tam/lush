import { Link } from "react-router-dom";
import { HoverDetailStyle } from "./style";
import { CiHeart } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

const HoverDetail = ({
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
    <HoverDetailStyle>
      <Link to="/shop/shopDetail" className="product_img">
        <img src={img} alt={title} />
      </Link>
      <div className="title">
        <Link to="/shop/shopDetail">
          <h3>{title}</h3>
          <h4>₩ {price2}</h4>
          <div className="bottom-box">
            <div className="icon-box">
              <i>
                <CiHeart />
              </i>
              <i>
                <IoMdAdd />
              </i>
            </div>
          </div>
        </Link>
      </div>
    </HoverDetailStyle>
  );
};

export default HoverDetail;
