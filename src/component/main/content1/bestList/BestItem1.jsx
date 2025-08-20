import React from "react";

const BestItem1 = ({ item }) => {
  const {
    id,
    title,
    price,
    price2,
    rate,
    quantity,
    category,
    img,
    img2,
    incense,
    desc,
  } = item;
  return (
    <li>
      <div className="pic">
        <img src={img} alt="" />
      </div>
    </li>
  );
};

export default BestItem1;
