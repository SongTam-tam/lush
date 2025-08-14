import React from "react";
import { BestListStyle, BestListStyle2 } from "./style";
import BestItem2 from "./BestItem2";

const BestList2 = ({ list2, List2Ref }) => {
  return (
    <BestListStyle2 ref={List2Ref}>
      {list2.map((item) => (
        <BestItem2 key={item.id} item={item} />
      ))}
    </BestListStyle2>
  );
};

export default BestList2;
