import { Link } from "react-router-dom";
const NewItem = ({ item }) => {
  const { id, title, price, category, img } = item;
  return (
    <div className="new-shop-item">
      <Link to={`newDetail/${id}`}>
        <img src={img} alt={title} />
        <div className="textBox">
          <strong>{title}</strong>
          <span>{category}</span>
          <p>{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default NewItem;
