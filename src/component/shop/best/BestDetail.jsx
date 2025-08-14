<<<<<<< HEAD
import { Link } from 'react-router-dom';

const BestDetail = ({
    id,
    title,
    price,
    price2,
    rate,
    quantity,
    itemtotal,
    category,
    img,
    img2,
    incense,
    desc,
}) => {
    return (
        <li className="best5list">
            <Link to="/shop/shopDetail" className="slideimg">
                <img src={img} alt={title} />
            </Link>
            <Link to="/shop/shopDetail">
                <h3>{title}</h3>
            </Link>
            <Link to="/shop/shopDetail">
                <h4>₩ {price2} </h4>
            </Link>
        </li>
    );
};

export default BestDetail;
=======
<<<<<<< HEAD
import { Link } from "react-router-dom";

const BestDetail = ({
  id,
  title,
  price,
  price2,
  rate,
  quantity,
  itemtotal,
  category,
  img,
  img2,
  incense,
  desc,
}) => {
  return (
    <li className="best5list">
      <Link to="/shop/shopDetail" className="slideimg">
        <img src={img} alt={title} />
      </Link>
      <Link to="/shop/shopDetail">
        <h3>{title}</h3>
      </Link>
      <Link to="/shop/shopDetail">
        <h4>₩ {price2} </h4>
      </Link>
    </li>
  );
};

export default BestDetail;
=======
import { Link } from "react-router-dom";

const BestDetail = ({
  id,
  title,
  price,
  price2,
  rate,
  quantity,
  itemtotal,
  category,
  img,
  img2,
  incense,
  desc,
}) => {
  return (
    <li className="best5list">
      <Link to="/shop/shopDetail" className="slideimg">
        <img src={img} alt={title} />
      </Link>
      <Link to="/shop/shopDetail">
        <h3>{title}</h3>
      </Link>
      <Link to="/shop/shopDetail">
        <h4>₩ {price2} </h4>
      </Link>
    </li>
  );
};

export default BestDetail;
>>>>>>> dd1d993 (“추가”)
>>>>>>> 5f9e158d9aae61bbac892fe016fffd6a90d71ad7
