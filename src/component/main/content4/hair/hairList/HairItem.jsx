const HairItem = ({ item }) => {
  const {
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
  } = item;
  return (
    <article className="hairContent">
      <div className="textBox">
        <h3>{title}</h3>
        <p>{category}</p>
        <span>{desc}</span>
      </div>
      <div className="pic">
        <img src={img} alt="" />
      </div>
    </article>
  );
};

export default HairItem;
