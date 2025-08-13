import React from "react";

const MainHaraItem = ({ item }) => {
  const { img, id } = item;
  return (
    <li>
      <img src={img} alt="" />
    </li>
  );
};

export default MainHaraItem;
