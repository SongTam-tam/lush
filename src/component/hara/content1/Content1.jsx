import { useEffect, useRef } from "react";
import { Content1lStyle } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Content1 = () => {
  const imgBigRef = useRef();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useGSAP(
    () => {
      gsap.to(imgBigRef.current, {
        height: "92px",
        scrollTrigger: {
          trigger: imgBigRef.current,
          start: "top 80%",
          end: "bottom -20%",
          // scrub: true,
          scrub: 1,
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
    },
    { scope: imgBigRef }
  );

  return (
    <Content1lStyle className="hara-main">
      <div className="maintext">
        <ul>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            A MOMENT FOR ME
          </li>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            자연을 바르고, 마음을 채우다
          </p>
        </ul>
        <span>
          “
          <strong
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            어떤 감정을 드시겠어요?
          </strong>
          ”
        </span>
      </div>
      <div className="pic">
        <h3 className="hara_off">
          <img src="./images/hara/hara_off.png" alt="hara image" />
        </h3>
        <h3 className="hara_on" ref={imgBigRef}>
          <img src="./images/hara/hara_on.png" alt="hara image" />
        </h3>
      </div>
      <span
        className="nature"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        자연이 만든 레시피로 힐링하다
      </span>
      <div className="middle-text">
        <ul>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            감정을 대접하는 공간
          </li>
        </ul>
        <div className="sub-text">
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            먹지 않아도 마음이 포근해지는 한 접시
          </p>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            향기・촉감・시각・소리・공간으로
          </p>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            감정을 풍요롭게 채우세요.
          </p>
        </div>
      </div>
    </Content1lStyle>
  );
};

export default Content1;
