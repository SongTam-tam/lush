import { Content3lStyle } from "./style";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Content3 = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    const sideTargets = sectionRef.current.querySelectorAll(
      ".side-bar h3, .side-bar h4"
    );
    const textTargets = sectionRef.current.querySelectorAll(
      ".Scroll li, .Scroll p"
    );

    // 점, 선 색 변경
    gsap.to(sideTargets, {
      backgroundColor: "#B6D72A",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: true,
        // markers: true,
      },
      stagger: 0.3,
    });

    // STEP, 설명 텍스트 색 변경
    gsap.to(textTargets, {
      color: "#B6D72A",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: true,
      },
      stagger: 0.3,
    });
  }, []);

  return (
    <Content3lStyle>
      <div className="left-section">
        <div className="main-text">
          <img src="/images/hara/hara_on.png" alt="" />
          <h2>RECIPE COURSE</h2>
        </div>
        <div className="Scroll" ref={sectionRef}>
          <ul>
            <div className="side-bar">
              <h3></h3>
              <h4></h4>
            </div>
            <div className="text1">
              <li>STEP 1</li>
              <p>감정 카드 선택</p>
              <span>오늘의 감정과 관련된 카드를 소지하여 입장</span>
            </div>
          </ul>
          <ul>
            <div className="side-bar">
              <h3></h3>
              <h4></h4>
            </div>
            <div className="text2">
              <li>STEP 2</li>
              <p>나의 감정 티켓 받기</p>
              <span>감정 티켓에 맞는 제품 및 향기 코스 제공</span>
            </div>
          </ul>
          <ul>
            <div className="side-bar">
              <h3></h3>
              <h4></h4>
            </div>
            <div className="text3">
              <li>STEP 3</li>
              <p>감정 오감 체험하기</p>
              <span>
                {`오늘의 감정에 맞춘 5가지 감각 체험 루트를 따라
               제품을 직접 느끼고 즐기는 감성 레시피 시작!`}
              </span>
            </div>
          </ul>
          <ul>
            <div className="side-bar">
              <h3></h3>
              <h4></h4>
            </div>
            <div className="text4">
              <li>STEP 4</li>
              <p>감정 한 스푼, 나만의 레시피 쓰기</p>
              <span>
                {`오늘 느낀 감정과 끌렸던 향기나 제품을 기억하며 비슷한
               기분이 올 때 어떻게 쓰면 좋을지 나만의 방법을 떠올려보기`}
              </span>
            </div>
          </ul>
          <ul>
            <div className="side-bar">
              <h3></h3>
              <h4></h4>
            </div>
            <div className="text5">
              <li>STEP 5</li>
              <p>마음을 담은 선물 받기</p>
              <span>
                {`감정 카드를 제출하면 당신의 오늘을 위로할 미니 배쓰밤/전용
               루틴 제안서 증정 (개인에 맞춘 제품 추천 & 사용법 안내서)`}
              </span>
            </div>
          </ul>
        </div>
      </div>
      <div className="right-section"></div>
    </Content3lStyle>
  );
};

export default Content3;
