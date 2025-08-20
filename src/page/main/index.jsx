import React from "react";
import VIsual from "../../component/main/visual/VIsual";

import { New, BestSellers } from "../../component";
import Review from "../../component/main/content3/Review";
import Product from "../../component/main/content4/Product";
import MainHara from "../../component/main/content5/MainHara";
import Wonder from "../../component/main/content6/Wonder";
import Value from "../../component/main/content7/Value";

const Main = () => {
  return (
    <div>
      <VIsual />
      <BestSellers />
      <New />
      <Review />
      <Product />
      <MainHara />
      <Wonder />
      <Value />
    </div>
  );
};

export default Main;
