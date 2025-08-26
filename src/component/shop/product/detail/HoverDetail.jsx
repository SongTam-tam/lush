import { Link } from "react-router-dom";
import { HoverDetailStyle } from "./style";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { cartActions } from "../../../../store/modules/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const HoverDetail = ({ id, title, price2, img, chk }) => {
  const dispatch = useDispatch();
  const { updateChk, addCart } = useSelector((state) => state.cart);
  const handleToggleHeart = () => {
    dispatch(cartActions.updateChk(id));
  };

  const handleAddCart = () => {
    dispatch(cartActions.addCart(product));
  };
  return (
    <HoverDetailStyle>
      <Link to={`/shop/shopDetail/${id}`} className="product_img">
        <img src={img} alt={title} />
        <div className="title">
          <h3>{title}</h3>
          <h4>₩ {price2}</h4>
        </div>
      </Link>
      <div className="bottom-box">
        <div className="icon-box">
          <i
            className="CiHeart"
            onClick={handleToggleHeart}
            style={{ cursor: "pointer" }}
          >
            {chk ? <FaHeart size={24} color="red" /> : <CiHeart size={24} />}
          </i>
          <i
            onClick={() => {
              handleAddCart;
            }}
            style={{ cursor: "pointer" }}
          >
            <IoMdAdd size={24} />
          </i>
        </div>
      </div>
    </HoverDetailStyle>
  );
};

export default HoverDetail;
