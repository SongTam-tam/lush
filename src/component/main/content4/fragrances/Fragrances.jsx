import React from "react";
import { FragrancesStyle } from "./style";
import FragrancesList from "./fragrancesList/FragrancesList";

const Fragrances = () => {
  return (
    <FragrancesStyle>
      <div className="leftPic">
        <div
          className="pic"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src="./images/main/product_img2_0.png" alt="" />
          <h3
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            fragrances
          </h3>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >{`Perfume Discovery Gifts
Library Perfumes
Core Range
Body Sprays
Lush Melts`}</p>
        </div>
        <div className="colorzone"></div>
      </div>
      <FragrancesList />
    </FragrancesStyle>
  );
};

export default Fragrances;
