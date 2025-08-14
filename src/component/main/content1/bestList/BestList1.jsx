import React from "react";
import { BestListStyle } from "./style";
import BestItem1 from "./BestItem1";

const BestList1 = ({ list1, List1Ref }) => {
  return (
    <BestListStyle ref={List1Ref}>
      {list1.map((item) => (
        <BestItem1 key={item.id} item={item} />
      ))}
    </BestListStyle>
  );
};

export default BestList1;
