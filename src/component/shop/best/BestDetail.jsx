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
      <Link to={`/shop/bestDetail/${id}`} className="slideimg">
        <img src={img} alt={title} />
      </Link>
      <Link to={`/shop/bestDetail/${id}`}>
        <h3>{title}</h3>
      </Link>
      <Link to={`/shop/bestDetail/${id}`}>
        <h4>₩ {price2} </h4>
      </Link>
    </li>
  );
};

export default BestDetail;
