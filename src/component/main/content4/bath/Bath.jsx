import React, { useEffect } from "react";
import { BathStyle } from "./style";
import BathList from "./bathList/BathList";
import AOS from "aos";
import "aos/dist/aos.css";
const Bath = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BathStyle>
      <div className="leftPic">
        <div
          className="pic"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src="./images/main/product_img0_1.png" alt="" />
          <h3
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            BATH
          </h3>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >{`Bath Bombs
Bubble Bars
Bath Oil`}</p>
        </div>
        <div className="colorzone"></div>
      </div>
      <BathList />
    </BathStyle>
  );
};

export default Bath;
