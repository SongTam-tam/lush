import React, { useState } from "react";
import { MainHaraListStyle } from "./style";
import haraData from "../../../../assets/api/mainHara";
import MainHaraItem from "./MainHaraItem";

const MainHaraList = ({ autoRef }) => {
  const [data, setData] = useState(haraData);
  return (
    <MainHaraListStyle ref={autoRef}>
      {data.map((item) => (
        <MainHaraItem key={item.id} item={item} />
      ))}
    </MainHaraListStyle>
  );
};

export default MainHaraList;
