import React from "react";
import { Content2lStyle } from "./style";

const Content2 = () => {
  return (
    <Content2lStyle>
      <ul>
        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >{`러쉬는 감정에 맞춘 루틴을 제공합니다.
            자연에서 온 원료를 코스로 구성하여
            당신의 감정에 맞는 감성 식사를 대접합니다.
        `}</li>
      </ul>
    </Content2lStyle>
  );
};

export default Content2;
