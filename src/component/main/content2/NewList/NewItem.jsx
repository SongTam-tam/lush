import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const NewItem = ({ item }) => {
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
    <div className="new-shop-item">
      <img src={img} alt="" />
      <div className="textBox">
        <strong>{title}</strong>
        <span>{category}</span>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default NewItem;
