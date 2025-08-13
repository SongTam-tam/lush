import React, { useEffect } from "react";
import { HairStyle } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import HairList from "./hairList/HairList";

const Hair = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <HairStyle>
      <div className="rigthPic">
        <div
          className="pic"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src="./images/main/product_img1_1.png" alt="" />
          <h3
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Hair
          </h3>
          <p
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >{`Shompoo
Shampoo Bars
Co-Wash
Hair Treatments
Hair Conditioners
Hair Styling`}</p>
        </div>
        <div className="colorzone"></div>
      </div>
      <HairList />
    </HairStyle>
  );
};

export default Hair;
